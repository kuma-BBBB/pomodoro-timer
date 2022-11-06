import type {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  btnType?: 'btn-primary' | 'btn-outline'
  className?: string
}

export const Button: FC<Props> = ({
  children,
  onClick,
  btnType,
  type = 'button',
  className = '',
}) => {
  const classNames = [className]
  if (btnType !== undefined) {
    classNames.push(btnType)
  }

  return (
    <button type={type} className={clsx(classNames)} onClick={onClick}>
      {children}
    </button>
  )
}
