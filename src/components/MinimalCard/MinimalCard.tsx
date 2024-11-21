import './MinimalCard.scss';
export const MinimalCard = () => {
  return (
    <section className="minimal-card">
      <p className="minimal-card__date">13:03, Viernes, 22</p>
      <img
        className="minimal-card__media"
        src="https://openweathermap.org/img/wn/04n@2x.png"
        alt="Icono del clima"
      ></img>
      <p className="minimalcard__temp-data">0.99º/-1.84º</p>
    </section>
  );
};
