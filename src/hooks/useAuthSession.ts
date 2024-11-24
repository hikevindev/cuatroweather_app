import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../config/constants/navigationItems';
import { signOut } from '../redux/slices/sessionSlice';

export const useAuthSession = () => {
  const { user } = useSelector((state: RootState) => state.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(LOGIN);
    }
  }, [user]);

  const signOutSession = () => {
    dispatch(signOut());
  };

  return {
    authenticated: user !== null,
    signOut: signOutSession,
  };
};
