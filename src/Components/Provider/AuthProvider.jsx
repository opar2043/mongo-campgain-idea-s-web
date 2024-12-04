import  { createContext, useState } from 'react'
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContex = createContext();
const AuthProvider = ({children}) => {

  const [loading,setLoading] = useState(true)


//  register ==========================
  function registerUser(email,pass){
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,pass)
  }

  // login =================================
  function userLogin(email,pass){
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,pass)
  }

  //  google signin ===================

  function handleGoogleLogin(){
  const googleProvider = new GoogleAuthProvider();

    setLoading(true)
    return signInWithPopup( auth,googleProvider)
  }

  const obj = {
       registerUser,
       userLogin,
       handleGoogleLogin
  }


  return (
    <AuthContex.Provider value={obj}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider