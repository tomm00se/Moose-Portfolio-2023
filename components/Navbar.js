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
          <li>
            <a className={Styles.link} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={Styles.link} href="/about">
              About
            </a>
          </li>
          <li>
            <a className={Styles.link} href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className={Styles.link} href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
