import * as React from "react";
import { Modal } from "@mui/material";
import css from "./Modal.module.scss";

export default function BasicModal({
  open,
  setOpen,
  handleOpen,
  handleClose,
  title,
  text,
}) {
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
              <h1>{title}</h1>
            </div>
            <div className={css.body}>
              <p>{text}</p>
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
