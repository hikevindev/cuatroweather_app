import moment from 'moment';
import i18n from '../../config/i18n';

import './MinimalCard.scss';
import '../../../node_modules/moment/min/locales';

export const MinimalCard = ({ data }: any) => {
  const { dt_txt = '', main = {}, weather = {} } = data;

  moment.locale(i18n.language);
  const formatDate = (date: Date) => moment().calendar(date);

  return (
    <section className="minimal-card">
      <p className="minimal-card__date">{formatDate(dt_txt)}</p>
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
