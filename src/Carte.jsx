import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/Carte.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Carte() {
  const mapRef = useRef(null);

  const customIcon = new Icon({
    iconUrl: 'src/images/marker-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -40],
  });

  const defaultPosition = [28, 2];
  const defaultZoom = 5;

  const [regions, setRegions] = useState([]);
  const [mapPosition, setMapPosition] = useState(defaultPosition);
  const [mapZoom, setMapZoom] = useState(defaultZoom);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [piData, setPiData] = useState([]);

  useEffect(() => {
    fetchRegions();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const { xcoor, ycoor, zoom } = selectedRegion;
      mapRef.current.flyTo([xcoor, ycoor], zoom);
      fetchPiData(selectedRegion.idRegion);
    }
  }, [selectedRegion]);

  const fetchRegions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/Region/');
      setRegions(response.data);
    } catch (error) {
      console.error('Error fetching regions:', error);
    }
  };

  const fetchPiData = async (regionId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/PI/`);
      const filteredPiData = response.data.filter((pi) => pi.regionId === regionId);
      setPiData(filteredPiData);
    } catch (error) {
      console.error('Error fetching PI data:', error);
    }
  };
  
  const handleRegionChange = (event) => {
    const regionId = parseInt(event.target.value, 10);
    const region = regions.find((region) => region.idRegion === regionId);
    setSelectedRegion(region);
  };

  return (
    <>
      <div className="carteRoot">
      <div className="regionDropdownContainer">
          <select value={selectedRegion?.idRegion} onChange={handleRegionChange}>
            <option value="">Choisir une région</option>
            {regions.map((region) => (
              <option key={region.idRegion} value={region.idRegion}>
                {region.designation}
              </option>
            ))}
          </select>
        </div>
        <div className='map-css' id="map">
          <MapContainer ref={mapRef} center={mapPosition} zoom={mapZoom} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a> | Innova'
              subdomains="abcd"
              maxZoom={20}
            />
            {piData.map((pi) => (
              <Marker key={pi.idPoint} position={[pi.latitude, pi.longitude]} icon={customIcon}>
                <Popup>
                  <div>
                    <h4>
                      <Link to={`/Lieu/${pi.idPoint}`}>{pi.Nom}</Link>
                    </h4>
                    <p>
                      <FontAwesomeIcon icon={faStar} style={{ color: "#000000" }} /> {pi.rate}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        
      </div>
    </>
  );
}

export default Carte;
