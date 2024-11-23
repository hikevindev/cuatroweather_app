import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import { CONTACT_FORM, DASHBOARD, LOGIN } from './constants/navigationItems';

export const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: CONTACT_FORM,
    element: <Contact />,
  },
]);
