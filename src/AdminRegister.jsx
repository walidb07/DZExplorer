import './styles/AdminRegister.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

function AdminRegister() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdminRegister = () => {
    const nom = document.getElementById('adminNom').value;
    const prenom = document.getElementById('adminPrenom').value;
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const numTel = document.getElementById('adminNumTel').value;
    const regionId = 4;
  
    if (nom === '' || prenom === '' || email === '' || password === '' || numTel === '') {
      setErrorMessage('Veuillez remplir tous les champs.');
    } else {
      console.log(nom,prenom,email,password,numTel);
      axios
        .post('http://127.0.0.1:8000/createAdmin/', {
          Nom: nom,
          Prenom: prenom,
          email: email,
          motDePasse: password,
          NumTel: numTel,
          regionId: regionId,
        })
        .then(response => {
          if (response.data === 'creating admin succesfully') {
            setErrorMessage('');
            navigate('/AdminDash');
          } else if (response.data === 'error') {
            setErrorMessage("Une erreur s'est produite lors de l'enregistrement de l'administrateur.");
          }
        })
        .catch(error => {
          setErrorMessage("Une erreur s'est produite lors de l'enregistrement de l'administrateur.");
        });
    }
  };

  return (
    <>
      <img className='background-admin' src='src\images\Admin\BackgroundAdmin.png'/>
      <div className="admin-register-wrap">
        <img className='admin-logo' src='src\images\Admin\adminLogo.svg'/>   
        <div className="admin-field">
          <img className="account-img" src="src\images\Admin\VectorAccount.svg" alt="account icon" />
          <input id="adminNom" className="admin-input" type="text" placeholder="Nom" />
        </div>
        <div className="admin-field">
          <img className="account-img" src="src\images\Admin\VectorAccount.svg" alt="account icon" />
          <input id="adminPrenom" className="admin-input" type="text" placeholder="Prénom" />
        </div>
        <div className="admin-field">
          <img className="account-img" src="src\images\Admin\email.png" alt="account icon" />
          <input id="adminEmail" className="admin-input" type="text" placeholder="E-mail" />
        </div>
        <div className="admin-field">
          <img className="password-img" src="src\images\Admin\VectorPassword.svg" alt="password icon" />
          <input id="adminPassword" className="admin-input" type="password" placeholder="Mot de passe" />
        </div>
        <div className="admin-field">
          <img className="password-img" src="src\images\Admin\phone.png" alt="password icon" />
          <input id="adminNumTel" className="admin-input" type="text" placeholder="Numéro de téléphone" />
        </div>
        {errorMessage && (
          <p className="error-message-admin">
            <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ff0000" }} /> {errorMessage}
          </p>
        )}
        <button onClick={handleAdminRegister}>Inscription</button>
      </div>
    </>
  );
}

export default AdminRegister;
