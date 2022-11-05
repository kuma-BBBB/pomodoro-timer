import type { FC, ReactNode } from 'react'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  justifyContent?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'center' | 'start' | 'end' | 'baseline' | 'stretch'
  width?: string
  className?: string
}
export const HStack: FC<Props> = ({
  children,
  justifyContent = 'start',
  alignItems = 'start',
  width = 'full',
  className = '',
}) => {
  const classNames = [
    'flex flex-row',
    `justify-${justifyContent}`,
    `items-${alignItems}`,
    `w-${width}`,
    className,
  ]
  return <div className={clsx(classNames)}>{children}</div>
}
