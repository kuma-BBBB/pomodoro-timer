import type { FC, MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  'aria-label'?: string
}

export const IconButton: FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="neumorphism rounded-full w-12 h-12 flex items-center justify-center"
    >
      {children}
    </button>
  )
}
