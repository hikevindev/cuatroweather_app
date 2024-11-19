import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { router } from './config/routing';
import { NavBar } from './components/NavBar/NavBar';

import './index.css';
import './config/i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
