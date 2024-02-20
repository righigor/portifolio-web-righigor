import { BrowserRouter } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PageProvider } from './provider/pageProvider.tsx';

inject();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PageProvider>
      <App />
    </PageProvider>
  </BrowserRouter>,
);
