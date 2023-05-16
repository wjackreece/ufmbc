import React from "react";

import css from "./Modal.module.scss";

function Modal() {
  return (
    <div className={css.modalBackground}>
      <div className={css.container}>
        <button> X </button>
        <div className={css.title}>
          <h1>Thank You for Subscribing!</h1>
        </div>
        <div className={css.body}>
          <p>
            {" "}
            Your information has been successfully recieved. You will be
            receiving a confirmation email shorty.{" "}
          </p>
        </div>
        <div className={css.footer}>
          <button> Continue </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
