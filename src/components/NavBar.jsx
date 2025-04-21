import React from 'react'
import { Link } from 'react-router-dom'

const conversionTypes = [
     { name: 'Currency', path:'/currency'}
]

const NavBar = () => {
     return (
       <nav className="navbar">
         {conversionTypes.map((type, index) => (
           <Link key={index} className="nav-link" to={type.path}>
             {type.name}
           </Link>
         ))}
       </nav>
     )
}

export default NavBar