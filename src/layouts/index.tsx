import type { FC, ReactNode } from 'react'

import { Container } from '@/components/atoms'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}
