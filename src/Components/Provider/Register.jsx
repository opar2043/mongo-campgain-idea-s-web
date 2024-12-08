
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContex } from "./AuthProvider";
import Swal from "sweetalert2";
import { IoIosCreate } from "react-icons/io";

const Register = () => {

  const {registerUser,handleGoogleLogin,setUser,updateUserData} = useContext(AuthContex)
    const navigate = useNavigate();
    const [state,setState] = useState(false)
    const [err,setErr] = useState(null)

    function handleBtn() {
      setState(!state);
    }   

    function handleRegister(e){
        e.preventDefault(); 

        const email = e.target.email.value;
        const name = e.target.name.value;
        const pass = e.target.pass.value;
        const img = e.target.img.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!regex.test(pass)) {
            setErr("Password must be an UpperCase , LowerCase and 6 character");
            return
        } 

        setErr('')

        const userObj = {
          email,name,pass,img
        }

        console.log(userObj);

        registerUser(email,pass)
        .then((userData) => {
           const user = userData.user;
           setUser(user);
           navigate('/');
           Swal.fire({
            title: "You Registerd Succesfully!",
            text: "You clicked the button!",
            icon: "success"
          });
           updateUserData({
            displayName:name,
            photoURL:img
           })
           .then(() => navigate('/'))
           .catch(err=> console.log(err.code))
           console.log(user);
        })
        .catch((error) => {
         console.log(error.message);
         setErr(error.message)
        });

        e.target.reset()
  }

    // console.log(user);



  return (
    <div className="card bg-base-100 md:w-1/2 my-10 mx-auto shrink-0 shadow-2xl border">
    <form className="card-body" onSubmit={handleRegister}>
     <h2></h2>
    <h2 className="text-xl pt-4 font-bold text-center">Register Your Account</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="name" name="name" placeholder="Name" className="input input-bordered"  />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered"  />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input type="photo" name="img" placeholder="photo URL" className="input input-bordered" />
      </div>
      <div className="form-control relative">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type={state ? 'text' : 'password'} name="pass" placeholder="password" className="input input-bordered" />
        
        <button 
  type="button" 
  onClick={handleBtn} 
  className="absolute top-14 right-4"
  aria-label="Toggle password visibility"
  title="Toggle password visibility">
  {/* {state ? <FaEyeSlash /> : <FaEye />} */}
</button>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-accent mb-2" ><IoIosCreate></IoIosCreate> Register Now</button>


      </div>
      <div>
        <p className="text-center text-red-600 text-sm font-bold">{err}</p>
      </div>
      <p className="text-center text-sm">Al Ready Have an Account? <span className="text-green-600 text-lg font-bold"><NavLink to={'/login'} >Login</NavLink></span></p>
    </form>
  </div>
  )
}

export default Register