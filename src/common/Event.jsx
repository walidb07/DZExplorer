import React from 'react';

export default function Event({ actuality }) {
  if (!actuality) {
    return <span>404! NO ACTUALITY!!</span>;
  }

  return (
    <div className='right-section'>
    <div className='background-container'><img src='src//images//RACT_1.png' className='background-img'></img></div>
      <h2>{actuality.title}</h2>
      <p>{actuality.description}</p>
      {/* Display other actuality details */}
    </div>
  );
}
