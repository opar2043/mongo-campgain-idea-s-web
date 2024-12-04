import React, { useContext } from 'react'
import { AuthContex } from './AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContex)
   
      if(user && user.email){
        return children;
      }
      return <Navigate to={'/login'}></Navigate>
}

export default PrivateRoute