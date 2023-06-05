import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import css from "./Contact.module.scss";
import BasicModal from "../Modal/BasicModal";

const Contact = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [open, setOpen] = useState(false);
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [subject, setSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidSubject, setInvalidSubject] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);

  function getFormattedPhoneNum(input) {
    let output = "(";
    input.replace(
      /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,
      function (match, g1, g2, g3) {
        if (g1.length) {
          output += g1;
          if (g1.length === 3) {
            output += ")";
            if (g2.length) {
              output += " " + g2;
              if (g2.length === 3) {
                output += " - ";
                if (g3.length) {
                  output += g3;
                }
              }
            }
          }
        }
      }
    );
    return output;
  }

  // console.log(getFormattedPhoneNum(""));
  // console.log(getFormattedPhoneNum("2"));
  // console.log(getFormattedPhoneNum("asdf20as3d"));
  // console.log(getFormattedPhoneNum("203"));
  // console.log(getFormattedPhoneNum("203-44"));
  // console.log(getFormattedPhoneNum("444sg52asdf22fd44gs"));
  // console.log(getFormattedPhoneNum("444sg526sdf22fd44gs"));
  // console.log(getFormattedPhoneNum("444sg526sdf2244gs"));
  // console.log(getFormattedPhoneNum(" ra098 848 73653k-atui "));

  const form = useRef();
  const handleClose = () => setOpen(false);
  const handleOpen = (e) => {
    e.preventDefault();
    // alert("i am working");
    const validationStatus = validator(
      subscriptionEmail,
      formName,
      subject,
      formMessage
    );
    if (validationStatus) {
      setOpen(true);
      sendEmail(e);
    } else {
      setOpen(false);
    }
  };
  function validator(emailValue, nameValue, subjectValue, messageValue) {
    let counter = 0;
    if (!emailValue.includes("@")) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
      counter += 1;
    }
    if (nameValue.length === 0) {
      setInvalidName(true);
    } else {
      setInvalidName(false);
      counter += 1;
    }
    if (subjectValue === "") {
      setInvalidSubject(true);
    } else {
      setInvalidSubject(false);
      counter += 1;
    }
    if (messageValue.length === 0) {
      setInvalidMessage(true);
    } else {
      setInvalidMessage(false);
      counter += 1;
    }
    if (counter === 4) {
      return true;
    } else {
      return false;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gvobr0a",
        "template_6pskcu7",
        form.current,
        "ZuKBef1fduJ8b6ftA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Email sent");
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.contactTitle}> Contact Us</h1>
      {/* <h2 className={css.contactDesc}> Contact Description</h2> */}
      <div className={css.container}>
        <div className={css.contact}>
          <form
            className={css.form}
            ref={form}
            // onSubmit={sendEmail}
          >
            <div className={css.topLine}>
              <div className={css.name}>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Name"
                  value={formName}
                  required
                  onKeyDown={(evt) =>
                    !isNaN(evt.key) &&
                    evt.key !== "Backspace" &&
                    evt.key !== "Tab" &&
                    evt.code !== "Space" &&
                    evt.preventDefault()
                  }
                />
                {invalidName && (
                  <p style={{ color: "red" }} className={css.invalid}>
                    Required
                  </p>
                )}
              </div>
              <div className={css.phone}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  id=""
                  value={phoneNum}
                  onKeyDown={(evt) => {
                    if (
                      isNaN(evt.key) &&
                      evt.key !== "Backspace" &&
                      evt.key !== "Tab"
                    ) {
                      evt.preventDefault();
                    } else {
                      if (!isNaN(evt.key)) {
                        const formattedNum = getFormattedPhoneNum(
                          phoneNum + evt.key
                        );
                        setPhoneNum(formattedNum);
                      }
                      if (evt.key === "Backspace") {
                        const prevNum = phoneNum.slice(0, -1);
                        setPhoneNum(prevNum);
                        console.log(prevNum);
                      }
                    }
                  }}
                  // onKeyDown={(evt) => console.log(evt.key)}
                />
              </div>
            </div>
            <div className={css.email}>
              <input
                type="email"
                name="email"
                onChange={(e) => setSubscriptionEmail(e.target.value)}
                placeholder="Email"
                value={subscriptionEmail}
                required
                minlength="6"
              />
              {invalidEmail && (
                <p style={{ color: "red" }} className={css.invalid}>
                  {" "}
                  Please enter a valid email.
                </p>
              )}
            </div>

            <div className={css.subject}>
              <select
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                defaultValue={subject}
                required
              >
                <option value="" disabled>
                  Please select an option
                </option>
                <option value="administrative">Administrative</option>
                <option value="membership">Membership</option>
                <option value="prayer">Prayer</option>
                <option value="other">Other</option>
              </select>
              {invalidSubject && (
                <p style={{ color: "red" }} className={css.invalid}>
                  Required
                </p>
              )}
            </div>
            <div className={css.mess}>
              <input
                type="text"
                name="message"
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Please write your message here"
                value={formMessage}
                required
              />
              {invalidMessage && (
                <p style={{ color: "red" }} className={css.invalid}>
                  Required
                </p>
              )}
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={(e) => handleOpen(e)}
            />
          </form>
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
      <BasicModal
        title={"Thank You for Contacting Us!"}
        text={
          "Your message has been successfully recieved. One of our members will be contacting you soon."
        }
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};
export default Contact;
