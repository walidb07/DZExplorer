import React from 'react'
import ReactDOM from 'react-dom/client'
//import './styles/index.css'
import Welcome from './Welcome'
import Register from './Register'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Tabs from './Tabs'

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
  ]);

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
