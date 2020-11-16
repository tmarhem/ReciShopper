import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    recipes: [{ recipe: 'recipe' }],
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    updateUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
  },
  modules: {
  },
});
