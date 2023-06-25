import React from "react";
import Styles from "./styling/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Styles.footerContainer}>
        <p className={Styles.footerTextMain}> Moose 2023© </p>
      </div>
      <div className={Styles.footerContainer}>
        <a href="https://www.linkedin.com/in/tommybowden/" target="blank_">
          <p className={Styles.footerText}> LinkedIn 🔗 </p>
        </a>
        <a href="https://twitter.com/Tommoose_" target="blank_">
          <p className={Styles.footerText}> Twitter 🔗 </p>
        </a>
        <a href="https://chillpeep.zone/@Moose" target="blank_">
          <p className={Styles.footerText}> Mastodon 🔗 </p>
        </a>
      </div>
    </>
  );
};

export default Footer;
