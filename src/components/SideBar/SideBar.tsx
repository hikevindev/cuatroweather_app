import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';

import './SideBar.scss';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import { useNavigate } from 'react-router-dom';
import { CONTACT_FORM, LOGIN } from '../../config/constants/navigationItems';

export const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [locationSearch, setLocationSearch] = useState('');

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
    dispatch(fetchWeather('Londres'));
    dispatch(fetchForecast('Londres'));
  }, []);

  const changeWeatherCity = (location: string) => {
    dispatch(fetchWeather(location));
    dispatch(fetchForecast(location));
  };

  const goContact = () => {
    navigate(CONTACT_FORM);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__search">
        <input
          value={locationSearch}
          onChange={(ev) => {
            setLocationSearch(ev.target.value);
          }}
          type="text"
          placeholder="Ciudad"
        />
        <button onClick={() => changeWeatherCity(locationSearch)}>
          {'->'}
        </button>
      </div>
      <nav>
        {countryList.map(({ name }) => (
          <p
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
