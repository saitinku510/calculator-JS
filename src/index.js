import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import reportWebVitals from './reportWebVitals';
import Context from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <AppRoutes/>
  </Context>
);

reportWebVitals();
