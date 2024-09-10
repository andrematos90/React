//router
import {NavLink} from 'react-router-dom';

//css
import styles from '../navbar/navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to=''>
          Mini <span>Blog</span>
        </NavLink>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
          <NavLink to='about'>Sobre</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar