import React from "react";
import Styles from "./styling/BlogContent.module.css";

const BlogContent = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h2 className={Styles.title}>Coming Soon!</h2>
        <div className={Styles.buttonContainer}>
          <a href="/">
            <button className={Styles.button}>Back to home!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
