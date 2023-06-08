import React, { useState, useRef } from "react";

import css from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useHeaderShadow";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          <img src="./UFMBClogo2.jpeg" alt="" />
        </div>
        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li>
            <a href="/about">About Us</a>
          </li> */}
          <li>
            <a href="/ministries">Ministries</a>
          </li>
          <li>
            <a href="/galleryTest">Gallery</a>
          </li>

          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a
              className={css.give}
              href="https://onrealm.org/UnityFaithMissi/-/form/give/now"
            >
              Give
            </a>
          </li>
        </ul>
        {/* This is ONLY for medium and small screens */}

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
