import { useTranslation } from 'react-i18next';
import { SideBar } from '../components/SideBar/SideBar';
import { WeatherPanel } from '../components/WeatherPanel/WeatherPanel';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <SideBar />
      <section className="dashboard__content">
        <WeatherPanel />
        <div>dsadasdas</div>
      </section>
    </div>
  );
};

export default Dashboard;
