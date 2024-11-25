import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '../../redux/store';

import './WeatherPanel.scss';
import { useTranslation } from 'react-i18next';

export const WeatherPanel = () => {
  const { data } = useSelector((state: RootState) => state.weather);
  const todayString = moment().format('DD [de] MMMM [,] HH:mm');
  const { t } = useTranslation();

  return (
    <section className="weather-panel">
      <div className="weather-panel__values">
        <div className="weather-panel__value-container">
          <div className="weather-panel__header">
            <h2>{t('currentWeather')}</h2>
            <span>{todayString}</span>
          </div>
          <div className="weather-panel__main">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${data?.weather?.icon}@2x.png`}
                alt="Icono del clima"
                className="weather-panel__media"
              />
              <div>
                <p className="current-temp">
                  {data?.temp}º<span>C</span>
                </p>
                <span>
                  {data?.tempMax}º/{data?.tempMin}º
                </span>
                <p className="weather-panel__description">
                  {data?.weather?.description}
                </p>
              </div>
            </div>
            <div>
              <div className="weather-panel__dates">
                <p>
                  {t('city')} <span>{data?.city}</span>
                </p>
                <p>
                  {t('humidity')} <span>{data?.humidity}%</span>
                </p>
                <p>
                  {t('feelsLike')}
                  <span>{data?.tempFeels} ºc</span>
                </p>
                <p>
                  {t('windSpeed')}
                  <span>{data?.windVelocity} Km/h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
