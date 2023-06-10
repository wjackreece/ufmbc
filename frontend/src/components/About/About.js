import React from "react";

import css from "./About.module.scss";

const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.service}>
          {/* <div className={css.serviceImg}></div> */}
          <div className={css.serviceInfo}>
            <div className={css.serviceTitle}>Join Us for Worship Service </div>
            <div className={css.serviceTimes}>Every Sunday at 10:30 a.m.</div>
          </div>
        </div>
        <div className={css.churchStatements}>
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
        </div>
        <div className={css.resources}>
          Looking to grow your knowledge and love for God?
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.bible.com/bible/59/GEN.1.ESV"
          >
            <button>Online Bible</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
