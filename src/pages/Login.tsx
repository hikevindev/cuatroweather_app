import { AuthForm } from '../components/AuthForm/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../config/constants/navigationItems';
import { useAuthSession } from '../hooks/useAuthSession';

export const Login = () => {
  const { user } = useSelector((state: RootState) => state.session);
  const navigate = useNavigate();
  useAuthSession();

  useEffect(() => {
    if (!user) return;
    navigate(DASHBOARD);
  }, [user]);

  return (
    <main>
      <section>
        <AuthForm />
      </section>
    </main>
  );
};

export default Login;
