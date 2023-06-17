import './styles/Admin.css';
import React, { useState } from 'react';
import Tabs from './common/Tabs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';



function Admin(){
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleAdminLogin = () => {
        const name = "null";
        const firstName = null;
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;
        const phoneNumber = null;
        const country = "null";
    
        axios.post('http://127.0.0.1:8000/Admin/',
        { 
            email : email,
            motDePasse : password
            }
        )
            .then(response => {
            if (response.data === 'unexisting admin') {
                setErrorMessage('Admin inexistant');
            } else if (response.data === 'mot de passe erroné') {
                setErrorMessage('Mot de passe incorrect');
            } else if (response.data === 'error'){
                setErrorMessage('Erreur de connexion');
            } else if (response.data === 'loging succesfully') {
                setErrorMessage('');
                navigate("/AdminDash");
            }
    
            }).catch(error => {
                
            });
        
    };

    return(
        <>
        <img className='background-admin' src='src\images\Admin\BackgroundAdmin.png'/>
        <div className='admin-login-wrap'>
            <img className='admin-logo' src='src\images\Admin\LOGO.png'/>
            <div className='admin-field'>
                <img className='account-img' src='src\images\Admin\VectorAccount.svg'/>
                <input id="adminEmail" className='admin-input' type="text" placeholder="E-mail"/>
                
            </div>
            <div className='admin-field'>
                <img className='password-img' src='src\images\Admin\VectorPassword.svg'/>
                <input id="adminPassword" className='admin-input' type="password" placeholder="Mot de passe"/>

            </div>
            {errorMessage && <p className='error-message-admin'><FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#ff0000",}} /> {errorMessage}</p>}
            <button onClick={handleAdminLogin}>Connexion</button>
            
        </div>
        </>
    )
}

export default Admin