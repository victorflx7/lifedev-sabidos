import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'


function Navbar () {
  return (

    <nav className={styles.navbar}>
      <div className={styles.logo}><strong>LIFE</strong>DEV</div>
      <div className={styles.navLinks}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        
          <button className={styles.logout}>Exit</button>
        </div>
      </nav>
  );
}

export default Navbar