import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { router } from './config/routing';
import './index.css';
import { NavBar } from './components/NavBar/NavBar';


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
