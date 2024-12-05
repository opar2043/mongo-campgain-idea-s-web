import  { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContex = createContext();
const AuthProvider = ({children}) => {

  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null)


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

  // signout =======================

  function handleSignOut(){
    setLoading(true)
    return signOut(auth)
  }

  // observer ===================

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    if(currentUser){
      setUser(currentUser,'current user');
      console.log(currentUser,'current user');
    }        
             setLoading(false)
    })
    return ()=> {
      unsubscribe()
    }
  },[])


  // update user ================

  function updateUserData(updateData){
      return updateProfile(auth.currentUser, updateData)
  }




  const obj = {
       registerUser,
       userLogin,
       handleGoogleLogin,
       handleSignOut,
       user,
       setUser,
       updateUserData
  }


  return (
    <AuthContex.Provider value={obj}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider