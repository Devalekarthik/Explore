import React, { useEffect, useState } from "react";
import ReadMoreandLess from "./ReadMoreandLess";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-scroll";
import Select from "react-select";

const MoreDetails = (props) => {
  const { Data, selectedCard, setBookedDestination, setBookedHotel, id } =
    props;

  const [inputData, setInputData] = useState({
    Fname: "",
    Email: "",
    MobileNo: "",
    TDate: "",
    Members: "",
    Rooms: "",
  });
  const [error, setError] = useState();
  const [varified, setVarified] = useState(false);

  const handleData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const [detailsCountry, setDetailsCountry] = useState("");

  const AllCountry = Data.PhoneNoValidation.sort((a, b) =>
    a.Country.localeCompare(b.Country)
  );

  const AllCountryOption = AllCountry.map((item) => ({
    label: item.Country,
    value: item.Country,
  }));

  const dataValidation = () => {
    const redgeEmail = /^[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}$/;

    const currentDate = new Date();
    const selectedDate = new Date(inputData.TDate);
    const PhoneNoLength = AllCountry.filter(
      (item) => item.Country === detailsCountry
    )[0]?.["PhoneNo Length"];

    const error = {
      Fname: inputData.Fname === "" ? "Please Enter Your First Name" : "",
      Email: !redgeEmail.test(inputData.Email) ? "Invalid Email" : "",
      Country: detailsCountry === "" ? "Please Select Your Country" : "",
      MobileNo:
        detailsCountry === ""
          ? "Select Country to varify Mobile number"
          : inputData.MobileNo?.length === Number(PhoneNoLength)
          ? ""
          : "Invalid Number",
      TDate:
        inputData.TDate === ""
          ? "Please Enter Date of Trip"
          : selectedDate - currentDate <= 0
          ? "Date is Expired"
          : "",
      Members: inputData?.Members === "" ? "Please Enter Total Members" : "",
      Rooms: inputData?.Rooms === "" ? "Please Enter Rooms Required" : "",
    };

    if (
      error.Fname === "" &&
      error.Email === "" &&
      error.Country === "" &&
      error.MobileNo === "" &&
      error.TDate === "" &&
      (id === "places" ? error.Members : error.Rooms) === ""
    ) {
      return setError(null), setVarified(!varified);
    }

    return setError(error);
  };

  const handleBooking = () => {
    id === "places"
      ? setBookedDestination(selectedCard)
      : setBookedHotel(selectedCard);
  };

  useEffect(() => {
    setInputData({
      Fname: "",
      Lname: "",
      Email: "",
      MobileNo: "",
      TDate: "",
      Members: "",
      Rooms: "",
    });
    setError("");
    setVarified(false);
  }, [selectedCard]);

  return (
    <div className="moreDetails">
      <div
        class="modal fade"
        id={id}
        aria-hidden="true"
        aria-labelledby={id}
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={`${id}Label`}>
                {id === "places" ? "Trip Details" : "Hotel Details"}
              </h1>
              <button
                type="button"
                class="moreDetails-closeBTN close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="moreDetails-block">
                <div className="moreDetails-box">
                  <span className="moreDetails-boxImg">
                    <img
                      src={selectedCard[0]?.Img}
                      className="moreDetails-img"
                    />
                  </span>
                </div>
                <div className="moreDetails-info">
                  <div>
                    <h2>{selectedCard[0]?.place}</h2>
                    <h4>
                      <LocationOnIcon />
                      {selectedCard[0]?.country}
                    </h4>
                  </div>
                  <div>
                    <h4>
                      {selectedCard[0]?.rating}
                      <StarRoundedIcon />
                    </h4>
                  </div>
                </div>
                <div>
                  {id === "places" && (
                    <ReadMoreandLess
                      text={selectedCard[0]?.desc}
                      Showmore="Read More"
                      ShowLess="Read Less"
                    />
                  )}
                </div>
                <div className="moreDetails-info">
                  <div>
                    <h3>Price</h3>
                  </div>
                  <div>
                    <h3>$500</h3>
                  </div>
                </div>
                <div>
                  <h3>{id === "places" ? "Trip Details" : "Hotel Details"}</h3>
                  {id === "places" ? (
                    <>
                      <li>3 days trip</li>
                      <li>All Hotels booking</li>
                      <li>3 times food (veg & non-veg)</li>
                      <li>2 times snacks</li>
                    </>
                  ) : (
                    <>
                      <li>Free Wi-fi</li>
                      <li>2 Confortable Beds</li>
                      <li>1 BathRoom</li>
                      <li>Unlimited BreakFast</li>
                      <li>Free Spa</li>
                    </>
                  )}
                </div>
                <p className="moreDetails-alertMessage">
                  For more details please fill the form{" "}
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target={`#${id}2`}
                data-bs-toggle="modal"
              >
                Form
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id={`${id}2`}
        aria-hidden="true"
        aria-labelledby={`${id}2`}
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={`${id}Label2`}>
                Client Details
              </h1>
              <button
                type="button"
                class="moreDetails-closeBTN close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="moreDetails-form">
                <div className="moreDetails-formInput">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="Fname"
                    onChange={handleData}
                    value={inputData.Fname}
                    disabled={!varified ? false : true}
                  />
                  {error?.Fname && (
                    <p className="moreDetails-errorTag">
                      <StarRoundedIcon />
                      {error?.Fname}
                    </p>
                  )}
                </div>
                <div className="moreDetails-formInput">
                  <input
                    type="email"
                    placeholder="email Id"
                    name="Email"
                    onChange={handleData}
                    value={inputData.Email}
                    disabled={!varified ? false : true}
                  />
                  {error?.Email && (
                    <p className="moreDetails-errorTag">
                      <StarRoundedIcon />
                      {error?.Email}
                    </p>
                  )}
                </div>
                <div className="moreDetails-formInput">
                  <Select
                    placeholder="Select Country..."
                    isSearchable={true}
                    options={AllCountryOption}
                    onChange={(e) => setDetailsCountry(e.value)}
                    isDisabled={!varified ? false : true}
                  />
                  {error?.Country && (
                    <p className="moreDetails-errorTag">
                      <StarRoundedIcon />
                      {error?.Country}
                    </p>
                  )}
                </div>
                <div className="moreDetails-formInput">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    name="MobileNo"
                    onChange={handleData}
                    value={inputData.MobileNo}
                    disabled={!varified ? false : true}
                  />
                  {error?.MobileNo && (
                    <p className="moreDetails-errorTag">
                      <StarRoundedIcon />
                      {error?.MobileNo}
                    </p>
                  )}
                </div>
                <div className="moreDetails-formInput">
                  <input
                    type="date"
                    placeholder="Date of Travel"
                    name="TDate"
                    onChange={handleData}
                    value={inputData.TDate}
                    disabled={!varified ? false : true}
                  />
                  {error?.TDate && (
                    <p className="moreDetails-errorTag">
                      <StarRoundedIcon />
                      {error?.TDate}
                    </p>
                  )}
                </div>
                <div className="moreDetails-formInput">
                  <input
                    type="number"
                    placeholder={
                      id === "places" ? "Total Members" : "Rooms Required"
                    }
                    name={id === "places" ? "Members" : "Rooms"}
                    onChange={handleData}
                    value={
                      id === "places" ? inputData.Members : inputData.Rooms
                    }
                    disabled={!varified ? false : true}
                  />
                  {(id === "places" ? error?.Members : error?.Rooms) && (
                    <p className="moreDetails-errorTag">
                      <StarRoundedIcon />
                      {id === "places" ? error.Members : error.Rooms}
                    </p>
                  )}
                </div>
                <textarea
                  placeholder="Specific Requirement"
                  className="moreDetails-textarea"
                />
                {error ? (
                  <p className="moreDetails-errorVarify">
                    Please Enter All <StarRoundedIcon /> Forms
                  </p>
                ) : (
                  varified && (
                    <p className="moreDetails-successVarify">
                      Form is varified{" "}
                    </p>
                  )
                )}
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target={`#${id}`}
                data-bs-toggle="modal"
              >
                Back to Details
              </button>
              <button
                class={varified ? "btn btn-success" : "btn btn-primary"}
                data-bs-target={`#${id}3`}
                onClick={!varified ? dataValidation : handleBooking}
                data-bs-toggle={error === null ? "modal" : ""}
              >
                {!varified ? "Varify Forms" : "Book Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id={`${id}3`}
        aria-hidden="true"
        aria-labelledby={`${id}3`}
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header modal3">
              <button
                type="button"
                class="moreDetails-closeBTN close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>
                <h1>Thank you!</h1>
                Our Customer Support team will connect with you in next 24hrs.
              </p>
              {id === "places" && (
                <>
                  <p className="moreDetails-noteInfo">
                    <h2>Note:</h2>
                    We give much important to customers safety and comfort so we
                    offer our customer best hotels of there own choice.
                  </p>
                  <p className="moreDetails-bookHotel">
                    So please visit our special offers block to book the Hotels.
                  </p>
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    href=""
                  >
                    <Link
                      activeClass="active"
                      to="Hotels"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={1000}
                    >
                      Book Hotel
                    </Link>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreDetails;
