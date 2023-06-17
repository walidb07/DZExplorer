import React from 'react';
import './Actualities.css';

export default function Actualities() {
  const actualities = [
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      image: 'src/images/Act_1.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      image: 'src/images/Act_2.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      image: 'src/images/Act_3.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      image: 'src/images/Act_4.png',
    },
    {
      location: 'Tlemcen',
      title: 'Festival de la musique symphonique',
      description: 'Description description description',
      image: 'src/images/Act_5.png',
    }
  ];

  return (
    <div>
      <span className="relative">
          <span className='ml-10 -mt-5 font-poppins font-bold text-xl'>Actualités</span>
          <span className="absolute bottom-0 right-1/2 w-1/5 border-b border-green-500 border-xl"></span>
      </span>
      <div className="underline"></div>

      {actualities.map((actuality, index) => (
        <div className="one-actuality" key={index}>
          <div className="one-actuality-info">
            <div>
              <span className="oa-location">{actuality.location}</span>
            </div>
            <a href="#" className="oa-title">
              {actuality.title}
            </a>
            <p className="oa-desc">{actuality.description}</p>
          </div>
          <img src={actuality.image} alt={`Actuality ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
