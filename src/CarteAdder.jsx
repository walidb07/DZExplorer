import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/CarteAdder.css';
import React, { useState, useRef } from 'react';
import axios from 'axios';

function CarteAdder() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const position = [28, 2];

  const handleAddCarte = () => {
    const carteName = document.getElementById('mapName').value;
    const mapCenter = getMapCenter();
    const zoom = getMapZoom();
    if (carteName === '') {
        setErrorMessage('Veuillez choisir un nom pour la carte');
    } else {
        setErrorMessage('');
        axios.post('http://127.0.0.1:8000/Region/', {
            designation: carteName,
            xcoor: mapCenter.lat,
            ycoor: mapCenter.lng,
            zoom: zoom
        })
          .then(response => {
            setErrorMessage('');
            setSuccessMessage('Carte créée avec succès');
          })
          .catch(error => {
            setErrorMessage('Erreur lors de la création de la carte');
            setSuccessMessage('');
          });
    }
  };
  const mapRef = useRef(null) 
  const getMapZoom = () => {
    console.log("object", mapRef.current.getZoom());
    return mapRef.current.getZoom()
    };
  const getMapCenter = () => {
    console.log("object", mapRef.current.getCenter());
    return mapRef.current.getCenter()
  }

  return (
    <>
    <div className='CarteAdderBody'>
      <div id="map">
        <MapContainer center={position} zoom={5} scrollWheelZoom={true} ref={mapRef} 
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)} whenReady={() => {}}>
          
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a> | Innova'
            subdomains="abcd"
            maxZoom={20}
          />
          
        </MapContainer>
      </div>
      <div className='CarteAdderInfos'>
        <p>Veuillez ajuster le cadre initial de la carte avant de l'ajouter.</p>
        <div className='CarteName'>
            <h3>Nom de la carte:</h3>
              <input autoComplete="off"  id='mapName' className='carteadder-textbox' type='text' placeholder='Entrez le nom de la carte' />
        </div>
        <div className='CarteAdderButtonContainer'>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {successMessage && <p className='success-message'>{successMessage}</p>}
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
