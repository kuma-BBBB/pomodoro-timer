import type { FC, MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const IconButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="neumorphism rounded-full w-12 h-12 flex items-center justify-center"
    >
      {children}
    </button>
  )
}
