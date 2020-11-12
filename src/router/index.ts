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
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: '/plannings',
    name: 'Plannings',
    component: () => import('@/views/Plannings.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
