import React from "react";

import css from "./About.module.scss";

const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.about}>
          About Unity Faith Missionary Baptist Church
        </div>
        <div className={css.service}>
          <div className={css.serviceImg}>Image</div>
          <div className={css.serviceInfo}>
            <div className={css.serviceTitle}>Sunday Morning Service Times</div>
            <div className={css.serviceTimes}>
              Bible Study: 9 a.m. - 10 a.m.
              <br />
              Worship Service: 10:15 a.m. - 12:30 p.m.
              <br />
              Communion: 1st Sunday
              <br />
              Youth Sunday: 2nd Sunday
            </div>
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
          <button>View our resources</button>
        </div>
      </div>
    </div>
  );
};

export default About;
