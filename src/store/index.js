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
  },
  actions: {
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
    async logout({ commit }) {
      await auth.signOut();
      commit("SET_USER", null);
      router.push("/login");
    },
    async fetchData({ commit }) {
      let data = [];
      await db
        .collection("entries")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
      commit("SET_ENTRIES", data);
    },
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
  },
  modules: {},
});
