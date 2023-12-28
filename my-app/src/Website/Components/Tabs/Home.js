import React from "react";
import Img from "../Common/Img";
// import HomeImg from "../../Images/12.jpg";
import HomeDetails from "../Common/HomeDetails";
import Data from "../../Data/data.json";
// import HomeVideo from "../../Videos/videoBg.mp4";
import HomeVideo from "../../Videos/HomePage.mp4";
// import Select from "react-select";
// import { useAsyncDebounce } from "react-select-search";

const Home = () => {
  let Homedata = {
    image: "HomeImg",
    video: HomeVideo,
    title: Data.home.title,
    text: Data.home.text,
    travelLink: Data.home.travellink,
    url: "/",
    Cname: "ImgComp",
    CImg: "ImgText",
    CTravel: "TravelBtn",
  };

  return (
    <div>
      <Img {...Homedata} /> 
      <HomeDetails />
      {/* <video src={first} autoPlay loop muted></video> */}
    </div>
  );
};
export default Home;
