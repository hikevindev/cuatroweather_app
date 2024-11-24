import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthSession } from '../../hooks/useAuthSession';
import { LangSwitch } from '../LangSwitch/LangSwitch';
import './NavBar.scss';

export const NavBar = () => {
  const { authenticated, signOut } = useAuthSession();
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <h1>CuatroWeatherApp</h1>
      </div>
      <div className="navbar__actions">
        <LangSwitch />
        {authenticated && (
          <button onClick={() => signOut()}>{t('signOut')}</button>
        )}
      </div>
    </header>
  );
};
