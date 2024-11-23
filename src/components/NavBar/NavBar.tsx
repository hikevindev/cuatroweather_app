import { useAuthSession } from '../../hooks/useAuthSession';
import { LangSwitch } from '../LangSwitch/LangSwitch';
import './NavBar.scss';

export const NavBar = () => {
  const { signOut } = useAuthSession();

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <h1>CuatroWeatherApp</h1>
      </div>
      <div className="navbar__actions">
        <LangSwitch />
        <button onClick={() => signOut()}>Cerrar Sesión</button>
      </div>
    </header>
  );
};
