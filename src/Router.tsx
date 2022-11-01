import type { RouteObject } from 'react-router-dom'

import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Timer = lazy(async () => await import('@/pages/timer'))

const routeObj: RouteObject[] = [
  {
    path: '/',
    element: <Timer />,
  },
]

export const Rotuer = () => {
  const element = useRoutes(routeObj)
  return element
}
