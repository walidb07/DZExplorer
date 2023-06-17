import React from 'react';
import './Event.css';

export default function Event({ actuality }) {
  if (!actuality) {
    return <span>404! NO ACTUALITY!!</span>;
  }

  return (
    <div className="page-container">
      <div className="event-container">
        <div className="image-container-2">
          <img src="src//images//RACT_1.png" className="background-img" alt="Background" />
        </div>
        <div className="description-section">
          <div>
            <span className="location-span">{actuality.location}</span>
          </div>
          <h1>{actuality.title}</h1>
          <span className='span-time'>{actuality.time} - {actuality.date} </span>
          <p>Le présent cahier des charges définit les conditions et les modalités 
            selon lesquelles le prestataire sengage pour fournir,
             sur appel, des solutions pour répondre aux 
             deux volets décrits ci-après. La durée prévue 
             du projet est de 12 mois Le présent cahier des 
             charges définit les conditions et les modalités selon 
             lesquelles le prestataire sengage pour fou
             rnir, sur appel, des solutions pour répondre aux deux volets d
             écrits ci-après. La durée prévue du projet est de 
             12 mois</p>
          <div><button className='add-agenda'>Ajouter à L'agenda</button></div>
        </div>
        
      </div>
    </div>
  );
}
