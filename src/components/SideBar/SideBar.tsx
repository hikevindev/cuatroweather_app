import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { AppDispatch } from '../../redux/store';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import { CONTACT_FORM } from '../../config/constants/navigationItems';

import './SideBar.scss';

export const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const countryList = [
    {
      name: t('weatherCityList.london'),
    },
    {
      name: t('weatherCityList.toronto'),
    },
    {
      name: t('weatherCityList.singapur'),
    },
    {
      name: t('weatherCityList.madrid'),
    },
  ];

  useEffect(() => {
    const configDispatchData = {
      location: 'Londres',
      lang: i18n.language,
    };

    dispatch(fetchWeather(configDispatchData));
    dispatch(fetchForecast(configDispatchData));
  }, []);

  const changeWeatherCity = (location: string) => {
    navigate('/dashboard');
    const configDispatchData = {
      location: location,
      lang: i18n.language,
    };
    dispatch(fetchWeather(configDispatchData));
    dispatch(fetchForecast(configDispatchData));
  };

  const goContact = () => {
    navigate(CONTACT_FORM);
  };

  return (
    <aside className="sidebar">
      <nav>
        {countryList.map(({ name }, key: number) => (
          <p
            key={key}
            className="sidebar__option"
            onClick={() => changeWeatherCity(name)}
          >
            {name}
          </p>
        ))}
        <p onClick={() => goContact()} className="sidebar__option">
          {t('contact')}
        </p>
      </nav>
    </aside>
  );
};
