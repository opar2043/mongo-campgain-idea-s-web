import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContex } from '../Provider/AuthProvider'
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'

const Header = () => {

  const {user , handleSignOut , setUser} = useContext(AuthContex)


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
       <li><NavLink to={'/allcampgain'}>All-Campgain</NavLink></li>
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
  return (
  
  <div className="navbar  bg-gradient-to-r from-cyan-500 to-blue-500 absolute sticky top-0 z-10 text-white px-12">
    
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
  <input type="checkbox" value="synthwave" className="toggle theme-controller" id='switch'/>

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