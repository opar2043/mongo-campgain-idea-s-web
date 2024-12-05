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
import AddCampgain from './Components/Pages/AddCampgain.jsx';
import Error from './Components/Pages/Error.jsx';
import PrivateRoute from './Components/Provider/PrivateRoute.jsx';
import Details from './Components/Pages/Details.jsx';
import Update from './Components/Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
         path: '/',
         element: <Home></Home>,
      },
      {
         path: '/allcampgain',
         element: <Allcampgain></Allcampgain>,
         loader: ()=>fetch('http://localhost:5000/campgain')
      },
      {
         path: '/addcampgain',
         element: <PrivateRoute>
            <AddCampgain></AddCampgain>
         </PrivateRoute>
      },
      {
         path: '/update/:upid',
         element:<PrivateRoute>
            <Update></Update>
         </PrivateRoute>,
         loader:({params})=>fetch(`http://localhost:5000/campgain`)
      },
      
      {
         path: '/mycampgain',
         element: <PrivateRoute>
            <Mycampgain></Mycampgain>
         </PrivateRoute>
      },
      {
         path: '/allcampgain/:id',
         element: <PrivateRoute>
            <Details></Details>,
         </PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/campgain`)
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
