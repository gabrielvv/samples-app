/* eslint-disable import/no-duplicates */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { RouteConfig, Route } from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "login" */ '@/views/app/Samples.vue'),
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    props: route => ({ redirect: (route as Route).query.redirect }),
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: { isForGuestOnly: true },
  },
  {
    path: '/logout',
    beforeEnter: (to, from, next) => {
      store.dispatch('logout')
        .finally(() => next({
          path: '/login',
        }));
    },
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('login').then(({ isAuthenticated }) => {
      if (isAuthenticated) {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      }
    });
  } else if (to.matched.some(record => record.meta.isForGuestOnly)) {
    store.dispatch('login').then(({ isAuthenticated }) => {
      if (!isAuthenticated) {
        next();
      } else {
        next({
          path: '/',
        });
      }
    });
  } else {
    next();
  }
});

export default router;
