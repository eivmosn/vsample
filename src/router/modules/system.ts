import type { RouteRecordRaw } from 'vue-router'

export const system: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HelloWorld'),
  },
]
