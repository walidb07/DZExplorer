import './styles/Admin.css';
import React, { useState } from 'react';
import Tabs from './common/Tabs';



function Admin(){
    return(
        <>
        <img className='background-admin' src='src\images\Admin\BackgroundAdmin.png'/>
        <div className='admin-login-wrap'>
            <img className='admin-logo' src='src\images\Admin\LOGO.png'/>
            <div className='admin-field'>
                <img className='account-img' src='src\images\Admin\VectorAccount.svg'/>
                <input className='admin-input' type="text" placeholder="E-mail"/>
                
            </div>
            <div className='admin-field'>
                <img className='password-img' src='src\images\Admin\VectorPassword.svg'/>
                <input className='admin-input' type="password" placeholder="Mot de passe"/>

            </div>
            
            <button href='#'>Connexion</button>
            <a className='link' href='#'>Mot de passe oublié?</a>
        </div>
        </>
    )
}

export default Admin