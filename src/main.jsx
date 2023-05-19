import React from 'react'
import ReactDOM from 'react-dom/client'
//import './styles/index.css'
import Welcome from './Welcome'
import Register from './Register'
import Login from './Login'

ReactDOM.createRoot(
  document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
