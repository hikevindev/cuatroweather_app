import React from 'react';
import moment from 'moment';
import i18n from '../../config/i18n';

import './MinimalCard.scss';
import '../../../node_modules/moment/min/locales';

export const MinimalCard = ({ data }: any) => {
  const { dt_txt = '', main = {}, weather = {} } = data;

  moment.locale(i18n.language);
  const formattedDayTime = moment(dt_txt).format('DD/MM/YYYY, h:mm');

  return (
    <section className="minimal-card">
      <p className="minimal-card__date">{formattedDayTime}</p>
      <img
        className="minimal-card__media"
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="Icono del clima"
      ></img>
      <p className="minimalcard__temp-data">
        {main.temp_min}º/{main.temp_max}º
      </p>
    </section>
  );
};
