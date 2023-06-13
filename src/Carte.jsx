import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './styles/Carte.css';

function Carte() {
  const customIcon = new Icon({
    iconUrl: "src/images/marker-icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -40],
  });

  const position = [36.75, 3.08];

  return (
    <>
      <div id="map">
        <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
          
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a>'
            subdomains="abcd"
            maxZoom={20}
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              Jardin Botanique d'El Hamma
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Carte;
