import Calendar from './Calendar'
import './styles/Tabs.css'

function Tabs() {
    const handleButtonClick = (event) => {
      };

    return(
        <>
        <div className="welcome-section">
            <div className="left-section">
                <div className="logo">
                    <img src="logo.png" alt="Logo"></img>
                </div>
                <div className="tab-container">
                    <button onClick={handleButtonClick} className="tab-active" >Accueil</button>
                    <button onClick={handleButtonClick} className="tab" >Carte</button>
                    <button onClick={handleButtonClick} className="tab" >Actualités</button>
                    <button onClick={handleButtonClick} className="tab" >Se déconnecter</button>
                </div>
                <Calendar />
            </div>
        </div>
        </>
    )
}

export default Tabs