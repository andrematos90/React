import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      
        {/*<Link to="/ ">Home</Link>
        <Link to="/about">Sobre</Link>*/}

        <NavLink to="/" className={({isActive}) =>(isActive ? "ativo" : "não-ativo")}>Home</NavLink>
        <NavLink to="about" className={({isActive}) =>(isActive ? "ativo" : "não-ativo")}>Sobre</NavLink>
        
    </nav>
  )
}

export default Navbar