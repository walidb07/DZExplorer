import { useState } from 'react';
import Calendar from './Calendar';
import '../styles/common/Tabs.css';
import HeadDash from "./HeadDash.jsx"
import Recommendations from "./Recommendations.jsx"
import './Dashboard.css'
import Carte from '../Carte';
import Actualities from './Actualities';


function  Dashboard() {
    return (
        <div className='right-section'>
          <div className="head-dash">
          <HeadDash />
          </div>
            <div className="recommend">
            <Recommendations />
          </div>
      </div>
    )
}
function  DashboardCarte() {
  return (
      <div className='right-section'>
        <div className="head-dash">
        <HeadDash />
        </div>
          <div className="recommend-carte">
          <Carte />
        </div>
    </div>
  )
}
function  DashboardNews() {
  return (
      <div className='right-section'>
        <div className="head-dash">
        <HeadDash />
        </div>
          <div className="recommend-news">
          <Actualities />
        </div>
    </div>
  )
}
function Tabs() {
  const [activeTab, setActiveTab] = useState('Accueil');

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Accueil':
        return <Dashboard />;
      case 'Carte':
        return <DashboardCarte />;
      case 'Actualités':
        return <DashboardNews />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <div className="bodyTabs">
        <div className="welcome-section">
          <div className="left-section">
            <div className="logo2">
              <img src="src/images/logo-bold.svg" alt="Logo" />
            </div>
            <div className="tab-container">
              <button
                onClick={() => handleButtonClick('Accueil')}
                className={activeTab === 'Accueil' ? 'tab-active' : 'tab'}
              >
                Accueil
              </button>
              <button
                onClick={() => handleButtonClick('Carte')}
                className={activeTab === 'Carte' ? 'tab-active' : 'tab'}
              >
                Carte
              </button>
              <button
                onClick={() => handleButtonClick('Actualités')}
                className={activeTab === 'Actualités' ? 'tab-active' : 'tab'}
              >
                Actualités
              </button>
              <a href='/'>
              <button className={activeTab === 'Se déconnecter' ? 'tab-active' : 'tab'}
              >
                Se déconnecter
              </button>
              </a>
            </div>
            <Calendar />
          </div>
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default Tabs;
