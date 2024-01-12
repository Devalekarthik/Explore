import React, { useState } from "react";
import Banner from "../Common/Banner";
import RatingViews from "../Common/RatingViews";
import DestinationDetails from "../Common/DestinationDetails";
import Data from "../../Data/data.json";
import PopularDestination from "../Common/PopularDestination";

const Home = () => {
  const [bookedDestination, setBookedDestination] = useState([]);
  const [bookedHotel, setBookedHotel] = useState([]);

  let revisedData = Data.Destination.places.sort((a, b) => b.rating - a.rating);

  revisedData = revisedData
    .map((item, index) => [
      {
        ...item,
        id: index + 1,
        hotels: item.hotels
          .map((ht) => [{ ...ht, country: item.country }])
          .flat(),
      },
    ])
    .flat();

  let BannerDetails = {
    Data: Data,
  };
  let RatingDetails = {
    Data: Data,
  };

  let popularDetails = {
    Data: Data,
  };

  return (
    <div className="home">
      <Banner {...BannerDetails} />
      <div className="home-info">
        <RatingViews {...RatingDetails} />
        <PopularDestination {...popularDetails} />
        <DestinationDetails />
      </div>
    </div>
  );
};
export default Home;
