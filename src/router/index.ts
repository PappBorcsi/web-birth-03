import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

const createHistory = process.env.SERVER
  ? createMemoryHistory
  : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);
export const Router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Görgetés az ID-hez
      return {
        el: to.hash,
        behavior: 'smooth', // Animált görgetés
      };
    } else if (savedPosition) {
      // Ha van mentett pozíció (pl. visszalépésnél)
      return savedPosition;
    } else {
      // Alapértelmezett görgetés a lap tetejére
      return { left:0, top: 0 };
    }
  },
  routes,

  history: createHistory(process.env.VUE_ROUTER_BASE),
});

export default route(function (/* { store, ssrContext } */) {
  return Router;
});
