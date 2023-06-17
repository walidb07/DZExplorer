import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Welcome from './Welcome'
import Register from './Register'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Tabs from './common/Tabs'
import Admin from './Admin'
import Carte from './Carte'
import CarteAdder from './CarteAdder'
import PIAdder from './PIAdder'
import PointInteret from './PointInteret.jsx'

import {
  BrowserRouter as Router,
  createBrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider
} from 'react-router-dom';



const router=createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/test",
    element: <Tabs/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/tabs",
    element: <Tabs/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/CarteAdder",
    element: <CarteAdder/>,
  },
  {
    path: "/PIAdder",
    element: <PIAdder/>,
  },
  {
    path: "/Carte",
    element: <Carte/>,
  },
  {
    path: "/Lieu/:id",
    element: <PointInteret/>,
  }
  ]);

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
