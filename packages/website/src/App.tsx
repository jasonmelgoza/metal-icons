import { FC } from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ToastProvider } from './components'

const App: FC = () => {
  const isHome = window.location.pathname === '/'

  return (
    <>
      {isHome ? <Home /> : <NotFound />}
      <ToastProvider />
    </>
  )
}

export default App
