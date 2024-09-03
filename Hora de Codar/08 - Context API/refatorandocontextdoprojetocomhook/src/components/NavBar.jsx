import React from 'react'
import {BrowserRouter, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>

    </nav>
  )
}

export default NavBar;