import { Toaster } from 'sonner';
import Styles from '../styles/App.module.css';

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-center"
      style={
        {
          '--front-toast-height': '55px',
          '--width': '356px',
          '--gap': '14px',
          '--offset-top': '24px',
          '--offset-right': '24px',
          '--offset-bottom': '24px',
          '--offset-left': '24px',
          '--mobile-offset-top': '16px',
          '--mobile-offset-right': '16px',
          '--mobile-offset-bottom': '16px',
          '--mobile-offset-left': '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } as React.CSSProperties
      }
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: Styles['toast-container'],
          content: Styles['toast-content'],
          title: Styles['toast-title'],
          description: Styles['toast-description'],
        },
      }}
    />
  );
}
