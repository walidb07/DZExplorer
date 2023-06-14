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

import {
  BrowserRouter as Router,
  createBrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider
} from 'react-router-dom';
import Dashboard from './common/Dashboard'



const router=createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/test",
    element: <PIAdder/>,
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
  }
  ]);

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
