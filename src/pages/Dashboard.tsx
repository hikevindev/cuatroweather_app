import { useSelector } from 'react-redux';
import { MinimalCard } from '../components/MinimalCard/MinimalCard';
import { SideBar } from '../components/SideBar/SideBar';
import { WeatherPanel } from '../components/WeatherPanel/WeatherPanel';
import { WeatherRepo } from '../repositories/weatherRepository';
import { WeatherService } from '../services/weatherService';
import { RootState } from '../redux/store';
import { NavBar } from '../components/NavBar/NavBar';

const Dashboard = () => {
  const { list, city, loading, error } = useSelector(
    (state: RootState) => state.forecast
  );

  return (
    <>
      <NavBar />
      <main className="dashboard">
        <SideBar />
        <section className="dashboard__content">
          <WeatherPanel />
          <div className="minimalcard">
            {list?.map((forecast: any) => <MinimalCard data={forecast} />)}
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
