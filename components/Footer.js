import React from "react";
import Styles from "./styling/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Styles.footerContainer}>
        <p className={Styles.footerText}>Moose 2023©</p>
        <div className={Styles.socialsContainer}>
          <ul className={Styles.socials}>
            <a href="https://www.linkedin.com/in/tommybowden/">
              <li>LinkedIn 🔗</li>
            </a>
            <a href="https://twitter.com/Tommoose_">
              <li>Twitter 🔗</li>
            </a>
            <a href="https://chillpeep.zone/@Moose">
              <li>Mastodon 🔗</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
