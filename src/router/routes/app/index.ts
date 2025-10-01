import type { RouteRecordRaw } from 'vue-router'
import { RouteName } from '@/constants'
import AppMainLayout from '@/views/layouts/app/AppMainLayout.vue'

export const APP_PATH = 'app'

export const ApplicationRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: APP_PATH,
    component: AppMainLayout,
    redirect: {
      name: RouteName.PORTFOLIO
    },
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'portfolio',
        name: RouteName.PORTFOLIO,
        meta: { title: 'portfolio.title' }, // Use meta title for localization
        component: () => import('@/views/pages/portfolio/Portfolio.vue')
      },
      {
        path: 'about',
        name: RouteName.ABOUT,
        meta: { title: 'about.title' }, // Use meta title for localization
        component: () => import('@/views/About.vue')
      },
    ] as RouteRecordRaw[]
  }
]
