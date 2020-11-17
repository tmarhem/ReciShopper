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
  },
  modules: {
  },
});

export default store;
