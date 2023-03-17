import React from "react";
import Styles from "./MailToForm.module.css";

const MailToForm = () => {
  return (
    <div className={Styles.formContainer}>
      <form action="mailto:tom@moose17.dev" method="get" enctype="text/plain">
        <div className={Styles.nameBoxContainer}>
          <label for="name">
            Name:
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <div>
          <label for="email">
            Email:
            <input type="text" name="email" id="email" />
          </label>
        </div>
        <div>
          <label>Write a message:</label>
          <br />
          <textarea name="comments" rows="12" cols="35"></textarea>
        </div>
        <div>
          <input type="submit" name="submit" value="Send" />
          <input type="reset" name="reset" value="Clear Form" />
        </div>
      </form>
    </div>
  );
};

export default MailToForm;
