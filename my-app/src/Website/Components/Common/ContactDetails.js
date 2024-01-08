import React, { useEffect, useState } from "react";
import "bootstrap-4-react";
import "bootstrap";
import Select from "react-select";
import Data from "../../Data/data.json";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

const ContactDetails = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [contactError, setContactError] = useState();
  const [contactFormVarify, setcontactFormVarify] = useState(false);

  const handleContactInput = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const contactDataValidation = () => {
    const redgeEmail = /^[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}$/;

    const error = {
      name: contactData.name === "" ? "Please Enter Your Name " : "",
      email: !redgeEmail.test(contactData.email)
        ? "Please Enter Valid Email ID"
        : "",
      phoneNo:
        contactData.phoneNo?.length === 0 ? "Please Enter Your Number" : "",
    };

    if ((error.name === "" && error.email === "") || error.phoneNo === "")
      return setContactError(null), setcontactFormVarify(!contactFormVarify);
    return setContactError(error);
  };

  useEffect(() => {
    setContactError("");
  }, [contactData]);

  return (
    <div className="Contact" id="Contact">
      <div className="contact-details">
        <div className="contact-img">
          <img src="./ContactUs.jpg" />
        </div>
        <div className="contact-form">
          <h1>{Data.ContactUs.Title}</h1>
          <p>{Data.ContactUs["title-info"]}</p>
          <div class="form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              value={contactData.name}
              onChange={(e) => handleContactInput(e)}
            />
            {contactError?.name && (
              <p className="contact-error">*{contactError?.name}</p>
            )}
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter Email"
              value={contactData.email}
              onChange={(e) => handleContactInput(e)}
            />
            {contactError?.email && (
              <p className="contact-error">*{contactError?.email}</p>
            )}
            <input
              type="number"
              name="phoneNo"
              class="form-control"
              placeholder="Enter Mobile No"
              value={contactData.phoneNo}
              onChange={(e) => handleContactInput(e)}
            />
            {contactError?.phoneNo && (
              <p className="contact-error">*{contactError?.phoneNo}</p>
            )}
            <textarea
              class="form-control"
              placeholder="Message"
              rows="2"
              name="message"
              value={contactData.message}
              onChange={(e) => handleContactInput(e)}
            />
            <div className="form-btn">
              <button
                class={
                  contactError === null ? "btn btn-success" : "btn btn-primary"
                }
                onClick={() =>
                  contactError === null
                    ? setContactData({
                        name: "",
                        email: "",
                        phoneNo: "",
                        message: "",
                      })
                    : contactDataValidation()
                }
              >
                {contactError === null ? "Submit" : "Varify Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
