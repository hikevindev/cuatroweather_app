import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { router } from './config/routing';
import { store } from './redux/store';
import { NavBar } from './components/NavBar/NavBar';

import './index.scss';
import './config/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <NavBar />
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
