import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [user, setUser] = useState({name:'vitaminazz', idade:18})
  return (
    <>
    <nav className={styles.navbar}>
      <ul coassName={styles.link_list}>
         <NavLink to="/" className={styles.brand} activeClassName ={styles.active}>
         <li><span>Nomad</span>Life</li>
         </NavLink>
         <Navlink to="/login" className={styles.link} activeClassName ={styles.active}>
         <li><span>Login</span></li>
         </Navlink>
         <NavLink to="/register" className={styles.link} activeClassName ={styles.active}>
         <li><span>Register</span></li>
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