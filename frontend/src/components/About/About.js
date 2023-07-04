import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

import css from "./About.module.scss";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <div className={css.container}>
        <div className={css.service}>
          {/* <div className={css.serviceImg}></div> */}
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            className={css.serviceInfo}
          >
            <div className={css.serviceTitle}>Join Us for Worship Service </div>
            <div className={css.serviceTimes}>Every Sunday at 10:30 a.m.</div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          className={css.churchStatements}
        >
          <div className={css.purpose}>
            <section className={css.purposeTitle}> Purpose Statement</section>
            <section className={css.purposeInfo}>
              To Glorify God by Obey the Great Commandment and Fulfilling the
              Great Commission
            </section>
          </div>
          <div className={css.mission}>
            <section className={css.missionTitle}> Mission Statement</section>
            <section className={css.missionInfo}>
              To Spread the Gospel of our Lord and Savior Jesus Christ
              throughout the World, Winning Souls for Christ and Establishing
              Disciples for the Kingdom of God.
            </section>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("up", "tween", 0.7, 0.5)}
          className={css.resources}
        >
          Looking to grow your knowledge and love for God?
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.bible.com/bible/59/GEN.1.ESV"
          >
            <button>Online Bible</button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
