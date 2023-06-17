import { useState } from 'react';
import Calendar from './Calendar';
import '../styles/common/Tabs.css';
import HeadDash from "./HeadDash.jsx"
import Recommendations from "./Recommendations.jsx"
import './Dashboard.css'
import Carte from '../Carte';
import Actualities from './Actualities';
import Event from './Event'; // Import the Event component

function Dashboard() {
  return (
    <div className='right-section'>
      <div className="head-dash">
        <HeadDash />
      </div>
      <div className="recommend">
        <Recommendations />
      </div>
    </div>
  );
}

function DashboardCarte() {
  return (
    <div className='right-section'>
      <div className="head-dash">
        <HeadDash />
      </div>
      <div className="recommend-carte">
        <Carte />
      </div>
    </div>
  );
}

function DashboardNews({ onActualityClick }) {
  return (
    <div className='right-section'>
      <div className="head-dash">
        <HeadDash />
      </div>
      <div className="recommend-news">
        <Actualities onActualityClick={onActualityClick} />
      </div>
    </div>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState('Accueil');
  const [selectedActuality, setSelectedActuality] = useState(null);

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  const handleActualityClick = (actuality) => {
    setSelectedActuality(actuality);
    setActiveTab('Event');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Accueil':
        return <Dashboard />;
      case 'Carte':
        return <DashboardCarte />;
      case 'Actualités':
        return <DashboardNews onActualityClick={handleActualityClick} />;
      case 'Event':
        return <Event actuality={selectedActuality} />;
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
              <a href="/">
                <button className={activeTab === 'Se déconnecter' ? 'tab-active' : 'tab'}>
                  Se déconnecter
                </button>
              </a>
            </div>
            <Calendar />
          </div>
          {activeTab === 'Event' ? (
            <Event actuality={selectedActuality} />
          ) : (
            renderContent()
          )}
        </div>
      </div>
    </>
  );
}

export default Tabs;
