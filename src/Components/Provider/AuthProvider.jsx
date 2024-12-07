import  { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile ,GoogleAuthProvider} from 'firebase/auth';
import Swal from 'sweetalert2';


export const AuthContex = createContext();
const AuthProvider = ({children}) => {

  const [donate,setDonate]= useState([])
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



  // update user ================

  function updateUserData(updateData){
    return updateProfile(auth.currentUser, updateData)
}

  

  function handleDonate(donation){
    // if(donation === donation){
    
    // }
    const isExist = donate.find(p=>p._id == donation._id);
    // console.log(isExist,'find');
    if(isExist){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Same Data cant Added",
        
      });
    }else{
      setDonate([...donate,donation])
      Swal.fire({
        title: "Good job!",
        text: "Data Added Successfully!",
        icon: "success"
      });
    }
      
   
  }
  //  console.log(donate);


    // observer ===================

    // useEffect(()=>{
    //   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    //    if(currentUser){
    //      setUser(currentUser,'current user');
    //      console.log(currentUser,'current user');
    //    setLoading(false)

    //    }        
    //    })
    //    return ()=> {
    //      unsubscribe()
    //    }
    //  },[auth])
   
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser); 
        setLoading(false); 
      });
    
      return () => {
        unsubscribe();
      };
    }, []);
    



  const obj = {
       registerUser,
       userLogin,
       handleGoogleLogin,
       handleSignOut,
       user,
       setUser,
       updateUserData,
       handleDonate,
       donate,
       setDonate,
       loading
  }


  return (
    <AuthContex.Provider value={obj}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider