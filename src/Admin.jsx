import './styles/Admin.css'
import React, { useState } from 'react';
import Tabs from './common/Tabs';




function Admin(){
    return(
        <>
        <img className='background-admin' src='src\images\Admin\BackgroundAdmin.png'/>
        <div className='admin-label'>Admin</div>
        <div className='admin-login-wrap'>
            <img className='admin-logo' src='src\images\Admin\LOGO.png'/>
            <div className='admin-field'>
                <img className='' src='src\images\Admin\VectorAccount.svg'/>
                <input className='admin-input' type="text" placeholder="E-mail"/>
                
            </div>
            <div className='admin-field'>
                <img className='' src='src\images\Admin\VectorPassword.png'/>
                <input className='admin-input' type="password" placeholder="Mot de passe"/>

            </div>
            <button>
                Connexion
            </button>
            <a className='link'>Mot de passe oublié?</a>
        </div>
        </>
    )
}

export default Admin