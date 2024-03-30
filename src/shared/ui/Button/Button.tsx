import { classNames } from 'shared/lib/class-names'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
  CLEAR = 0,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={classNames(cls.button, {}, [className])} {...props}>
      {children}
    </button>
  )
}
