import React, { useState, useRef, useEffect } from "react";

import css from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useHeaderShadow";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuHidden, setMenuHidden] = useState(true);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newScreenWidth = window.innerWidth;
      console.log(newScreenWidth);
      if (newScreenWidth > 768) {
        setMenuHidden(true);
      } else {
        setMenuHidden(false);
      }
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      //   viewport={{ once: false, amount: 0.25 }}
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
            <a href="/">Gallery</a>
          </li>

          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        {/* This is ONLY for medium and small screens */}
        {!menuHidden && (
          <div
            className={css.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
