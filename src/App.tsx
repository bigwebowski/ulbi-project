import './styles/index.scss'

import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import AboutPageLazy from './pages/AboutPage/AboutPage.lazy'
import MainPageLazy from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/class-names/class-names'


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Main</Link>
      <br />
      <Link to={'/about'}>About</Link>
      <br />
      <br />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App