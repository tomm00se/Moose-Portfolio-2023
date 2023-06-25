import React from "react";
import Styles from "./styling/Navbar.module.css";

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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
