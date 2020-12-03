import Vue from 'vue';
import Vuex from 'vuex';
// import firebase from 'firebase';
import { db } from '@/firebase';
import axios from 'axios';

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
      console.log('action: onUserChange');
      commit('setFirebaseUser', user);
      const userRef = db.collection('users').doc(user.uid);
      const dbUser = await userRef.get();
      const userData = dbUser.data();
      commit('setUserId', dbUser.id);
      commit('setIngredientsIds', userData ? userData.ingredients : []);
      const recipes = await userRef.collection('recipes').get();
      commit('setRecipes', recipes.docs.map((d) => ({ id: d.id, ...d.data() })));
      // TODO: Get real ingredients on OFF

      console.log('userData.ingredients', userData ? userData.ingredients : []);
      const testIngredient = await axios.get('https://world.openfoodfacts.org/api/v0/product/3039824100358.json');
      console.log('tI', testIngredient);
    },
  },
  modules: {
  },
});

export default store;
