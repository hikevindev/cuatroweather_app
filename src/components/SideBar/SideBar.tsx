import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { AppDispatch } from '../../redux/store';
import React, { useState } from 'react';

import './SideBar.scss';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import moment from 'moment';

export const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [locationSearch, setLocationSearch] = useState('');

  useEffect(() => {
    dispatch(fetchWeather('Londres'));
    dispatch(fetchForecast('Londres'));
  }, []);

  const changeWeatherCity = (location: string) => {
    dispatch(fetchWeather(location));
    dispatch(fetchForecast(location));
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
      <div>
        <nav>
          <p
            className="sidebar__option"
            onClick={() => changeWeatherCity('Londres')}
          >
            Londres
          </p>
          <p
            className="sidebar__option"
            onClick={() => changeWeatherCity('Toronto')}
          >
            Toronto
          </p>
          <p
            className="sidebar__option"
            onClick={() => changeWeatherCity('Singapur')}
          >
            Singapur
          </p>
          <p
            className="sidebar__option"
            onClick={() => changeWeatherCity('Madrid')}
          >
            Madrid
          </p>
        </nav>
      </div>
    </aside>
  );
};
