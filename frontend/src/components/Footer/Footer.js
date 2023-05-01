import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.contact}>
          <div className={css.logo}>
            <img src="./UFMBClogo2.jpeg" alt="" />
          </div>
          <div className={css.phone}>Phone: (239) 353-6604</div>
          <div className={css.fax}>Fax: (239) 353-6605</div>

          <div className={css.address}>
            1620 39TH Street SW <br /> Naples, FL 34117{" "}
          </div>
          <div className={css.icons}>
            <span className={css.fb}>
              <BsFacebook />
            </span>
            <span className={css.insta}>
              <BsInstagram />
            </span>
            <span className={css.yt}>
              <BsYoutube />
            </span>
            {/* <div className="flexCenter" style={{ background: exp.bg }}>
                      <exp.icon size={25} color="white" />
                    </div> */}
          </div>
        </div>
        <div className={css.map}>Map</div>
      </div>
    </section>
  );
};

export default Footer;
