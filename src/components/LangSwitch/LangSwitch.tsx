import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select value={i18n.language} onChange={changeLanguage}>
      <option value="en">Ingles</option>
      <option value="es">Español</option>
    </select>
  );
};
