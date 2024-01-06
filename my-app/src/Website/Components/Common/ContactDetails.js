import React, { useState } from "react";
import "bootstrap-4-react";
import "bootstrap";

const ContactDetails = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    country:"",
    phoneNo: "",
  });

  const handleContactInput = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <div className="Contact">
      <h1>Contact us!</h1>
      <form>
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
          <label for="exampleInputEmail">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Enter Email"
            value={contactData.email}
            onChange={(e) => handleContactInput(e)}
          />
          <label for="exampleInputEmail">Country</label>
          <input
            type="text"
            name="country"
            class="form-control"
            placeholder="Enter Country"
            value={contactData.country}
            onChange={(e) => handleContactInput(e)}
          />
          <label for="exampleInputPhoneNo">Phone No</label>
          <input
            type="number"
            name="phoneNo"
            class="form-control"
            placeholder="Enter Phone No"
            value={contactData.phoneNo}
            onChange={(e) => handleContactInput(e)}
          />
          <label for="exampleInputMessage">Message</label>
          <textarea
            class="form-control"
            placeholder="Message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactDetails;
