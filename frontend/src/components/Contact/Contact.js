import React, { useState } from "react";
import css from "./Contact.module.scss";

const Contact = () => {
  const [subject, setSubject] = useState("");

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.contact}>
          <h1 className={css.contactTitle}> Contact Us</h1>
          {/* <h2 className={css.contactDesc}> Contact Description</h2> */}
          <div className={css.form}>
            <div className={css.topLine}>
              <div className={css.name}>
                {/* <div className={css.nameTitle}>Name</div> */}
                <input type="text" name="name" placeholder="Name" id="" />
              </div>
              <div className={css.phone}>
                {/* <div className={css.phoneTitle}>Phone</div> */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  id=""
                />
              </div>
            </div>
            <div className={css.email}>
              {/* <div className={css.emailTitle}>Email</div> */}
              <input type="email" name="email" placeholder="Email" id="" />
            </div>
            <div className={css.subject}>
              {/* <div className={css.subjectTitle}>Subject</div> */}
              <select
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                id=""
                defaultValue={subject}
              >
                <option value="" disabled>
                  Please select an option
                </option>
                <option value="admin">Administration</option>
                <option value="membership">Membership</option>
                <option value="prayer">Prayer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={css.mess}>
              {/* <div className={css.messTitle}>Message</div> */}
              <input
                type="text"
                name="message"
                placeholder="Please write your message here"
                id=""
              />
            </div>
            <input type="submit" value="Submit" />
          </div>
        </div>
        <div className={css.map}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2198.405440065677!2d-81.6879793916547!3d26.19914315406286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db02b42a3b96b9%3A0xa37367714c7d3fbe!2sUnity%20Faith%20Missionary%20Baptist.%20Please%20add%20the%20time%20for%20Sunday%20worship%20Service!5e0!3m2!1sen!2sus!4v1683297949514!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
