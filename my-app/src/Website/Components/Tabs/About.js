import React from "react";
import AboutDetails from "../Common/AboutDetails";
// import AboutVideo from "../../videos/video-1.mp4";
import Img from "../Common/Img";
// import AboutImg from "../Images/night.jpg";
// import AboutImg from "../../Images/night.jpg";
// import AboutVideo from "../../Videos/video-1.mp4";
import Data from "../../Data/data.json";

const About = () => {
  let AboutData = {
    image: "AboutImg",
    video: "AboutVideo",
    title: Data.about.title,
    text: Data.about.text,
    travelLink: Data.about.travelLink,
    url: "/",
    Cname: "ImgComp",
    CImg: "ImgText Otherpage",
    CTravel: "TravelBtn",
  };

  return (
    <div>
      <Img {...AboutData} />
      <AboutDetails Data={Data} />
    </div>
  );
};
export default About;
