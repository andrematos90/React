import { NavLink } from "react-router-dom";
import styles from './../Navbar/Navbar.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'


const Navbar = () => {

  const { user } = useAuthValue();
  
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <span>Mini</span><i>Blog</i>
      </NavLink>

      <ul className={styles.links_list}> 
        <li>
          <NavLink to="/" className={({isActive}) => (isActive? styles.active : "")}>Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
          <NavLink to="/Login" className={({isActive}) => (isActive? styles.active : "")}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/Register" className={({isActive}) => (isActive? styles.active : "")}>Register</NavLink>
        </li>
          </>
        )}
      
        <li>
          <NavLink to="/About" className={({isActive}) => (isActive? styles.active : "")}>Sobre</NavLink>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
