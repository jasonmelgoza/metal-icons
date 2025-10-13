import { FC } from 'react'
import Home from './pages/Home'
import { ToastProvider } from './components'

const App: FC = () => (
  <>
    <Home />
    <ToastProvider />
  </>
)

export default App
