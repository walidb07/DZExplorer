import './styles/PointInteret.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PointInteret() {
    const { id } = useParams();
    // PARTIE IMAGES
    const images = [
        '../src/images/Blida_centre.jpg',
        '../src/images/da24189d9590469f424f82ccbd90a3a8_M.jpg',
        '../src/images/fort-santa-cruz.jpg',
        '../src/images/img-20171020-132538-largejpg.jpg',
        '../src/images/téléchargement.jpg',
        // Add more image URLs here
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const goToNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };


    // PARTIE COMMENTAIRES
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    const handleCommentChange = (e) => {
    setComment(e.target.value);
    };

    const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
    };

    const [commentsPoint, setCommentsPoint] = useState([]);
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/Commentaire/${id}/`)
        .then(response => {
          setCommentsPoint(response.data);
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    }, [id]);

        


    // PARTIE PI
    const [point, setPoint] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/PI/${id}/`);
            setPoint(response.data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, [id]);

      const handleSubmit = () => {
        axios.get(`http://127.0.0.1:8000/PI/${id}/`)
          .then((response) => {
            const point = response.data;
            console.log(point);
      
            let updatedRate;
            if (point.rate === 0) {
              updatedRate = rating;
            } else {
              updatedRate = (point.rate + rating) / 2;
            }
      
            point.rate = updatedRate;
      
            axios.put(`http://127.0.0.1:8000/PI/${id}/`, point)
              .then(() => {
                // Handle successful rating update if needed
              })
              .catch((error) => {
                // Handle error if needed
              });
          })
          .catch((error) => {
            // Handle error if needed
          });
      
        const commentObject = {
          Contenu: comment,
          visiteurId: 1,
          PiId: id,
        };
      
        axios.post(`http://127.0.0.1:8000/Commentaire/`, commentObject)
          .then(() => {
            // Handle successful comment posting if needed
            window.location.reload(); // Refresh the page
          })
          .catch((error) => {
            // Handle error if needed
          });
      };
      
      //POPUPS
      const [showTransportPopup, setShowTransportPopup] = useState(false);
      const [showHorairesPopup, setShowHorairesPopup] = useState(false);

      const handleTransportButtonClick = () => {
        setShowTransportPopup(true);
      };

      const handleHorairesButtonClick = () => {
        setShowHorairesPopup(true);
      };

    //TRANSPORTS
    const [transportMeans, setTransportMeans] = useState([]);
    

    useEffect(() => {
      const fetchTransportMeans = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/MoyenTransport/');
          const allTransportMeans = response.data;
  
          // Filter transportation means based on point.transports array
          const filteredTransportMeans = allTransportMeans.filter(mt =>
            point.transports.includes(mt.idMoyenTransport)
          );
  
          setTransportMeans(filteredTransportMeans);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchTransportMeans();
    }, [point.transports]);
    
  
    return (
        <>
            <div className="PIpageRoot">
                <div className="gallery">
                    <button onClick={goToPreviousImage}>&larr;</button>
                    <div className="image-container">
                        <img src={images[currentImageIndex]} alt="Gallery" />
                    </div>
                    <button onClick={goToNextImage}>&rarr;</button>
                </div>
                <div className="titreandrating">
                    <div className='titre'>{point.Nom}</div>
                    <div className='rating'>{point && point.rate !== undefined ? (
                      Number.isInteger(point.rate) ? (
                        point.rate
                      ) : (
                        point.rate.toFixed(2).replace(/\.?0+$/, '')
                      )
                    ) : ''} <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} /></div>
                </div>
                <div className="carteName"><FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} /> Lieu</div>
                <div className="tags">
                    <div className='tagBox'>Catégorie: {point.categorie}</div>
                    <div className='tagBox'>Thème: {point.theme}</div>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{point.description}</p>
                </div>
                <button className='thButton' onClick={handleTransportButtonClick}><FontAwesomeIcon icon={faBus} style={{color: "#ffffff",}}  /> Transport</button>
                <button className='thButton'onClick={handleHorairesButtonClick}><FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} /> Horaires</button>
                <div className="commentaires">
                    <div className='commentaireSectionTitre'>N commentaires</div>
                    <div className='posterCommentaire'>
                        <div className='photoProfilUtilisateur'>
                            {/* User profile picture */}
                        </div>
                        <div className='sectionCommentaire'>
                            <div className='sectionNote'>
                            <div>Note: </div>
                            <input
                                type='radio'
                                id='note1'
                                name='rating'
                                value='1'
                                checked={rating === 1}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor='note1'>1</label>
                            <input
                                type='radio'
                                id='note2'
                                name='rating'
                                value='2'
                                checked={rating === 2}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor='note2'>2</label>
                            <input
                                type='radio'
                                id='note3'
                                name='rating'
                                value='3'
                                checked={rating === 3}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor='note3'>3</label>
                            <input
                                type='radio'
                                id='note4'
                                name='rating'
                                value='4'
                                checked={rating === 4}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor='note4'>4</label>
                            <input
                                type='radio'
                                id='note5'
                                name='rating'
                                value='5'
                                checked={rating === 5}
                                onChange={handleRatingChange}
                            />
                            <label htmlFor='note5'>5</label>
                            </div>
                            <div className='sectionCommentaireTexte'>
                            <input
                                type='text'
                                placeholder='Ajouter un commentaire...'
                                value={comment}
                                onChange={handleCommentChange}
                            />
                            </div>
                            <div className='sectionBoutonPublier'>
                            <button onClick={handleSubmit}>Publier</button>
                            </div>
                        </div>
                    </div>
                    <div className="listeCommentaires">
                      {commentsPoint.map(comment => (
                        <div className="singleCommentaire" key={comment.idCommentaire}>
                          <div className="commentaireContenu">{comment.Contenu}</div>
                        </div>
                      )).reverse()}
                    </div>
                </div>
            </div>







            {/* Transport Popup */}
              {showTransportPopup && (
                <div className="popupContainer">
                  <div className="popup">
                    <div className="popupHeader">
                      <h2>Transport</h2>
                      <button className="closeButton" onClick={() => setShowTransportPopup(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                    <div className="popupContent">
                      <div className='transportsContainer'>
                        <img id='transportIcon' src='../src/images/PIAdder/transport.png'/>
                          <div className="mtContainer">
                            {transportMeans.map(mt => (
                              <div
                                key={mt.idMoyenTransport}
                                className={`moyenTransport ${transportMeans.includes(mt.idMoyenTransport) ? 'selected' : ''}`}
                              >
                                <div>{mt.type}</div>
                                <div className="cap">Capacité: {mt.NombrePassagers}</div>
                              </div>
                            ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Horaires Popup */}
                {showHorairesPopup && (
                  <div className="popupContainer">
                    <div className="popup">
                      <div className="popupHeader">
                        <h2>Horaires</h2>
                        <button className="closeButton" onClick={() => setShowHorairesPopup(false)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                      <div className="popupContent">
                        <div className='horairesContainer'>
      
                          <img src='../src/images/PIAdder/horaires.png'/>

                          <h2>Jours de la semaine</h2>

                          <div className='joursSemaine'>
                          <div className={`jourPI ${point.jours.includes('samedi') ? 'jourPI-available' : ''}`}>Samedi</div>
                          <div className={`jourPI ${point.jours.includes('dimanche') ? 'jourPI-available' : ''}`}>Dimanche</div>
                          <div className={`jourPI ${point.jours.includes('lundi') ? 'jourPI-available' : ''}`}>Lundi</div>
                          <div className={`jourPI ${point.jours.includes('mardi') ? 'jourPI-available' : ''}`}>Mardi</div>
                          <div className={`jourPI ${point.jours.includes('mercredi') ? 'jourPI-available' : ''}`}>Mercredi</div>
                          <div className={`jourPI ${point.jours.includes('jeudi') ? 'jourPI-available' : ''}`}>Jeudi</div>
                          <div className={`jourPI ${point.jours.includes('vendredi') ? 'jourPI-available' : ''}`}>Vendredi</div>
                          </div>

                          <div className='heuresContainer'>
                            <div>
                              <h3>Ouverture</h3>
                              <p>{point.heureOuverture.slice(0, 5)}</p>
                            </div>
                            <div>
                              <h3>Fermeture</h3>
                              <p>{point.heureFermeture.slice(0, 5)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

        </>
    )
}

export default PointInteret