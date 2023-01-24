import { createRouter, createWebHistory } from 'vue-router'
import { system } from './modules/system'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: system,
})
