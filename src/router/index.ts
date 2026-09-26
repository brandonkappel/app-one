import { createRouter, createWebHistory, type Router } from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';

const routes = [
  { path: '/', name: 'app-one-home', component: Home },
  { path: '/widget/:id', name: 'app-one-detail', component: Detail, props: true },
];

// Factory so the same route table can be used both standalone
// (base "/") and when mounted in the shell (base "/app/app-one").
// Using createWebHistory (NOT createMemoryHistory) means this router
// reads and writes the REAL browser URL - that's what makes deep
// links and refresh work correctly once mounted in the shell.
export function createAppRouter(base: string): Router {
  return createRouter({
    history: createWebHistory(base),
    routes,
  });
}
