import React, { useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import BasicModal from "../Modal/BasicModal";

import css from "./Footer.module.scss";

const Footer = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = (e) => {
    e.preventDefault();
    // alert("i am working");
    const validationStatus = emailValidator(subscriptionEmail);
    if (validationStatus) {
      setOpen(true);
      sendEmail(e);
      setInvalidEmail(false);
    } else {
      setOpen(false);
      setInvalidEmail(true);
    }
  };
  const emailValidator = (emailValue) => {
    if (!emailValue.includes("@") && emailValue.length < 6) {
      return false;
    } else {
      return true;
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nwvia7l",
        "template_3hhuc7e",
        form.current,
        "ZuKBef1fduJ8b6ftA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.logo}>
          <img src="./UFMBClogo2.jpeg" alt="" />
        </div>
        <div className={css.newsletter}>
          <div className={css.newsletterTitle}>Join our Newsletter</div>
          <div className={css.newsletterDesc}>
            Sign up for our newsletter and get update emails about what is
            happening at Unity Faith Missionary Baptist Church
          </div>
          <form ref={form}>
            <input
              type="email"
              name="email"
              className={css.email}
              onChange={(e) => setSubscriptionEmail(e.target.value)}
              placeholder="Email"
              value={subscriptionEmail}
            />
            <input
              type="submit"
              value="Subscribe"
              className={css.subsc}
              onClick={(e) => handleOpen(e)}
            />
          </form>
          {invalidEmail && (
            <div className={css.invalidEmail}> Please enter a valid email.</div>
          )}
        </div>
        <div className={css.contact}>
          <div className={css.contactTitle}>Contact Us</div>
          <div className={css.addrAndPhone}>
            <div className={css.address}>
              1620 39TH Street SW <br /> Naples, FL 34117
            </div>
            <div className={css.phone}>
              Phone: (239) 353-6604 <br />
              Fax: (239) 353-6605
            </div>
          </div>
          <div className={css.icons}>
            <a
              href="https://www.facebook.com/UnityFaithMissionaryBaptistChurch/"
              target="_blank"
              rel="noreferrer"
              className={css.fb}
            >
              <BsFacebook size="30px" />
            </a>
            <a
              href="/about"
              target="_blank"
              rel="noreferrer"
              className={css.insta}
            >
              <BsInstagram size="30px" />
            </a>
            <a
              href="/about"
              target="_blank"
              rel="noreferrer"
              className={css.yt}
            >
              <BsYoutube size="30px" />
            </a>
          </div>
        </div>
      </div>
      <BasicModal
        title={"Thank You for Subscribing!"}
        text={
          "Your information has been successfully recieved. You will be receiving a confirmation email shorty."
        }
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </section>
  );
};

export default Footer;
