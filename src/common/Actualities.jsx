import React from 'react';
import './Actualities.css';

export default function Actualities({ onActualityClick }) {
  const actualities = [
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Le présent cahier des charges ',
      time: 'il y a 2 heures ',
      date: 'Le 15 Juin.',
      image: 'src/images/Act_1.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      time: 'il y a 2 heures ',
      date: 'Le 15 Juin.',
      image: 'src/images/Act_2.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      time: 'il y a 2 heures ',
      date: 'Le 15 Juin.',
      image: 'src/images/Act_3.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      time: 'il y a 2 heures ',
      date: 'Le 15 Juin.',
      image: 'src/images/Act_4.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      image: 'src/images/Act_5.png',
      time: 'il y a 2 heures ',
      date: 'Le 15 Juin.',
    },
    // Add more actualities here
  ];

  const maxDisplayedItems = 5;
  const displayActualities = actualities.slice(0, maxDisplayedItems);

  const handleButtonClick = (actuality) => {
    onActualityClick(actuality);
  };

  return (
    <>
      <span className="relative">
        <span className="ml-10 -mt-5 font-poppins font-bold text-xl">Actualités</span>
        <span className="absolute bottom-0 right-1/2 w-1/5 border-b border-green-500 border-xl"></span>
      </span>
      <div className="actualities-container">
        <div className="underline"></div>
        <div className="actualities-list">
          {displayActualities.map((actuality, index) => (
            <div className="one-actuality" key={index}>
              <div className="one-actuality-info">
                <div>
                  <span className="oa-location">{actuality.location} - {actuality.time}</span>
                </div>
                <button
                  className="oa-title"
                  onClick={() => handleButtonClick(actuality)}
                >
                  {actuality.title}
                </button>
                <p className="oa-desc">{actuality.description}</p>
              </div>
              <img src={actuality.image} alt={`Actuality ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
