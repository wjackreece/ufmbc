import React from "react";
import css from "./Ministries.module.scss";
import { ministryInfo } from "../../utils/data";

const Ministries = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.banner}>
          <div className={css.bannerTitle}>Ministries</div>
          <div className={css.bannerVerse}>
            “But he that is greatest among you shall be your servant.”
          </div>
          <div className={css.bannerAuthor}>Matthew 23:11</div>
        </div>
        <div className={css.desc}>
          Find a space where you can fellowship, learn, and serve alongside
          brothers and sisters in Christ
        </div>
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
                  <button
                  // onClick={}
                  >
                    More Info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ministries;
