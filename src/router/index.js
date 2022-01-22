import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
  // {
  //   path: '*',
  //   name: 'notfound'
  //   // component: NotFound
  // }
];

const router = createRouter({
  history: createWebHistory(),
  // base: process.BASE_URL,
  routes
});

export default router;
