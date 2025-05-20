import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {useAuthValue} from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'
const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  console.log(user)
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <NavLink to="/" className={styles.brand} activeClassName={styles.active}>
            <li><span>Life</span>Dev</li>
          </NavLink>

          {!user && ( 
            <>
         <li> <NavLink to="/login" className={({isActive}) => (isActive ? styles.action : "")} >
            Login
          </NavLink></li>
          <li><NavLink to="/register" className={({isActive}) => (isActive ? styles.action : "")} >
            Register
          </NavLink></li>
      </>)}

          {user && ( 
            <>
         <li> <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.action : "")} >
            Dashboard
          </NavLink></li>
         <li> <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.action : "")} >
            novo post
          </NavLink></li>

          <li><NavLink to="/about" className={({isActive}) => (isActive ? styles.action : "")} >
            About
          </NavLink></li>
      </>)}

          <button oncClick={logout} className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar