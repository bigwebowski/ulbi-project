import React from 'react'
import { classNames } from 'shared/lib/class-names'
import cls from './NavBar.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitch } from 'shared/ui/ThemeSwitch/ui/ThemeSwitch'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { theme } = useTheme()

  return (
    <div className={classNames(cls.navBar, { theme }, [className])}>
      <ThemeSwitch />
      <div className={cls.links}>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  )
}
