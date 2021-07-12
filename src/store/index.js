import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../plugins/firebase";
import { db } from "../plugins/firebase";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
    user: null,
    errorMessage: null,
    comps: [],
  },
  mutations: {
    SET_USER(state, val) {
      state.user = val;
    },
    SET_ENTRIES(state, val) {
      state.entries = val;
    },
    SET_ERRORS(state, val) {
      state.errorMessage = val;
    },
    SET_COMPS(state, val) {
      state.comps = val;
    },
  },
  actions: {
    // Login - Firebase Auth
    async login({ commit }, form) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(
          form.email,
          form.pw
        );
        commit("SET_USER", user);
        router.push("/admin");
      } catch (err) {
        let error = err.message;
        commit("SET_ERRORS", error);
        console.log(err.message);
      }
    },
    // Logout - Firebase Auth
    async logout({ commit }) {
      await auth.signOut();
      commit("SET_USER", null);
      router.push("/login");
    },
    // Email a forgot password link
    async forgotPassword({ commit }, email) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          console.log("Password reset email has been sent.");
        })
        .catch((err) => {
          let error = err.message;
          commit("SET_ERRORS", error);
          console.log(err.message);
        });
    },
    // Get Competitions (for drop down selections throughout website)
    async getComps({ commit }) {
      let competitions = [];
      // go to "competitions" collection and get the id of each document in the collection. (id name is same as competition name.)
      db.collection("competitions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            competitions.push(doc.id);
          });
        });
      // Set competitions to the state
      commit("SET_COMPS", competitions);
    },
    // Get entries for selected competition.
    async getEntries({ commit }, comp) {
      // Get collection "competitions", get competition, return all entries from competition and push data to data array. Finally, commit entries to store.
      let data = [];
      console.log("retrieving entries from " + comp + " competition.");
      db.collection("competitions")
        .doc(comp)
        .collection("entries")
        .orderBy("rank")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
            console.log(doc.data());
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
      commit("SET_ENTRIES", data);
    },
    // Submit entry.
    // async submitEntry(comp, name, imgURL, date) {
    //   // Add entry to entries sub collection. (COMPETITIONS => COMP_NAME => ENTRIES)
    //   db.collection("competitions")
    //     .doc(comp)
    //     .collection("entries")
    //     .doc(name)
    //     .set({
    //       name: name,
    //       img: imgURL,
    //       uploadDate: date,
    //     });
    // },
  },
  modules: {},
});
