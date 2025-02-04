import type { RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import SzuliPage from '../pages/SzuliPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        alias: '/',
        path: '/home',
        component: Home,
        meta: {
          isNavItem: true,
          label: 'Home',
        },
      },
      {
        name: 'szuli',
        path: '/szuli',
       /* meta: {
          isNavItem: true,
          label: 'Szuli',
        },*/
        children: [
        {
        name: 'szülinap',
        path: '',
          component: SzuliPage,
        },
        ],
      },
    ],
  },
// Always leave this as last one,
// but you can also remove it
/* {
path: '/:catchAll(.*)*',
component: () => import('pages/ErrorNotFound.vue'),
},*/
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
