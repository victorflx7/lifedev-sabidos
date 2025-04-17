import React from 'react'
import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <NavLink to="/" className={styles.brand} activeclassname={styles.active}>
            <li><span>Life</span>Dev</li>
          </NavLink>
          <NavLink to="/login" className={styles.brand} activeclassname={styles.active}>
            <li>Login</li>
          </NavLink>
          <NavLink to="/register" className={styles.brand} activeclassname={styles.active}>
            <li>Register</li>
          </NavLink>
          <li>
            <button className={styles.logout}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar