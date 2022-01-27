import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Question from '@/pages/Question.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/question',
    name: 'question',
    component: Question
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
