import type { RouteRecordRaw } from 'vue-router'
import { APP_PATH, ApplicationRoutes } from '@/router/routes/app'

export function loadRoutes(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [
    {
      path: '',
      name: 'root',
      redirect: {
        name: APP_PATH
      }
    },
    ...ApplicationRoutes,
  ]

  return routes
}
