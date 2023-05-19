import './styles/Register.css'
import React, { useState } from 'react';

function TextField() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
 }
}

function Register(){
    return(
        <>
        <div className="left-image">
            <img src="src/images/Register-Login/Group 31.png" alt=""></img>
        </div>
        <div className='right-UI'>
            <img src="src/images/Register-Login/Group 32.png" alt=""></img>
            <h1>S'inscrire</h1>
            <div className='green-line'></div>
            <p>Connectez-vous à votre compte pour continuer</p>
            <div className="grid-container">
                <div className="grid-item">
                    <h3>Nom</h3>
                    <input type="text" placeholder="Entrez votre nom"/>
                </div>
                <div className="grid-item">
                    <h3>Prénom</h3>
                    <input type="text" placeholder="Entrez votre prénom"/>
                </div>
                <div className="grid-item">
                    <h3>Email</h3>
                    <input type="text" placeholder="Entrez votre email"/>
                </div>
                <div className="grid-item">
                    <h3>Numéro de téléphone</h3>
                    <input type="text" placeholder="Entrez votre numéro de téléphone"/>
                </div>
                <div className="grid-item">
                    <h3>Mot de passe</h3>
                    <input type="text" placeholder="Entrez votre mot de passe"/>
                </div>
                <div className="grid-item">
                <   h3>Confirmer le mot de passe</h3>
                    <input type="text" placeholder="Entrez votre mot de passe"/>
                </div>
            </div>
            <button className="register-button">S'inscrire</button>
            <p>Vous avez déja un compte?</p>
            <a className="connection-link" href="#">Connexion</a>
        </div>
        </>
    )
}

export default Register