import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../plugins/firebase";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
    user: null,
  },
  mutations: {
    setUser(state, val) {
      state.user = val;
    },
  },
  actions: {
    async login({ commit }, form) {
      const { user } = await auth.signInWithEmailAndPassword(
        form.email,
        form.pw
      );
      commit("setUser", user);
      router.push("/createComp");
    },
    async logout({ commit }) {
      await auth.signOut();
      commit("setUser", null);
      router.push("/login");
    },
  },
  modules: {},
});
