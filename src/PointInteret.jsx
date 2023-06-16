import './styles/PointInteret.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function PointInteret() {


    const images = [
        'src/images/logo.svg',
        'src/images/logo-bold.svg',
        'src/images/PIAdder/step2.png',
        // Add more image URLs here
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const goToNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
















    return (
        <>
            <div className="PIpageRoot">
                <div className="gallery">
                    <button onClick={goToPreviousImage}>&larr;</button>
                    <div className="image-container">
                        <img src={images[currentImageIndex]} alt="Gallery" />
                    </div>
                    <button onClick={goToNextImage}>&rarr;</button>
                </div>
                <div className="titreandrating">
                    <div className='titre'>Titre</div>
                    <div className='rating'>4.56 <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} /></div>
                </div>
                <div className="carteName"><FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} /> Lieu</div>
                <div className="tags">
                    <div className='tagBox'>Catégorie: </div>
                    <div className='tagBox'>Thème: </div>
                </div>
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