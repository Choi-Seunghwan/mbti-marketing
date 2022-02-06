import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Question from '@/pages/Question.vue';
import Result from '@/pages/Result.vue';
import All from '@/pages/All.vue';

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
    component: Result,
    props: true
  },
  {
    path: '/all',
    name: 'all',
    component: All
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    return { top: 0 };
  }
});

export default router;
