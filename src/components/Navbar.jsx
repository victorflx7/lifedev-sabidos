import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [user, setUser] = useState({name:'vitaminazz', idade:18})
  return (
    <>
    <nav className={styles.navbar}>
        <h2>Nome: {user.name}</h2>
        <h2>Idade: {user.idade}</h2>
        <button onClick={() => setUser((prevUser) => ({...prevUser, idade:prevUser.idade + 1}))}>Alterar Idade</button>
    </nav>
    </>
  )
}

export default Navbar