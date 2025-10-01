import { RouteName } from "@/constants"

/**
 * List of root-level route names.
 * In the Navbar component, the left arrow is hidden for these routes.
 * However, the Tabbar is shown on these routes.
 */
export const rootRouteList: readonly string[] = [
  RouteName.PORTFOLIO,
  RouteName.MY_POST,
  RouteName.ABOUT,
]
