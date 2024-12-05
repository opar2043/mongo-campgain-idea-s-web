import React, { useContext } from 'react'
import { AuthContex } from './AuthProvider'
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContex)
     const location = useLocation()
    if(loading){
      return <h2>Loading............</h2>
    }
    if (!user) {
   
      return <Navigate state={location.pathname} to="/login"  />;
    }
  
    
    return children;
}

export default PrivateRoute