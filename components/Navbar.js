import React from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={Styles.navbarContainer} id="navbar">
        <img className={Styles.logo} src="/Tommy-Bowden.svg" alt="moose logo" />
        <ul className={Styles.list}>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
