import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/CarteAdder.css';
import React, { useState } from 'react';

function CarteAdder() {
  const [errorMessage, setErrorMessage] = useState('');
  const position = [28, 2];

  const handleAddCarte = () => {
    const carteName = document.getElementById('mapName').value;
    if (carteName === '') {
        setErrorMessage('Veuillez choisir un nom pour la carte');
    } else {
        setErrorMessage('');
        //axios.post('http://127.0.0.1:8000/Visiteur/', {})
    }
  };


  return (
    <>
    <div className='CarteAdderBody'>
      <div id="map">
        <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
          
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a>'
            subdomains="abcd"
            maxZoom={20}
          />
          
        </MapContainer>
      </div>
      <div className='CarteAdderInfos'>
        <p>Veuillez ajuster le cadre initial de la carte avant de l'ajouter.</p>
        <div className='CarteName'>
            <h3>Nom de la carte:</h3>
              <input id='mapName' className='register-textbox' type='text' placeholder='Entrez le nom de la carte' />
        </div>
        <div className='CarteAdderButtonContainer'>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <button className='CarteAdderButton' onClick={handleAddCarte}>
            Ajouter la carte
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default CarteAdder;
