import './styles/Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const countries = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'albanie', label: 'Albanie' },
  { value: 'algérie', label: 'Algérie' },
  { value: 'andorre', label: 'Andorre' },
  { value: 'angola', label: 'Angola' },
  { value: 'antigua-et-barbuda', label: 'Antigua-et-Barbuda' },
  { value: 'argentine', label: 'Argentine' },
  { value: 'arménie', label: 'Arménie' },
  { value: 'australie', label: 'Australie' },
  { value: 'autriche', label: 'Autriche' },
  { value: 'azerbaïdjan', label: 'Azerbaïdjan' },
  { value: 'bahamas', label: 'Bahamas' },
  { value: 'bahreïn', label: 'Bahreïn' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'barbade', label: 'Barbade' },
  { value: 'biélorussie', label: 'Biélorussie' },
  { value: 'belgique', label: 'Belgique' },
  { value: 'belize', label: 'Belize' },
  { value: 'bénin', label: 'Bénin' },
  { value: 'bhoutan', label: 'Bhoutan' },
  { value: 'bolivie', label: 'Bolivie' },
  { value: 'bosnie-herzégovine', label: 'Bosnie-Herzégovine' },
  { value: 'botswana', label: 'Botswana' },
  { value: 'brésil', label: 'Brésil' },
  { value: 'brunei', label: 'Brunéi' },
  { value: 'bulgarie', label: 'Bulgarie' },
  { value: 'burkina', label: 'Burkina' },
  { value: 'burundi', label: 'Burundi' },
  { value: 'cambodge', label: 'Cambodge' },
  { value: 'cameroun', label: 'Cameroun' },
  { value: 'canada', label: 'Canada' },
  { value: 'cap-vert', label: 'Cap-Vert' },
  { value: 'république centrafricaine', label: 'République centrafricaine' },
  { value: 'tchad', label: 'Tchad' },
  { value: 'chili', label: 'Chili' },
  { value: 'chine', label: 'Chine' },
  { value: 'colombie', label: 'Colombie' },
  { value: 'comores', label: 'Comores' },
  { value: 'congo', label: 'Congo' },
  { value: 'république démocratique du congo', label: 'République démocratique du Congo' },
  { value: 'costa rica', label: 'Costa Rica' },
  { value: 'croatie', label: 'Croatie' },
  { value: 'cuba', label: 'Cuba' },
  { value: 'chypre', label: 'Chypre' },
  { value: 'république tchèque', label: 'République tchèque' },
  { value: 'danemark', label: 'Danemark' },
  { value: 'djibouti', label: 'Djibouti' },
  { value: 'dominique', label: 'Dominique' },
  { value: 'république dominicaine', label: 'République dominicaine' },
  { value: 'timor oriental', label: 'Timor oriental' },
  { value: 'équateur', label: 'Équateur' },
  { value: 'égypte', label: 'Égypte' },
  { value: 'el salvador', label: 'El Salvador' },
  { value: 'guinée équatoriale', label: 'Guinée équatoriale' },
  { value: 'érythrée', label: 'Érythrée' },
  { value: 'estonie', label: 'Estonie' },
  { value: 'éthiopie', label: 'Éthiopie' },
  { value: 'fidji', label: 'Fidji' },
  { value: 'finlande', label: 'Finlande' },
  { value: 'france', label: 'France' },
  { value: 'gabon', label: 'Gabon' },
  { value: 'gambie', label: 'Gambie' },
  { value: 'géorgie', label: 'Géorgie' },
  { value: 'allemagne', label: 'Allemagne' },
  { value: 'ghana', label: 'Ghana' },
  { value: 'grèce', label: 'Grèce' },
  { value: 'grenade', label: 'Grenade' },
  { value: 'guatemala', label: 'Guatemala' },
  { value: 'guinée', label: 'Guinée' },
  { value: 'guinée-bissau', label: 'Guinée-Bissau' },
  { value: 'guyana', label: 'Guyana' },
  { value: 'haïti', label: 'Haïti' },
  { value: 'honduras', label: 'Honduras' },
  { value: 'hongrie', label: 'Hongrie' },
  { value: 'islande', label: 'Islande' },
  { value: 'inde', label: 'Inde' },
  { value: 'indonésie', label: 'Indonésie' },
  { value: 'iran', label: 'Iran' },
  { value: 'irak', label: 'Irak' },
  { value: 'irlande', label: 'Irlande' },
  { value: 'italie', label: 'Italie' },
  { value: "côte d'ivoire", label: "Côte d'Ivoire" },
  { value: 'jamaïque', label: 'Jamaïque' },
  { value: 'japon', label: 'Japon' },
  { value: 'jordanie', label: 'Jordanie' },
  { value: 'kazakhstan', label: 'Kazakhstan' },
  { value: 'kenya', label: 'Kenya' },
  { value: 'kiribati', label: 'Kiribati' },
  { value: 'corée du nord', label: 'Corée du Nord' },
  { value: 'corée du sud', label: 'Corée du Sud' },
  { value: 'kosovo', label: 'Kosovo' },
  { value: 'koweït', label: 'Koweït' },
  { value: 'kirghizistan', label: 'Kirghizistan' },
  { value: 'laos', label: 'Laos' },
  { value: 'lettonie', label: 'Lettonie' },
  { value: 'liban', label: 'Liban' },
  { value: 'lesotho', label: 'Lesotho' },
  { value: 'libéria', label: 'Libéria' },
  { value: 'libye', label: 'Libye' },
  { value: 'liechtenstein', label: 'Liechtenstein' },
  { value: 'lituanie', label: 'Lituanie' },
  { value: 'luxembourg', label: 'Luxembourg' },
  { value: 'macédoine', label: 'Macédoine' },
  { value: 'madagascar', label: 'Madagascar' },
  { value: 'malawi', label: 'Malawi' },
  { value: 'malaisie', label: 'Malaisie' },
  { value: 'maldives', label: 'Maldives' },
  { value: 'mali', label: 'Mali' },
  { value: 'malte', label: 'Malte' },
  { value: 'îles marshall', label: 'Îles Marshall' },
  { value: 'mauritanie', label: 'Mauritanie' },
  { value: 'maurice', label: 'Maurice' },
  { value: 'mexique', label: 'Mexique' },
  { value: 'micronésie', label: 'Micronésie' },
  { value: 'moldavie', label: 'Moldavie' },
  { value: 'monaco', label: 'Monaco' },
  { value: 'mongolie', label: 'Mongolie' },
  { value: 'monténégro', label: 'Monténégro' },
  { value: 'maroc', label: 'Maroc' },
  { value: 'mozambique', label: 'Mozambique' },
  { value: 'myanmar', label: 'Myanmar' },
  { value: 'namibie', label: 'Namibie' },
  { value: 'nauru', label: 'Nauru' },
  { value: 'népal', label: 'Népal' },
  { value: 'pays-bas', label: 'Pays-Bas' },
  { value: 'nouvelle-zélande', label: 'Nouvelle-Zélande' },
  { value: 'nicaragua', label: 'Nicaragua' },
  { value: 'niger', label: 'Niger' },
  { value: 'nigéria', label: 'Nigéria' },
  { value: 'norvège', label: 'Norvège' },
  { value: 'oman', label: 'Oman' },
  { value: 'pakistan', label: 'Pakistan' },
  { value: 'palau', label: 'Palaos' },
  { value: 'palestine', label: 'Palestine' },
  { value: 'panama', label: 'Panama' },
  { value: 'papouasie-nouvelle-guinée', label: 'Papouasie-Nouvelle-Guinée' },
  { value: 'paraguay', label: 'Paraguay' },
  { value: 'pérou', label: 'Pérou' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'pologne', label: 'Pologne' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'roumanie', label: 'Roumanie' },
  { value: 'fédération de russie', label: 'Fédération de Russie' },
  { value: 'rwanda', label: 'Rwanda' },
  { value: 'saint-kitts-et-nevis', label: 'Saint-Kitts-et-Nevis' },
  { value: 'sainte-lucie', label: 'Sainte-Lucie' },
  { value: 'saint-vincent-et-les-grenadines', label: 'Saint-Vincent-et-les-Grenadines' },
  { value: 'samoa', label: 'Samoa' },
  { value: 'san-marino', label: 'Saint-Marin' },
  { value: 'sao tomé-et-principe', label: 'Sao Tomé-et-Principe' },
  { value: 'arabie saoudite', label: 'Arabie saoudite' },
  { value: 'sénégal', label: 'Sénégal' },
  { value: 'serbie', label: 'Serbie' },
  { value: 'seychelles', label: 'Seychelles' },
  { value: 'sierra leone', label: 'Sierra Leone' },
  { value: 'singapour', label: 'Singapour' },
  { value: 'slovaquie', label: 'Slovaquie' },
  { value: 'slovénie', label: 'Slovénie' },
  { value: 'îles salomon', label: 'Îles Salomon' },
  { value: 'somalie', label: 'Somalie' },
  { value: 'afrique du sud', label: 'Afrique du Sud' },
  { value: 'soudan du sud', label: 'Soudan du Sud' },
  { value: 'espagne', label: 'Espagne' },
  { value: 'sri lanka', label: 'Sri Lanka' },
  { value: 'soudan', label: 'Soudan' },
  { value: 'suriname', label: 'Suriname' },
  { value: 'eswatini', label: 'Eswatini' },
  { value: 'suède', label: 'Suède' },
  { value: 'suisse', label: 'Suisse' },
  { value: 'syrie', label: 'Syrie' },
  { value: 'taiwan', label: 'Taïwan' },
  { value: 'tadjikistan', label: 'Tadjikistan' },
  { value: 'tanzanie', label: 'Tanzanie' },
  { value: 'thaïlande', label: 'Thaïlande' },
  { value: 'togo', label: 'Togo' },
  { value: 'tonga', label: 'Tonga' },
  { value: 'trinité-et-tobago', label: 'Trinité-et-Tobago' },
  { value: 'tunisie', label: 'Tunisie' },
  { value: 'turquie', label: 'Turquie' },
  { value: 'turkménistan', label: 'Turkménistan' },
  { value: 'tuvalu', label: 'Tuvalu' },
  { value: 'ouganda', label: 'Ouganda' },
  { value: 'ukraine', label: 'Ukraine' },
  { value: 'émirats arabes unis', label: 'Émirats arabes unis' },
  { value: 'royaume-uni', label: 'Royaume-Uni' },
  { value: 'états-unis', label: 'États-Unis' },
  { value: 'uruguay', label: 'Uruguay' },
  { value: 'ouzbékistan', label: 'Ouzbékistan' },
  { value: 'vanuatu', label: 'Vanuatu' },
  { value: 'vatican', label: 'Vatican' },
  { value: 'vénézuela', label: 'Venezuela' },
  { value: 'vietnam', label: 'Vietnam' },
  { value: 'yémen', label: 'Yémen' },
  { value: 'zambie', label: 'Zambie' },
  { value: 'zimbabwe', label: 'Zimbabwe' },
];

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

