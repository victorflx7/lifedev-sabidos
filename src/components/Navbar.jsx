import React from 'react'
import { useState } from 'react'
import { Navlink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [user, setUser] = useState({name:'vitaminazz', idade:18})
  return (
    <>
    <nav className={styles.navbar}>
      <ul coassName={styles.link_list}>
         <Navlink to="/" className={styles.brand} activeClassName ={styles.active}>
         <li><span>Nomad</span>Life</li>
         </Navlink>
         <Navlink to="/login" className={styles.link} activeClassName ={styles.active}>
         <li><span>Login</span></li>
         </Navlink>
         <Navlink to="/register" className={styles.link} activeClassName ={styles.active}>
         <li><span>Register</span></li>
         </Navlink>
          <li>
            <button className={styles.logout}>Exit</button>
          </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar