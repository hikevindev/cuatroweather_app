import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitch = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select value={i18n.language} onChange={changeLanguage}>
      <option value="en">{t('en')}</option>
      <option value="es">{t('es')}</option>
    </select>
  );
};
