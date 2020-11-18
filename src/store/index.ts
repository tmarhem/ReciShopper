import Vue from 'vue';
import Vuex from 'vuex';
// import firebase from 'firebase';
import { db } from '@/firebase';

Vue.use(Vuex);
// const db = firebase.firestore();

const store = new Vuex.Store({
  state: {
    firebaseUser: null,
    userId: null,
    ingredientsIds: [],
    recipes: [],
  },
  getters: {
    userId: (state) => state.userId,
  },
  mutations: {
    setFirebaseUser: (state, fUser) => {
      state.firebaseUser = fUser;
    },
    setUserId: (state, userId) => {
      state.userId = userId;
    },
    setIngredientsIds: (state, ingredientsIds) => {
      state.ingredientsIds = ingredientsIds;
    },
    setRecipes: (state, recipes) => {
      state.recipes = recipes;
    },
  },
  actions: {
    onUserChange: async ({ commit }, user) => {
      commit('setFirebaseUser', user);
      const userRef = db.collection('users').doc(user.uid);
      const dbUser = await userRef.get();
      const userData = dbUser.data();
      commit('setUserId', dbUser.id);
      commit('setIngredientsIds', userData ? userData.ingredients : []);
      const recipes = await userRef.collection('recipes').get();
      commit('setRecipes', recipes.docs.map((d) => ({ id: d.id, ...d.data() })));
      // TODO: Get real ingredients on OFF
    },
  },
  modules: {
  },
});

export default store;
