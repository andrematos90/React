import {BrowserRouter, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
    </nav>
  )
}

export default NavBar;