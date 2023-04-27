import React from "react";

import css from "./Home.module.scss";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.homeTextLine1}>Love God.</div>
        <div className={css.homeTextLine2}>Love People.</div>
        <div className={css.homeTextLine3}> Make disciples of Christ.</div>
      </div>
    </div>
  );
};

export default Home;
