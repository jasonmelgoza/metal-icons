import { FC } from 'react';
import { Toaster } from 'sonner';
import Home from './pages/Home';

const App: FC = () => (
  <>
    <Home />
    <Toaster position="bottom-center" />
  </>
);

export default App;
