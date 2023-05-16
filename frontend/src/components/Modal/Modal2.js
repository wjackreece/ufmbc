import * as React from "react";
import { Modal } from "@mui/material";
import css from "./Modal.module.scss";

export default function BasicModal({ open, setOpen, handleOpen, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={css.container}>
          <div className={css.box}>
            <button onClick={() => handleClose()} className={css.xButton}>
              {" "}
              X{" "}
            </button>
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
              <button
                className={css.continueButton}
                onClick={() => handleClose()}
              >
                {" "}
                Continue{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
