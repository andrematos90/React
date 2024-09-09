import {BrowserRouter, NavLink, Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
    </nav>
  )
}

export default NavBar