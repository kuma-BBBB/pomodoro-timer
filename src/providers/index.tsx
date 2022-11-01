import type { FC, ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode
}
export const RouteProvider: FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
