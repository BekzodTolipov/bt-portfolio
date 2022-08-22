import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';

const rootElement = document.getElementById('root');

if(rootElement === null) throw new Error('Root container is missing')

const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
