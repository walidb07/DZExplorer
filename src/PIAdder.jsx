import React, { useState, useRef, useMemo, useCallback  } from 'react';
import axios from 'axios';
import './styles/PIAdder.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';



const PIAdder = () => {
  const mapRef = useRef(null);

  const [draggable, setDraggable] = useState(true)
  const [position, setPosition] = useState([28, 2])
  const [zoom, setZoom] = useState(5)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        const zoom = mapRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
          setZoom(zoom.getZoom())
        }
      },
    }),
    [],
  )
   const getMapZoom = () => {
    console.log("object", mapRef.current.getZoom());
    return mapRef.current.getZoom()
    };

  const customIcon = new Icon({
    iconUrl: "src/images/marker-icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -40],
  });

  const [page, setPage] = useState(1);
  const [piName, setPIName] = useState('');
  const [desc, setDesc] = useState('');
  const [categorie, setCategorie] = useState('');
  const [theme, setTheme] = useState('');
  

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleFormSubmit = () => {
    // Store the collected data in constants or perform any other action
    const firstNameConstant = firstName;
    const lastNameConstant = lastName;
    const emailConstant = email;

    // Perform API request using Axios or any other library
    //axios.post('/api/endpoint', { firstName, lastName, email })
      //.then(response => {
        // Handle success
        console.log({ firstName, lastName, email });
      //})
      //.catch(error => {
        // Handle error
       // console.error(error);
      //});
  };

  return (
    <div>
      {page === 1 && (
        <div className='PIcontainer'>
          <h1>Point d'intérêt</h1>
          <div className='green-line'></div>
          <img src='src/images/PIAdder/step1.png'/>
          <div className='single-container'>
            <h3>Nom</h3>
            <input
              type="text"
              placeholder="Nom du point d'intérêt"
              value={piName}
              onChange={e => setPIName(e.target.value)}
            />
          </div>
          <div className='single-container'>
            <h3>Description</h3>
            <input
              type="text"
              placeholder="Description du point d'intérêt"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </div>
          <div className='catetheme-container'>
            <div className='categorie-container'>
                <h3>Catégorie</h3>
                <input
                    type="text"
                    placeholder="Catégorie"
                    value={categorie}
                    onChange={e => setCategorie(e.target.value)}
                />
            </div> 
            <div>
                <h3>Thème</h3>
                <input
                    type="text"
                    placeholder="Thème"
                    value={theme}
                    onChange={e => setTheme(e.target.value)}
                />
            </div>
          </div>
          <div id="map" className='piMapBody'>
          <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} ref={mapRef} eventHandlers={eventHandlers} 
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)} whenReady={() => {}}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a> | Innova'
                subdomains="abcd"
                maxZoom={20}
            />
            <Marker position={position} icon={customIcon} draggable={draggable}
      eventHandlers={eventHandlers} ref={markerRef}></Marker>
          </MapContainer>
           </div>
          <button onClick={handleNextPage}>Next</button>
        </div>
      )}

      {page === 2 && (
        <div className='PIcontainer'>
          <h1>Point d'intérêt</h1>
          <div className='green-line'></div>
          <img src='src/images/PIAdder/step2.png'/>
          
          <img id='transportIcon' src='src/images/PIAdder/transport.png'/>
          <h2>Transport</h2>

          <button onClick={handlePreviousPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      )}

      {page === 3 && (
        <div className='PIcontainer'>
          <h1>Point d'intérêt</h1>
          <div className='green-line'></div>
          <img src='src/images/PIAdder/step3.png'/>

          <img id='horairesIcon' src='src/images/PIAdder/horaires.png'/>
          <h2>Horaires</h2>
        
          <button onClick={handlePreviousPage}>Previous</button>
          <input
            type="text"
            placeholder="Email"
          
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default PIAdder;
