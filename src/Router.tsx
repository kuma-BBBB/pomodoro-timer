import type { RouteObject } from 'react-router-dom'

import { lazy } from 'react'
import { useRoutes, Outlet } from 'react-router-dom'

import { Layout } from '@/layouts'

const Timer = lazy(async () => await import('@/pages/timer'))

const routeObj: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '',
        element: <Timer />,
      },
    ],
  },
]

export const Rotuer = () => {
  const element = useRoutes(routeObj)
  return element
}
