import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/firebase';
import firebase from 'firebase';
import off from '@/mixins/openFoodFacts.mixin';
import { get } from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // firebaseUser: null,
    userId: '',
    // ingredientsIds: [],
    ingredients: new Array<any>(),
    recipes: [],

    user: {
      ingredients: [''],
    },
  },
  getters: {
    userId: (state) => state.userId,
    user: (state) => state.user,

  },
  mutations: {
    // setFirebaseUser: (state, fUser) => {
    //   state.firebaseUser = fUser;
    // },
    setUserId: (state, userId) => {
      state.userId = userId;
    },
    // setIngredientsIds: (state, ingredientsIds) => {
    //   state.ingredientsIds = ingredientsIds;
    // },
    setIngredients: (state, ingredients) => {
      state.ingredients = ingredients;
    },
    setRecipes: (state, recipes) => {
      state.recipes = recipes;
    },

    setUser: (state, user) => {
      state.user = user;
    },

  },
  actions: {
    onUserConnectedChange: async ({ commit, state }, user) => {
      console.log('action: onUserConnectedChange');

      const userRef = db.collection('users').doc(user.uid);

      userRef.onSnapshot(async (doc) => {
        console.log('snapshot');
        commit('setUserId', doc.id);
        commit('setUser', doc.data());

        let ingredients = await off.methods.getMissingsProducts(
          state.ingredients,
          get(state, ['user', 'ingredients'], []),
        );
        ingredients = ingredients
          .map((i) => get(i, ['data', 'product']))
          .concat(state.ingredients);
        commit('setIngredients', ingredients);
      });
    },
    onIngredientAdded: async ({ state }, ingredientId) => {
      console.log('adding ingredient');
      const userRef = db.collection('users').doc(state.userId);
      userRef.update({
        ingredients: firebase.firestore.FieldValue.arrayUnion(ingredientId),
      });
    },
  },
});

export default store;
