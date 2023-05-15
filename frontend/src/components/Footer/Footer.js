import React, { useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import css from "./Footer.module.scss";

const Footer = () => {
  const form = useRef();

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

    alert("Email sent");
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
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              className={css.email}
              placeholder="Email"
            />
            <input type="submit" value="Subscribe" className={css.subsc} />
          </form>
        </div>
        <div className={css.contact}>
          <div className={css.contactTitle}>Contact Us</div>
          <div className={css.address}>
            1620 39TH Street SW <br /> Naples, FL 34117
          </div>
          <div className={css.phone}>
            Phone: (239) 353-6604 <br />
            Fax: (239) 353-6605
          </div>
          <div className={css.icons}>
            <span className={css.fb}>
              <BsFacebook size="30px" />
            </span>
            <span className={css.insta}>
              <BsInstagram size="30px" />
            </span>
            <span className={css.yt}>
              <BsYoutube size="30px" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
