import React from "react";
import Banner from "../Common/Banner";
// import HomeImg from "../../Images/12.jpg";
import HomeDetails from "../Common/HomeDetails";
import Data from "../../Data/data.json";
// import HomeVideo from "../../Videos/videoBg.mp4";
import HomeVideo from "../../Videos/HomePage.mp4";
// import Select from "react-select";
// import { useAsyncDebounce } from "react-select-search";

const Home = () => {
  let BannerDetails = {
    Data: Data,
  };

  return (
    <div className="home">
      <Banner {...BannerDetails} />
      <div className="home-info">
        <HomeDetails />
      </div>
    </div>
  );
};
export default Home;
