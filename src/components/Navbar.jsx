import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.brand} ${styles.active}` : styles.brand
            }
          >
            <li><span>Life</span>Dev</li>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <li>Login</li>
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <li>Register</li>
          </NavLink>
          <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;