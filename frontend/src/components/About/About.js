import React from "react";

import css from "./About.module.scss";

const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.about}>
          About Unity Faith Missionary Baptist Church
        </div>
        <section className={css.mission}>Mission Statement</section>
      </div>
    </div>
  );
};

export default About;
