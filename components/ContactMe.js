import React from "react";
import Styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.textContainer}>
          <h1 className={Styles.title}>Wanna Talk?</h1>
          <p className={Styles.paragraph}>
            Feel free to send me an E-mail and I will get back to you ASAP!
          </p>
          <div className={Styles.buttonContainer}>
            <a href="mailto:tom@moose17.dev">
              <button className={Styles.button}>Contact</button>
            </a>
          </div>
        </div>
        <div className={Styles.imgContainer}>
          <img className={Styles.img} src="/contact_img.svg" alt="envelope" />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
