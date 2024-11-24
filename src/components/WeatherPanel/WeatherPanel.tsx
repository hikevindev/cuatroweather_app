import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '../../redux/store';

import './WeatherPanel.scss';

export const WeatherPanel = () => {
  const { data } = useSelector((state: RootState) => state.weather);
  const todayString = moment().format('DD [de] MMMM');

  return (
    <section className="weather-panel">
      <div className="weather-panel__values">
        <div className="weather-panel__value-container">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather?.icon}@2x.png`}
              alt="Icono del clima"
              className="weather-panel__media"
            />
          </div>
          <div>
            <p className="weather-panel__date">
              {data?.city}, {todayString}
            </p>
            <p className="weather-panel__description">
              {data?.weather?.description}
            </p>
            <p className="weather-panel__temp">{data?.temp}º</p>
            <p>
              {data?.tempMax}º/{data?.tempMin}º
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
