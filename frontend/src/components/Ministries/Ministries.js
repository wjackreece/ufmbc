import React from "react";
import css from "./Ministries.module.scss";
import { ministryInfo } from "../../utils/data";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Ministries = () => {
  let navigate = useNavigate();

  const routeChange = (e) => {
    const target = e.target.value;
    console.log(target);
    const path = `/ministries/info${target}`;
    navigate(path);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <div className={css.container}>
        <div className={css.banner}>
          <div className={css.bannerTitle}>Ministries</div>
          <div className={css.bannerVerse}>
            “But he that is greatest among you shall be your servant.”
          </div>
          <div className={css.bannerAuthor}>Matthew 23:11</div>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          className={css.desc}
        >
          Find a space where you can fellowship, learn, and serve alongside
          brothers and sisters in Christ
        </motion.div>
        <div className={css.ministry}>
          {ministryInfo.map((min, i) => {
            return (
              <div className={css.info} key={i}>
                <div className={css.minImg}>
                  <img className={css.minImgStyle} alt="choir" src={min.img} />
                </div>
                <div className={css.minInfo}>
                  <div className={css.minInfoTitle}>{min.title}</div>
                  <div className={css.minInfoDesc}>{min.desc}</div>
                  <button value={min.href} onClick={(e) => routeChange(e)}>
                    More Info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Ministries;
