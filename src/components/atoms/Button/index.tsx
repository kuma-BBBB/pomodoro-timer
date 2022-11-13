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
  btnType?: 'btn-primary' | 'btn-secondary'
  className?: string
  'aria-label'?: string
}

export const Button: FC<Props> = ({
  children,
  btnType,
  className,
  ...rest
}) => {
  const classNames = [className]
  if (btnType !== undefined) {
    classNames.push(btnType)
  }

  return (
    <button className={clsx(classNames)} {...rest}>
      {children}
    </button>
  )
}