function TextField() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
}

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };



  const validateEmail = (email) => {
    // Updated email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };
  

  const handleRegister = () => {
    const name = document.getElementById('name').value;
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const country = selectedCountry ? selectedCountry.value : '';

    if (
      name === '' ||
      firstName === '' ||
      email === '' ||
      phoneNumber === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setErrorMessage('Veuillez remplir tous les champs');
    } else if (!validateEmail(email)) {
      setErrorMessage('Adresse email invalide');
    } else if (phoneNumber.length !== 10 || !/^[0-9]+$/.test(phoneNumber)) {
      setErrorMessage('Numéro de téléphone invalide');
    } else if (password.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères');
    } else if (password !== confirmPassword) {
      setErrorMessage('Mots de passe différents');
    } else {
      // Proceed with registration or submit the form
      // You can make an axios request here to register the user
      axios.post('http://127.0.0.1:8000/Visiteur/', {
                    Nom: name,
                    Prenom: firstName,
                    Pays: country,
                    NumTel: phoneNumber,
                    email: email,
                    motDePasse: password})
         .then(response => {
          if (response.data === 'user with the same email already exists') {
            setErrorMessage('Compte existe déja');
            setSuccessMessage('');
          } else {
            setErrorMessage('');
            setSuccessMessage('Compte créé avec succès');
            
          }
          
         })
         .catch(error => {
          setErrorMessage('Une erreur s\'est produite lors de la création du compte');
          setSuccessMessage('');
         });
      setErrorMessage('');
    }
  };

  return (
    <>
      <div className='root-register'>
        <div className='left-image'>
          <img src='src/images/Register-Login/Group 31.png' alt='' />
        </div>
        <div className='right-UI'>
          <img src='src/images/Register-Login/Group 32.png' alt='' />
          <h1>S'inscrire</h1>
          <div className='green-line'></div>
          <p>Connectez-vous à votre compte pour continuer</p>
          <div className='grid-container-register'>
            <div className='grid-item'>
              <h3>Nom*</h3>
              <input id='name' className='register-textbox' type='text' placeholder='Entrez votre nom' />
            </div>
            <div className='grid-item'>
              <h3>Prénom*</h3>
              <input id='firstName' className='register-textbox' type='text' placeholder='Entrez votre prénom' />
            </div>
            <div className='grid-item'>
              <h3>Email*</h3>
              <input id='email' className='register-textbox' type='text' placeholder='Entrez votre email' />
            </div>
            <div className='grid-item'>
              <h3>Numéro de téléphone*</h3>
              <input
                id='phoneNumber'
                className='register-textbox'
                type='text'
                maxLength={10}
                placeholder='Entrez votre numéro'
                onKeyDown={(e) => {
                  if (!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode === 8)) {
                    e.preventDefault();
                  }
                }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
              />
            </div>
            </div>
            <div id="country-dropdown">
              <h3>Pays</h3>
              <Select
                className='register-select'
                options={countries}
                value={selectedCountry}
                onChange={handleCountryChange}
                placeholder='Sélectionnez votre pays'
              />
            </div>
            <div className='grid-container-register-2'> 
            <div className='grid-item'>
              <h3>Mot de passe*</h3>
              <input id='password' className='register-textbox' type='password' placeholder='Entrez votre mot de passe' />
            </div>
            <div className='grid-item'>
              <h3>Confirmer le mot de passe*</h3>
              <input
                id='confirmPassword'
                className='register-textbox'
                type='password'
                placeholder='Entrez votre mot de passe'
              />
            </div>
          </div>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          {successMessage && <p className='success-message'>{successMessage}</p>}
          <button className='register-button' onClick={handleRegister}>
            S'inscrire
          </button>
          <p>Vous avez déjà un compte?</p>
          <a className='connection-link' href='/login'>
            Connexion
          </a>
        </div>
      </div>
    </>
  );
}

export default Register;
