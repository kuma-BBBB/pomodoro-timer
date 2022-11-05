import type { FC, ReactNode } from 'react'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  justifyContent?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'center' | 'start' | 'end' | 'baseline' | 'stretch'
  width?: string
  gap?: number
}
export const VStack: FC<Props> = ({
  children,
  justifyContent = 'start',
  alignItems = 'start',
  gap,
}) => {
  const classNames = [
    'flex flex-col',
    `justify-${justifyContent}`,
    `items-${alignItems}`,
  ]
  if (gap !== undefined) {
    classNames.push(`gap-${gap}`)
  }

  return <div className={clsx(classNames)}>{children}</div>
}
