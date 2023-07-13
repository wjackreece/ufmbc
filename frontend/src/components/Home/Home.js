import React, { useState } from "react";
import About from "../About/About";
import { Modal } from "@mui/material";
import modalPic from "./musicMinistryFlyer.jpg";
import css from "./Home.module.scss";

const Home = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const handleOpen = (e) => {
    e.preventDefault();
    // alert("i am working");
    setOpen(true);
  };

  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.homeText}>
            <div className={css.homeTextLine1}>Proclaiming Jesus Christ</div>
            <div className={css.homeTextLine2}>and Making Disciples</div>
          </div>
        </div>
      </div>
      <About />
      <Modal
        open={open}
        onClose={handleClose}
        handleOpen={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={css.modal_container}>
          <div className={css.box}>
            <button className={css.xButton} onClick={() => handleClose()}>
              {" "}
              X{" "}
            </button>

            <div className={css.modal_body}>
              <img className="modalPic" src={modalPic} alt="modalPic" />
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
};

export default Home;
