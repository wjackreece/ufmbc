import React, { useState, useRef } from "react";

import css from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <a href="/about">About Us</a>
          </li> */}
          <li>
            <Link to="/ministries">Ministries</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <a
              className={css.give}
              rel="noreferrer"
              href="https://onrealm.org/UnityFaithMissi/-/form/give/now"
              target="_blank"
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
