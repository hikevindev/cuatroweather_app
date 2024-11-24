import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';

import './SideBar.scss';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { CONTACT_FORM, LOGIN } from '../../config/constants/navigationItems';

export const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
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
      {/* <div className="sidebar__search">
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
      </div> */}
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
