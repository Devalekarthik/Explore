import React from "react";
import Banner from "../Common/Banner";
import RatingViews from "../Common/RatingViews";
import DestinationDetails from "../Common/DestinationDetails";
import Data from "../../Data/data.json";

const Home = () => {
  let BannerDetails = {
    Data: Data,
  };
  let RatingDetails = {
    Data: Data,
  };

  return (
    <div className="home">
      <Banner {...BannerDetails} />
      <div className="home-info">
        <RatingViews {...RatingDetails} />
        <DestinationDetails />
      </div>
    </div>
  );
};
export default Home;
