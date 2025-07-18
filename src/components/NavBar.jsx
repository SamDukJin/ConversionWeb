import React from 'react'
import { Link } from 'react-router-dom'
import { tools as conversionTypes } from '../assets/DataStorage'

const NavBar = () => {
     return (
          <>
          <div className='navbar-container'>
               <nav className='navbar'>
                    <div className='navbar-links'>
                         {conversionTypes.map((type, index) => (
                         <Link key={index} className="nav-link" to={type.path}>
                              {type.title}
                         </Link>
                         ))}
                    </div>
               </nav>
               <div className='navbar-right'>
                         <Link className="nav-link" to="/login_page">Login</Link>
               </div>
          </div>
          </>
     )
}

export default NavBar