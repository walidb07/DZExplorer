import './styles/AdminDash.css';
import { useState } from 'react';
import CarteAdder from './CarteAdder.jsx';
import PIAdder from './PIAdder.jsx';


function AdminDash() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const isButtonActive = (componentName) => {
    return activeComponent === componentName;
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'ajouterCarte':
        return <AjouterCarteComponent />;
      case 'ajouterPointInteret':
        return <AjouterPointInteretComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="adminDashRoot">
        <div className="adminButtons">
          <div className="logo2">
            <img src="src/images/logo-bold.svg" alt="Logo" />
          </div>
          <h2>Dashboard<br/>Administrateur</h2>
          <button  className={isButtonActive('ajouterCarte') ? 'active' : ''} onClick={() => renderComponent('ajouterCarte')}>Ajouter une carte</button>
          <button className={isButtonActive('ajouterPointInteret') ? 'active' : ''} onClick={() => renderComponent('ajouterPointInteret')}>Ajouter un point d'intérêt</button>
        </div>
        <div className="adminComponent">
          {renderActiveComponent()}
        </div>
      </div>
    </>
  );
}

// Placeholder components for demonstration purposes
function AjouterCarteComponent() {
  return <div><CarteAdder/></div>;
}

function AjouterPointInteretComponent() {
  return <div><PIAdder/></div>;
}

export default AdminDash;
