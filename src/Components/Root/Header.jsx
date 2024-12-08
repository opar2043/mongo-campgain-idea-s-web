import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContex } from '../Provider/AuthProvider'
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'

const Header = () => {

  const {user , handleSignOut , setUser} = useContext(AuthContex)
  const [themme ,setTheme]= useState(true)

  function logOut(){
    handleSignOut().then(() => {
      console.log("log out user");
      setUser(null)
    }).catch((error) => {
      console.log(error.message);
    });
  }

    const links = <>
       <li><NavLink to={'/'}>Home</NavLink></li>
       {/* <li><NavLink to={'/allcampgain'}>All-Campgain</NavLink></li> */}
       <li><NavLink to={'/donation'}>Donation</NavLink></li>
       {
        user && <li><NavLink to={'/mycampgain'}>My Campgain</NavLink></li>
       }
       {
        user && <li><NavLink to={'/addcampgain'}>Add Campgain</NavLink></li>
       }
       {
        user && <li><NavLink to={'/alluser'}>Users</NavLink></li>
       }
        {
        user  ? '' : <li><NavLink to={'/login'}>Login</NavLink></li>
       } 
       {/* <li><NavLink to={'/login'}>Login</NavLink></li> */}
      
    </>

    function toggleTheme(){
      const htmlElement = document.documentElement;
      if(htmlElement.getAttribute('data-theme')=== 'light'){
        htmlElement.removeAttribute('data-theme');
        setTheme(false);
      }else{
        htmlElement.setAttribute('data-theme','light');
        setTheme(true)
      }
    };


  return (
  
  <div className="navbar  bg-gradient-to-r from-cyan-500 to-blue-500 absolute sticky top-0 z-10 text-white md:px-12 px-3">
    
  <div className="navbar-start w-full">
    <div className="dropdown">  

    
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost font-extrabold text-xl">Crowdcube</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal md:-ml-48 px-1 gap-2">
      {links}
    </ul>
  </div>  
  <div className="navbar-end gap-2">
  {/* <input type="checkbox" value="synthwave" className="toggle theme-controller" id='switch' onClick={toggleTheme}/> */}
  <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller " value="synthwave"  onClick={toggleTheme}/>

  {/* sun icon */}
  <svg
    className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

  {/* <input type="checkbox" id="switch" className="toggle theme-controller" /> */}

  {
      user &&  <button className='py-2 px-3 rounded-md bg-yellow-500 text-black text-xs font-semibold' onClick={logOut}><NavLink to={'/'} >Logout</NavLink></button>
    }
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
 
  <div className="w-10 rounded-full">

    
            {
              user ? <div>
              {/* Use data-tooltip-id to reference the Tooltip */}
              <img
                alt="User Avatar"
                src={user?.photoURL}
                data-tooltip-id="user-tooltip"
              />
                

              {/* Tooltip definition */}
              <ReactTooltip id="user-tooltip" place="bottom" effect="solid">
                {user?.displayName || "User"}
              </ReactTooltip>
            </div> :  <img
      alt="Default Profile"
      src="https://i.ibb.co.com/6Fxmckp/clothes2.jpg"
      className="rounded-full"
    />
            }
        </div>
  </div>
</div>

{/* <script src='app.js'>

    
</script> */}

</div>


   
  )
}



export default Header