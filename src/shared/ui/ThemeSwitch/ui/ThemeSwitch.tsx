import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { classNames } from 'shared/lib/class-names'
import cls from './ThemeSwitch.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'


interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className={classNames(cls.themeSwitch, {}, [className])}>
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </button>
  )
}
