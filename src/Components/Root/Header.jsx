import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

    const links = <>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/allcampgain'}>All-Campgain</NavLink></li>
       <li><NavLink to={'/mycampgain'}>My Campgain</NavLink></li>
       <li><NavLink to={'/donation'}>Donation</NavLink></li>
       <li><NavLink to={'/login'}>Login</NavLink></li>
       {/* <li><NavLink to={'/register'}>Register</NavLink></li> */}
      
    </>
  return (
  
        <div className="navbar bg-violet-500 text-white w-full -mt-8">
  <div className="navbar-start">
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
        className="menu gap-2 menu-sm dropdown-content bg-slate-200 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-xl">Crowdcube</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1 gap-2">
      {links}
    </ul>
  </div>  
  <div className="navbar-end ">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
  </div>
</div>
</div>
   
  )
}

export default Header