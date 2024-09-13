//router
import {NavLink} from 'react-router-dom';
//css
import styles from '../navbar/navbar.module.css'

//hook
import { useAuthentication} from '../../hooks/useAuthentication';

//para pegar valor do contexto
import { useAuthValue } from '../../context/AuthContext';

const Navbar = () => {

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to=''>
          Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to='/' className={({isActive}) =>(isActive ? styles.active : "")}>Home</NavLink>
          </li>
         {!user && (
          <>
           <li>
            <NavLink to='/register' className={({isActive}) =>(isActive ? styles.active : "")}>Registrar-se</NavLink>
          </li>
          <li>
            <NavLink to='/login' className={({isActive}) =>(isActive? styles.active : "")}>Login</NavLink>
          </li>
          </>
         )}
          <li>
          <NavLink to='/about' className={({isActive}) =>(isActive ? styles.active : "")}>Sobre</NavLink>
          </li>
          {user && (
            <>
            <li>
             <NavLink to='/posts/create' className={({isActive}) =>(isActive ? styles.active : "")}>Novo Post</NavLink>
           </li>
           <li>
             <NavLink to='/dashboard' className={({isActive}) =>(isActive? styles.active : "")}>Dashboard</NavLink>
           </li>
           {user && (
            <li>
              <button onClick={logout}>Sair</button>
            </li>
           )}
           </>
          )}
        </ul>
       
    </nav>
  
  )
}

export default Navbar