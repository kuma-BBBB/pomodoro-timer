import { FC, ReactNode } from 'react'
type Props = {
  children: ReactNode
}
export const Container: FC<Props> = ({ children }) => {
  return <div className="container mx-auto min-h-screen">{children}</div>
}
