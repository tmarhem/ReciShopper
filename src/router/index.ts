import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    component: () => import('@/views/Ingredients.vue'),
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import('@/views/Recipes.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
