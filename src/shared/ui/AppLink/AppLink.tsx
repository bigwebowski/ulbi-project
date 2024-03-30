import { classNames } from 'shared/lib/class-names'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, ...otherProps } = props

  const { theme } = useTheme()

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, theme])} {...otherProps}>
      {children}
    </Link>
  )
}
