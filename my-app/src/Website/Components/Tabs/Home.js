import React from "react";
import Data from "../../Data/data.json";
import Navbar from "../Common/Navbar";
import Banner from "../Common/Banner";
import RatingViews from "../Common/RatingViews";
import PopularDestination from "../Common/PopularDestination";
import BookingBlock from "../Common/BookingBlock";
import ChooseUs from "../Common/ChooseUs";
import ClientsReview from "../Common/ClientsReview";
import ContactDetails from "../Common/ContactDetails";
import Portfolio from "../Common/Portfolio";
import Footer from "../Common/Footer";

const Home = () => {
  let DataJSON = {
    Data: Data,
  };

  return (
    <div className="home">
      <Navbar {...DataJSON} />
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
      <Footer {...DataJSON} />
    </div>
  );
};
export default Home;
