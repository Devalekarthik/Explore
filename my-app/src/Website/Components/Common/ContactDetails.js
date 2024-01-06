import React, { useState } from "react";
import "bootstrap-4-react";
import "bootstrap";
import Select from "react-select";
import Data from "../../Data/data.json";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

const ContactDetails = () => {
  const [contactCountry, setContactCountry] = useState("");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const [contactError, setContactError] = useState();

  const [contactFormVarify, setcontactFormVarify] = useState(false);

  const handleContactInput = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const AllCountry = Data.PhoneNoValidation.sort((a, b) =>
    a.Country.localeCompare(b.Country)
  );

  const AllCountryOption = AllCountry.map((item) => ({
    label: item.Country,
    value: item.Country,
  }));

  const contactDataValidation = () => {
    const redgeEmail = /^[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}$/;

    const PhoneNoLength = AllCountry.filter(
      (item) => item.Country === contactCountry
    )[0]?.["PhoneNo Length"];

    const error = {
      name: contactData.name === "" ? "Please Enter Your Name " : "",
      email: !redgeEmail.test(contactData.email) ? "Invalid Email" : "",
      country: contactCountry === "" ? "Please Select Your Country" : "",
      phoneNo:
        contactCountry === ""
          ? "Select Country to varify Mobile number"
          : contactData.phoneNo?.length === Number(PhoneNoLength)
          ? ""
          : "Invalid Number",
    };

    if (
      error.name === "" &&
      error.email === "" &&
      error.country === "" &&
      error.phoneNo === ""
    )
      return setContactError(null), setcontactFormVarify(!contactFormVarify);
    return setContactError(error);
  };

  return (
    <div className="Contact">
      {/* <h1>Contact us!</h1> */}

      <div className="contact-details">
        <div>
          <h1>Contact Us</h1>
          <p>
            Please fill the form for any Querry Our customer support team will
            connect with you in 24hrs
          </p>
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
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter Email"
              value={contactData.email}
              onChange={(e) => handleContactInput(e)}
            />
            <input
              type="number"
              name="phoneNo"
              class="form-control"
              placeholder="Enter Mobile No"
              value={contactData.phoneNo}
              onChange={(e) => handleContactInput(e)}
            />
            <textarea class="form-control" placeholder="Message" rows="3" />
          </div>
        </div>
        <div className="contact-img">
          <img src="./Contact-Us.jpg" />
        </div>

        {/* <div className="conatct-form">
          <h1>Contact us!</h1>
          <div class="form-group">
            <label for="exampleInputFullName">Full Name</label>
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
            <label for="exampleInputEmail">Email</label>
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
            <label for="exampleInputEmail">Country</label>
            <Select
              placeholder="Select Country..."
              isSearchable={true}
              options={AllCountryOption}
              onChange={(e) => setContactCountry(e.value)}
            />
            {contactError?.country && (
              <p className="contact-error">*{contactError?.country}</p>
            )}
            <label for="exampleInputPhoneNo">Mobile No</label>
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
            <label for="exampleInputMessage">Message</label>
            <textarea
              class="form-control"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          {contactError ? (
            <p className="contact-error">Please Enter All Forms</p>
          ) : (
            contactFormVarify && (
              <p className="contact-success">Form is varified</p>
            )
          )}
          <button
            class={
              contactError === null ? "btn btn-success" : "btn btn-primary"
            }
            onClick={contactDataValidation}
          >
            {contactError === null ? "Submit" : "Varify Details"}
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default ContactDetails;
