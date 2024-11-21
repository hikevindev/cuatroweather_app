import { useTranslation } from 'react-i18next';
import { MinimalCard } from '../components/MinimalCard/MinimalCard';
import { SideBar } from '../components/SideBar/SideBar';
import { WeatherPanel } from '../components/WeatherPanel/WeatherPanel';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <SideBar />
      <section className="dashboard__content">
        <WeatherPanel />
        <div className="minimalcard">
          <MinimalCard />
          <MinimalCard />
          <MinimalCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
