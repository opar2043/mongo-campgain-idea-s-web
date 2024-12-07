
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { AuthContex } from "./AuthProvider";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const {  userLogin , handleGoogleLogin ,setUser} = useContext(AuthContex);
  const location =  useLocation()
   
    const [err,setErr] = useState(null);
    const [state,setState] = useState(true)
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;

        // console.log(email,pass);
       userLogin(email,pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        Swal.fire({
          title: "Logged In Succesfully!",
          icon: "success"
        });

        navigate(location?.state ? location.state : '/');
        // console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
       
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Password",
          
        });
      });

      e.target.reset()
  }

  function googleLogin(){
    handleGoogleLogin()
    .then((result) => {
      console.log('User signed in:', result.user);
      setUser(result.user);
      navigate('/')
      Swal.fire({
        title: "Succesfully logged in with Google",
        icon: "success"
      });
    })
    .catch((error) => {
      console.error('Error during Google Sign-In:', error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Somwthing Happen Wrong!",
        
      });
    })
  }

  function handleToggle(){
    setState(!state)
  }

  // forget pass
//   function handleForgetPassword() {
      
//       const email = emailRef.current.value;

//       if(!emailRef){
//         setErr('please provide email adress!')
//       }else{
//         sendPasswordResetEmail(auth,email)
//         .then(()=>{
//           alert('Reset Email sent!')
//         })
//       }
// }

  return (
    <div className="card border bg-base-100 md:w-1/2 my-10 mx-auto shrink-0 shadow-2xl ">
      <form className="card-body" onSubmit={handleLogin}>
  
      <h2 className="text-xl pt-4 font-bold text-center">Log In Your Account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
            <span><a onClick={handleToggle} type="button" className="absolute top-14 right-4">{state? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>}</a></span>
        
          </label>
          <input type={state ? 'text' : 'password'} name="pass" placeholder="password" className="input input-bordered"  />
          <label className="label" onClick={''}>
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">Login</button>
           <button className="btn btn-outline" onClick={googleLogin}>LogIn With Google</button>
          
        </div>
        <div>
        {
          err && <p className="text-center text-red-600 text-sm font-bold">{err}</p>
        }
        

        {/* {
          msg && <p className="text-center text-green-600 text-sm font-bold"></p>
        }  */}
      </div>
        <p className="text-center text-sm">Do not Have an Account? <span className="text-red-600 text-lg font-bold"><NavLink to={'/register'} >Register</NavLink></span></p>
      </form>
    </div>
  )
}

export default Login