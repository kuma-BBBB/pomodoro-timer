import type { FC, MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className="p-3 w-fit" onClick={onClick}>
      {children}
    </button>
  )
}
