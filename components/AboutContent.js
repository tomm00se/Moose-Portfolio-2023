import React from "react";
import Styles from "./styling/AboutContent.module.css";

const AboutContent = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.textContainer}>
          <h1 className={Styles.title}>About Me?</h1>
          <p className={Styles.paragraph}>
            I am honored that you would want to take the time to read and get to
            know me. I am somewhat new to the tech scene, but as a graduate
            engineer, I am trying to learn anything and everything I can about
            all things tech.
          </p>
          <p className={Styles.paragraph}>
            My segue into the engineering world was through a bootcamp called
            "Northcoders", a software development bootcamp that taught me the
            basics of web development, working on making a RESTapi in Node.Js
            and Express.Js, and then using that API to make a front-end in react
            to make my data look pretty!
          </p>
          <p className={Styles.paragraph}>
            If you want to see more of what I get up too, check my blog, my
            <a href="https://twitter.com/Tommoose_"> twitter</a> or even
            <a href="https://www.linkedin.com/in/tommybowden/"> LinkedIn!</a>
          </p>
        </div>
        <div className={Styles.imgContainer}>
          <img className={Styles.img} src="/selfie.png" alt="envelope" />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
