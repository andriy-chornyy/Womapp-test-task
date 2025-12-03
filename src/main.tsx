import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

const element = document.querySelector('#root') as HTMLElement;

createRoot(element).render(
  <App />
);