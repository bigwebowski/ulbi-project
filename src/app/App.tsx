import './styles/index.scss'

import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/class-names'
import { AppRouter } from 'app/providers/Router'
import { NavBar } from 'widgets/NavBar'


const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  )
}

export default App