import React, { useState, useRef, useMemo, useEffect, useCallback  } from 'react';
import axios from 'axios';
import './styles/PIAdder.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';



const PIAdder = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

    const handleDayClick = (day) => {
      setSelectedDays((prevSelectedDays) => {
        if (prevSelectedDays.includes(day)) {
          return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
        } else {
          return [...prevSelectedDays, day];
        }
      });
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
  const [selectedDays, setSelectedDays] = useState([]);
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [mtsData, setMtsData] = useState([]);
  const [selectedMts, setSelectedMts] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    // Fetch all MoyenTransport objects
    fetchRegions();
    axios.get('http://127.0.0.1:8000/MoyenTransport/')
      .then(response => {
        console.log(response.data)
        setMtsData(response.data); // Store the fetched objects in the array
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const fetchRegions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/Region/');
      console.log(response.data)
      setRegions(response.data);
    } catch (error) {
      console.error('Error fetching regions:', error);
    }
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleMtClick = (mtId) => {
    setSelectedMts(prevSelectedMts => {
      if (prevSelectedMts.includes(mtId)) {
        return prevSelectedMts.filter(id => id !== mtId);
      } else {
        return [...prevSelectedMts, mtId];
      }
    });
  };
  
  

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleFormSubmit = () => {
    if (!(piName === '' | desc === '' | categorie === '' | theme === '' | selectedRegion === '' | openingTime === '' | closingTime === '' | selectedDays.length === 0 | selectedMts.length === 0)) {
      axios.post('http://127.0.0.1:8000/PI/', { 
        Nom : piName,
        description : desc,
        longitude : position.lng,
        latitude : position.lat,
        jours : selectedDays,
        heureOuverture : openingTime,
        heureFermeture : closingTime,
        rate : 0,
        categorie : categorie,
        theme : theme,
        regionId : selectedRegion,
        transports : selectedMts
      })
        .then(response => {
          // Handle success
          setErrorMessage('');
          setSuccessMessage('Point d\'intérêt ajouté avec succès');
          console.log({ piName, desc, categorie, theme, position, selectedDays, openingTime, closingTime, mtsData, selectedMts, selectedRegion });
        })
        .catch(error => {
          // Handle error
          setErrorMessage('Erreur lors de l\'ajout du point d\'intérêt');
          setSuccessMessage('');
          console.error(error);
        });
      } else {
        setErrorMessage('Veuillez remplir tous les champs');
        setSuccessMessage('');
      }
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
              autoComplete="off" 
              type="text"
              placeholder="Nom du point d'intérêt"
              value={piName}
              onChange={e => setPIName(e.target.value)}
            />
          </div>
          <div className='single-container'>
            <h3>Description</h3>
            <input
              autoComplete="off" 
              id="descField"
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
                    autoComplete="off" 
                    type="text"
                    placeholder="Catégorie"
                    value={categorie}
                    onChange={e => setCategorie(e.target.value)}
                />
            </div> 
            <div>
              <div className='theme-container'>
                <h3>Thème</h3>
                <input
                    autoComplete="off" 
                    type="text"
                    placeholder="Thème"
                    value={theme}
                    onChange={e => setTheme(e.target.value)}
                />
                </div>
            </div>
          </div>
          <div className='single-container'>
            <h3>Région</h3>
            <select value={selectedRegion} onChange={handleRegionChange}>
              <option value="">Sélectionner une région</option>
              {regions.map((region) => (
                <option key={region.idRegion} value={region.idRegion}>
                  {region.designation}
                </option>
              ))}
            </select>
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
          <button onClick={handleNextPage}>→</button>
        </div>
      )}

      {page === 2 && (
        <div className='PIcontainer'>
          <h1>Point d'intérêt</h1>
          <div className='green-line'></div>
          <img src='src/images/PIAdder/step2.png'/>
          
          <img id='transportIcon' src='src/images/PIAdder/transport.png'/>
          <h2>Transport</h2>

          <div className='mtContainer'>
            {mtsData.map(mt => (
              <div key={mt.idMoyenTransport} className={`moyenTransport ${selectedMts.includes(mt.idMoyenTransport) ? 'selected' : ''}`}
              onClick={() => handleMtClick(mt.idMoyenTransport)}>
                <div>{mt.type}</div> 
                <div className='cap'>Capacité: {mt.NombrePassagers}</div>
              </div>
            ))}
          </div>

          <div className='buttonsContainer'>
            <button onClick={handlePreviousPage}>←</button>
            <button onClick={handleNextPage}>→</button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div className='PIcontainer'>
          <h1>Point d'intérêt</h1>
          <div className='green-line'></div>
          <img src='src/images/PIAdder/step3.png'/>

          <img id='horairesIcon' src='src/images/PIAdder/horaires.png'/>
          <h2>Horaires</h2>
        
          
          <div className='joursSemaine'>
            <div
              className={`jour ${selectedDays.includes('samedi') ? 'selected' : ''}`}
              onClick={() => handleDayClick('samedi')}
            >
              Samedi
            </div>

            <div
              className={`jour ${selectedDays.includes('dimanche') ? 'selected' : ''}`}
              onClick={() => handleDayClick('dimanche')}
            >
              Dimanche
            </div>

            <div
              className={`jour ${selectedDays.includes('lundi') ? 'selected' : ''}`}
              onClick={() => handleDayClick('lundi')}
            >
              Lundi
            </div>

            <div
              className={`jour ${selectedDays.includes('mardi') ? 'selected' : ''}`}
              onClick={() => handleDayClick('mardi')}
            >
              Mardi
            </div>

            <div
              className={`jour ${selectedDays.includes('mercredi') ? 'selected' : ''}`}
              onClick={() => handleDayClick('mercredi')}
            >
              Mercredi
            </div>

            <div
              className={`jour ${selectedDays.includes('jeudi') ? 'selected' : ''}`}
              onClick={() => handleDayClick('jeudi')}
            >
              Jeudi
            </div>

            <div
              className={`jour ${selectedDays.includes('vendredi') ? 'selected' : ''}`}
              onClick={() => handleDayClick('vendredi')}
            >
              Vendredi
            </div>
          </div>

          <div className='heuresContainer'>
            <div>
              <h3>Ouverture</h3>
              <input
              autoComplete="off" 
              id="ouvertureField"
              type="time"
              value={openingTime}
              onChange={e => setOpeningTime(e.target.value)}
              />
            </div>
            <div>
              <h3>Fermeture</h3>
              <input
              autoComplete="off" 
              id="fermetureField"
              type="time"
              value={closingTime}
              onChange={e => setClosingTime(e.target.value)}
              />
            </div>
          </div>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          {successMessage && <p className='success-message'>{successMessage}</p>}
          <div className='thirdbuttonsContainer'>
          <button onClick={handlePreviousPage}>←</button>
          <button onClick={handleFormSubmit}>Ajouter point d'intérêt</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default PIAdder;
