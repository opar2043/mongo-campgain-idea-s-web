import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Pages/Home.jsx';
import Allcampgain from './Components/Pages/Allcampgain.jsx';
import Mycampgain from './Components/Pages/Mycampgain.jsx';
import Donation from './Components/Pages/Donation.jsx';
import Login from './Components/Provider/Login.jsx';
import Register from './Components/Provider/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
         path: '/',
         element: <Home></Home>,
      },
      {
         path: '/allcampgain',
         element: <Allcampgain></Allcampgain>
      },
      {
         path: '/mycampgain',
         element: <Mycampgain></Mycampgain>
      },
      {
         path: '/donation',
         element: <Donation></Donation>
      },
      {
         path: '/login',
         element: <Login></Login>
      },
      {
         path: '/register',
         element: <Register></Register>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
