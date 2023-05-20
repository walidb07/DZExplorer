import React from 'react'
import ReactDOM from 'react-dom/client'
//import './styles/index.css'
import Welcome from './Welcome'
import Tabs from './Tabs'
import Register from './Register'
import Login from './Login'

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
  ]);

ReactDOM.createRoot(
  document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
