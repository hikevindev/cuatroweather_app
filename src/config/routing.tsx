import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import { DASHBOARD, LOGIN } from './constants/navigationItems';

export const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: DASHBOARD,
    element: <Dashboard />,
  },
]);
