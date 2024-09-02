import { BrowserRouter, NavLink } from "react-router-dom"



const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contacts'>Contatcs</NavLink>
    </nav>
  )
}

export default NavBar