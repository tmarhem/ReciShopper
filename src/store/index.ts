import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/firebase';
import off from '@/mixins/openFoodFacts.mixin';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    firebaseUser: null,
    userId: null,
    ingredientsIds: [],
    ingredients: [],
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
    setIngredients: (state, ingredients) => {
      state.ingredients = ingredients;
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
      const ingredientsIds = userData ? userData.ingredients : [];
      commit('setIngredientsIds', ingredientsIds);
      const recipes = await userRef.collection('recipes').get();
      commit('setRecipes', recipes.docs.map((d) => ({ id: d.id, ...d.data() })));
      const ingredients = await off.methods.getProducts(ingredientsIds);
      commit('setIngredients', ingredients);
    },
  },
});

export default store;
