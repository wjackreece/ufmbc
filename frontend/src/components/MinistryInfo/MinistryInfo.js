import React, { useEffect, useState } from "react";

import { ministryInfo } from "../../utils/data";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AddToCalendarButton } from "add-to-calendar-button-react";

import css from "./MinistryInfo.module.scss";

const MinistryInfo = () => {
  const [ministries, setMinistries] = useState(ministryInfo);
  useEffect(() => {
    const pathname = window.location.pathname;
    const targetInUrl = pathname.split("/ministries/info")[1];
    const findMinisty = ministries.filter((min) => min.href === targetInUrl);
    if (findMinisty.length > 0) {
      window.scrollTo(0, 0);
      setMinistries(findMinisty);
    } else {
      // handle nt found
    }
  }, [setMinistries]);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {ministries.map((min, i) => {
          return (
            <div className={css.info} key={i}>
              <div className={css.title}>
                <h1>{min.title}</h1>
              </div>
              <div className={css.details}>
                <div className={css.detailsDescrp}>
                  <h1 className={css.detailsDescrpTitle}>The Details</h1>
                  <h2 className={css.detailsDescrpInfo}>{min.descDetailed}</h2>
                </div>
                <div className={css.detailsCard}>
                  <div className={css.detailsCardCal}>
                    <AiOutlineCalendar
                      className={css.detailsCardCalIcon}
                      size={30}
                    />
                    <h1 className={css.detailsCardDay}>{min.day}</h1>
                  </div>
                  <div className={css.detailsCardTime}>
                    <BiTimeFive className={css.detailsCardTimeIcon} size={30} />
                    <h2 className={css.detailsCardTimes}>{min.time}</h2>
                  </div>
                  <div className={css.button}>
                    <AddToCalendarButton
                      name={min.title}
                      options={[
                        "Apple",
                        "Google",
                        "iCal",
                        "Microsoft365",
                        "MicrosoftTeams",
                        "Outlook.com",
                        "Yahoo",
                      ]}
                      location="UFMBC"
                      startDate="today"
                      startTime={min.startTime}
                      endTime={min.endTime}
                      timeZone="America/Los_Angeles"
                      recurrence="weekly"
                      hideBackground
                      listStyle="modal"
                      buttonStyle="text"
                      trigger="click"
                      hideIconButton
                      size="8"
                    >
                      Add to Calendar
                    </AddToCalendarButton>
                    {/* <button className={css.shareBtn}>Share</button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MinistryInfo;
