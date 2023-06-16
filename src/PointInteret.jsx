import './styles/PointInteret.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function PointInteret() {
    return (
        <>
            <div className="PIpageRoot">
                <div className="gallery"></div>
                <div className="titre">Titre</div>
                <div className="carteName"><FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} /> Lieu</div>
                <div className="tags">Categories</div>
                <div className="description">
                    <h3>Description</h3>
                    <p>La description du point d'intéret</p>
                </div>
                <button className='thButton'><FontAwesomeIcon icon={faBus} style={{color: "#ffffff",}} /> Transport</button>
                <button className='thButton'><FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} /> Horaires</button>
                <div className="commentaires"></div>
            </div>
        </>
    )
}

export default PointInteret