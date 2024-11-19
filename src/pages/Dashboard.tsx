import { useTranslation } from 'react-i18next';
import { SideBar } from '../components/SideBar/SideBar';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <SideBar />
      <section className="dashboard__content">
        <p>contenido</p>
      </section>
    </div>
  );
};

export default Dashboard;
