import { createRouter, createWebHistory } from 'vue-router'
import { loadRoutes } from './loadRoutes'

const routes = loadRoutes()
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
