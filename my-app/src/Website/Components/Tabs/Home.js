import React, { useState } from "react";
import Data from "../../Data/data.json";
import Banner from "../Common/Banner";
import RatingViews from "../Common/RatingViews";
import BookingBlock from "../Common/BookingBlock";
import PopularDestination from "../Common/PopularDestination";
import ChooseUs from "../Common/ChooseUs";
import ClientsReview from "../Common/ClientsReview";
import ContactDetails from "../Common/ContactDetails";
import Portfolio from "../Common/Portfolio";

const Home = () => {
  let DataJSON = {
    Data: Data,
  };

  return (
    <div className="home">
      <Banner {...DataJSON} />
      <div className="home-info">
        <RatingViews {...DataJSON} />
        <PopularDestination {...DataJSON} />
        <BookingBlock {...DataJSON} />
        <ChooseUs {...DataJSON} />
        <ClientsReview {...DataJSON} />
        <ContactDetails {...DataJSON} />
        <Portfolio {...DataJSON} />
      </div>
    </div>
  );
};
export default Home;
