import type { FC, ReactNode } from 'react'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  justifyContent?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'center' | 'start' | 'end' | 'baseline' | 'stretch'
  width?: string
  className?: string
}
export const VStack: FC<Props> = ({
  children,
  justifyContent = 'start',
  alignItems = 'start',
  className = '',
}) => {
  const classNames = [
    'flex flex-col',
    `justify-${justifyContent}`,
    `items-${alignItems}`,
    className,
  ]

  return <div className={clsx(classNames)}>{children}</div>
}
