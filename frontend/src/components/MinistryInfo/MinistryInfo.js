import React from "react";

import { ministryInfo } from "../../utils/data";
import { AiOutlineCalendar } from "react-icons/ai";

import { BiTimeFive } from "react-icons/bi";

import css from "./MinistryInfo.module.scss";

const MinistryInfo = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.title}>
          <h1>Bible Study</h1>
        </div>
        <div className={css.details}>
          <div className={css.detailsDescrp}>
            <h1 className={css.detailsDescrpTitle}>The Details</h1>
            <h2 className={css.detailsDescrpInfo}>
              Bible Study helps to maintain our connection with God through his
              written Word. It reminds us of his character, promises, our
              dependence on him, and our future together. It familiarizes us
              with, and helps us grasp, the whole story of Scripture, and it
              keeps our souls energized.
            </h2>
          </div>
          <div className={css.detailsCard}>
            <div className={css.detailsCardCal}>
              <AiOutlineCalendar className={css.detailsCardCalIcon} size={30} />
              <h1 className={css.detailsCardDay}>Wednesdays</h1>
            </div>
            <div className={css.detailsCardTime}>
              <BiTimeFive className={css.detailsCardTimeIcon} size={30} />
              <h2 className={css.detailsCardTimes}>6:00 - 8:00 PM</h2>
            </div>
            <div className={css.button}>
              <button className={css.calendarBtn}>Calendar</button>
              <button className={css.shareBtn}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryInfo;
