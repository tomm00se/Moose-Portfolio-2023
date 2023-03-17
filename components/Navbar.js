import React from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={Styles.navbarContainer} id="navbar">
        <a href="/">
          <img
            className={Styles.logo}
            src="/Tommy-Bowden.svg"
            alt="moose logo"
          />
        </a>
        <ul className={Styles.list}>
          <li>About</li>
          <li>Blog</li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
