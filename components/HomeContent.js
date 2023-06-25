import React from "react";
import Footer from "./Footer";
import Styles from "./styling/HomeContent.module.css";

const HomeContent = () => {
  return (
    <>
      <div className={Styles.container} id="main__container">
        <div className={Styles.textContainer}>
          <h1 className={Styles.title}>Hey, I'm Moose!</h1>
          <p className={Styles.paragraph}>
            Otherwise known as Tom, I am a career changer who has fully
            transitioned into the software engineering sector. With a passion
            for technology and a commitment to inclusivity. My ultimate goal is
            to progress my understanding of the world through technology and
            bring my unique perspective to every I work on.
          </p>
        </div>
        <div className={Styles.imgContainer} id="img__container">
          <img
            className={Styles.img}
            src="/main_img.svg"
            alt="image of male developer"
          />
        </div>
      </div>
      <div className={Styles.buttonContainer}>
        <a href="/contact">
          <button className={Styles.contactButton}>Contact Me!</button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default HomeContent;
