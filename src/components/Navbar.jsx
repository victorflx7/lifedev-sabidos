import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "../hooks/useAuthentication";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const {auth, logout} = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    logout();
  };

  if (user === undefined) {
    return <nav className={styles.navbar}><p>Carregando...</p></nav>; // Or some loading indicator
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.links_list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.brand} ${isActive ? styles.active : ""}`
          }
        >
          <li><span>Life</span>Dev</li>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          <li>Login</li>
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          <li>Register</li>
        </NavLink>

        {user && (
          <>
            <li>
                {/* Display welcome message */}
                <span className={styles.welcome_message}>
                    Olá, {user.displayName || 'Usuário'}! {/* Access displayName from local user state */}
                </span>
            </li>
            {/* Add other logged-in links here if needed */}
             <li>
                <NavLink
                    to="/posts/create"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
                >
                    Novo Post
                </NavLink>
            </li>
            <li>
              {/* Logout Button */}
              <button onClick={handleLogout} className={`${styles.link} ${styles.exit}`}>
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
