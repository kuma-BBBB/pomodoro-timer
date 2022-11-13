import type { FC, ReactNode } from 'react'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  open: boolean
}

export const BackDrop: FC<Props> = ({ children, open }) => {
  return (
    <>
      <div
        role="none"
        className={clsx([
          open ? '' : 'hidden',
          'fixed top-0 left-0 w-full h-full opacity-50 bg-white',
        ])}
      />
      <div
        className={clsx([
          open ? '' : 'hidden',
          'fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto flex justify-center items-center',
        ])}
      >
        {children}
      </div>
    </>
  )
}
