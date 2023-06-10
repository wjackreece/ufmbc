import React from "react";
import About from "../About/About";

import css from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.homeText}>
            <div className={css.homeTextLine1}>Proclaiming Jesus Christ</div>
            <div className={css.homeTextLine2}>and Making Disciples</div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
