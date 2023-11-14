import { createRouter, createWebHistory } from 'vue-router'
export const routes = [
  {
    path: '/',
    redirect: '/use-hef-history'
  },
  {
    path: '/use-hef-history',
    name: 'UseRefHistory',
    component: () => import('@/views/UseRefHistory.vue')
  },
  {
    path: '/on-click-outside',
    name: 'OnClickOutside',
    component: () => import('@/views/OnClickOutside.vue')
  },
  {
    path: '/use-vmodel',
    name: 'UseVModel',
    component: () => import('@/views/UseVModel.vue')
  },
  {
    path: '/use-intersection-observer',
    name: 'UseIntersectionObserver',
    component: () => import('@/views/UseIntersectionObserver.vue')
  },
  {
    path: '/use-transition',
    name: 'UseTransition',
    component: () => import('@/views/UseTransition.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
