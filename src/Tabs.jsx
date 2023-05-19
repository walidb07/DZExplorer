import Calendar from './Calendar'
import './styles/Home.css'

function Tabs() {
    return(
        <>
        <div className="welcome-section">
            <div className="left-section">
                <div className="logo">
                    <img src="logo.png" alt="Logo"></img>
                </div>
                <div className="tab-container">
                    <button className="tab-active">Accueil</button>
                    <button className="tab">Carte</button>
                    <button className="tab">Actualités</button>
                    <button className="tab">Se déconnecter</button>
                </div>
                <Calendar />
            </div>
        </div>
        </>
    )
}

export default Tabs