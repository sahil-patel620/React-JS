import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul className={styles.listItems}>
        <li>
          <NavLink  
            to="/"
            className={({ isActive }) => `${styles.navLinks} ${isActive ? styles.activeLink:""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => `${styles.navLinks} ${isActive ? styles.activeLink:""}`}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => `${styles.navLinks} ${isActive ? styles.activeLink:""}`}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
