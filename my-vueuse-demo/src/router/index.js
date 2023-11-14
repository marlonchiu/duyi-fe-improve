import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/use-hef-history'
  },
  {
    path: '/use-hef-history',
    name: 'UseRefHistory',
    component: () => import('@/views/UseRefHistory.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
