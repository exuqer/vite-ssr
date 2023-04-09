import { createRouter, createWebHistory } from 'vue-router';

//routes
import aboutRoute from './about';
import homeRoute from './home';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoute,
    aboutRoute,
  ],
});