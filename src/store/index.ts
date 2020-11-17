import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    firebaseUser: null,
    user: null,
    recipes: [{ recipe: 'recipe' }],
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setFirebaseUser: (state, fUser) => {
      state.firebaseUser = fUser;
    },
    updateUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    userLogin: async ({ commit }, user) => {
      commit('setFirebaseUser', user);
      // TODO: get user from DB
      commit('updateUser', user);
      // TODO: Get ingredients
      // TODO: Set ingredients in store

      // TODO: get recipes
      // TODO: set recipes in store
    },
  },
  modules: {
  },
});

export default store;
