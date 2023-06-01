import './styles/Register.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  ]

function TextField() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
 }
}



function Register(){
    return(
        <>
        <div className='root-register'>
            <div className="left-image">
                <img src="src/images/Register-Login/Group 31.png" alt=""></img>
            </div>
            <div className='right-UI'>
                <img src="src/images/Register-Login/Group 32.png" alt=""></img>
                <h1>S'inscrire</h1>
                <div className='green-line'></div>
                <p>Connectez-vous à votre compte pour continuer</p>
                <div className="grid-container-register">
                    <div className="grid-item">
                        <h3>Nom</h3>
                        <input className='register-textbox' type="text" placeholder="Entrez votre nom"/>
                    </div>
                    <div className="grid-item">
                        <h3>Prénom</h3>
                        <input className='register-textbox' type="text" placeholder="Entrez votre prénom"/>
                    </div>
                    <div className="grid-item">
                        <h3>Email</h3>
                        <input className='register-textbox' type="text" placeholder="Entrez votre email"/>
                    </div>
                    <div className="grid-item">
                        <h3>Pays</h3>
                        <Dropdown
                            placeholder='Select Country'
                            fluid
                            search
                            selection
                            className='dropdown'
                            options={countryOptions} />
                    </div>
                    <div className="grid-item">
                        <h3>Mot de passe</h3>
                        <input className='register-textbox' type="password" placeholder="Entrez votre mot de passe"/>
                    </div>
                    <div className="grid-item">
                    <   h3>Confirmer le mot de passe</h3>
                        <input className='register-textbox' type="password" placeholder="Entrez votre mot de passe"/>
                    </div>
                </div>
                <button className="register-button">S'inscrire</button>
                <p>Vous avez déja un compte?</p>
                <a className="connection-link" href="/login">Connexion</a>
            </div>
        </div>    
        </>
    )
}

export default Register