import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.footerContainer}>
      <p className={Styles.footerText}>Moose 2023©</p>
    </div>
  );
};

export default Footer;
