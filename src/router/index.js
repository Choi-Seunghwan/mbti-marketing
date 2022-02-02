import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Question from '@/pages/Question.vue';
import Result from '@/pages/Result.vue';

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
  },
  {
    path: '/result/:mbti',
    name: 'result',
    component: Result
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
