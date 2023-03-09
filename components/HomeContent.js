import React from "react";
import Styles from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <>
      <div className={Styles.container} id="main__container">
        <div className={Styles.textContainer}>
          <h1 className={Styles.title}>Hey, I'm Moose!</h1>
          <p className={Styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
    </>
  );
};

export default HomeContent;
