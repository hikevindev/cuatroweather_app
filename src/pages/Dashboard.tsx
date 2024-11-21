import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MinimalCard } from '../components/MinimalCard/MinimalCard';
import { SideBar } from '../components/SideBar/SideBar';
import { WeatherPanel } from '../components/WeatherPanel/WeatherPanel';
import { WeatherRepo } from '../repositories/weatherRepository';
import { WeatherService } from '../services/weatherService';
import { RootState } from '../redux/store';

const weatherService = new WeatherService(new WeatherRepo());

const Dashboard = () => {
  const { t } = useTranslation();
  const { list, city, loading, error } = useSelector(
    (state: RootState) => state.forecast
  );

  return (
    <div className="dashboard">
      <SideBar />
      <section className="dashboard__content">
        <WeatherPanel />
        <div className="minimalcard">
          {list?.map((forecast: any) => <MinimalCard data={forecast} />)}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
