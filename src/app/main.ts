import { createPinia } from 'pinia';
import { createSSRApp } from 'vue';
import App from './App.vue';
import routes from '../pages';
import { 
  createRouter,
  createMemoryHistory, 
  createWebHistory
} from 'vue-router';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();

  const router = createRouter({
    history: import.meta.env.SSR
    ? createMemoryHistory('/')
    : createWebHistory('/'),
    routes,
  });

  app.use(pinia);
  app.use(router);

  return { app, router };
}