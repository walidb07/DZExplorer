import './styles/Login.css'
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
        <div className='root-login'>
            <div className="left-image">
                <img src="src/images/Register-Login/Group 31.png" alt=""></img>
            </div>
            <div className='right-UI'>
                <img src="src/images/Register-Login/Group 32.png" alt=""></img>
                <h1>Se connecter</h1>
                <div className='green-line'></div>
                <p>Connectez-vous à votre compte pour continuer</p>
                <div className="grid-container-login">
                    <div className="grid-item-login">
                        <h3>Email</h3>
                        <input className='login-textbox' type="text" placeholder="Entrez votre email"/>
                    </div>
                    <div className="grid-item-login">
                        <h3>Mot de passe</h3>
                        <input className='login-textbox' type="text" placeholder="Entrez votre mot de passe"/>
                    </div>
                </div>
                <button className="register-button">Se connecter</button>
                <p>Vous n'avez pas de compte?</p>
                <a className="connection-link" href="/register">S'inscrire</a>
            </div>
        </div>
        </>
    )
}

export default Register