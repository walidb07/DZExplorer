import './styles/Login.css'
import React, { useState } from 'react';
import axios from 'axios';

function TextField() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }
}

function Login() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const name = "null";
    const firstName = null;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = null;
    const country = "null";

    axios.get('http://127.0.0.1:8000/Visiteur/',
      { 
        Nom : name,
        Premon : firstName,
        Pays : country,
        NumTel : phoneNumber,
        email : email,
        motDePasse : password
       }
    )
        .then(response => {
        if (response.data === 'Unknown user') {
            setErrorMessage('Email inexistant');
        } else if (response.data === 'Wrong password') {
            setErrorMessage('Mot de passe incorrect');
        } else {
            setErrorMessage('');
        }

        }).catch(error => {
            
        });
    
  };

  return (
    <>
      <div className='root-login'>
        <div className="left-image">
          <img src="src/images/Register-Login/Group 31.png" alt=""></img>
        </div>
        <div className='right-UI-login'>
          <img src="src/images/Register-Login/Group 32.png" alt=""></img>
          <h1>Se connecter</h1>
          <div className='green-line'></div>
          <p>Connectez-vous à votre compte pour continuer</p>
          <div className="grid-container-login">
            <div className="grid-item-login">
              <h3>Email</h3>
              <input className='login-textbox' id="email" type="text" placeholder="Entrez votre email" />
            </div>
            <div className="grid-item-login">
              <h3>Mot de passe</h3>
              <input className='login-textbox' id="password" type="password" placeholder="Entrez votre mot de passe" />
            </div>
          </div>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <button className="register-button" onClick={handleLogin}>Se connecter</button>
          <p>Vous n'avez pas de compte?</p>
          <a className="connection-link" href="/register">S'inscrire</a>
        </div>
      </div>
    </>
  );
}

export default Login;
