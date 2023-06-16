import './styles/PointInteret.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PointInteret() {
    const { id } = useParams();
    // PARTIE IMAGES
    const images = [
        'src/images/logo.svg',
        'src/images/logo-bold.svg',
        'src/images/PIAdder/step2.png',
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
                    <div className='rating'>{point.rate} <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} /></div>
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
                <button className='thButton'><FontAwesomeIcon icon={faBus} style={{color: "#ffffff",}} /> Transport</button>
                <button className='thButton'><FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} /> Horaires</button>
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
                    <div className='listeCommentaires'></div>
                </div>
            </div>
        </>
    )
}

export default PointInteret