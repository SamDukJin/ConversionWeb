import React from 'react'
import { Link } from 'react-router-dom'
import { tools as conversionTypes } from '../assets/DataStorage'

const NavBar = () => {
     return (
          <nav className="navbar">
          {conversionTypes
               .map((type, index) => (
               <Link key={index} className="nav-link" to={type.path}>
               {type.title}
               </Link>
          ))}
          </nav>
     )
}

export default NavBar