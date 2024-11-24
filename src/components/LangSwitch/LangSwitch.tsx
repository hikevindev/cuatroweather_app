import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import { fetchWeather } from '../../redux/slices/weatherSlice';

export const LangSwitch = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const citySelected =
    useSelector((state: RootState) => state.weather.data?.city) || 'London';

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    const configDispatchData = {
      location: citySelected,
      lang: selectedLanguage,
    };
    i18n.changeLanguage(selectedLanguage);
    dispatch(fetchWeather(configDispatchData));
    dispatch(fetchForecast(configDispatchData));
  };

  return (
    <select value={i18n.language} onChange={changeLanguage}>
      <option value="en">{t('en')}</option>
      <option value="es">{t('es')}</option>
    </select>
  );
};
