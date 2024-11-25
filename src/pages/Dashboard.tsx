import React from 'react';
import { useSelector } from 'react-redux';
import { MinimalCard } from '../components/MinimalCard/MinimalCard';
import { SideBar } from '../components/SideBar/SideBar';
import { WeatherPanel } from '../components/WeatherPanel/WeatherPanel';
import { RootState } from '../redux/store';
import { NavBar } from '../components/NavBar/NavBar';

import '../styles/containers/Dashboard.scss';

const Dashboard = () => {
  const { list } = useSelector((state: RootState) => state.forecast);

  return (
    <>
      <NavBar />
      <main className="dashboard">
        <SideBar />
        <section className="dashboard__content">
          <WeatherPanel />
          <div className="minimalcard">
            {list?.map((forecast: object, key: number) => (
              <MinimalCard key={key} data={forecast} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
