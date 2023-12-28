import React from "react";
import Img from "../Common/Img";
// import ServiceImg from "../../Images/night.jpg";
import Data from "../../Data/data.json";
import Trip from "../Common/Trip";
// import ServiceVideo from "../../Videos/video-1.mp4";

const Service = () => {
  let ServiceData = {
    image: "ServiceImg",
    video: "ServiceVideo",
    title: Data.service.title,
    text: Data.service.text,
    travelLink: Data.service.travellink,
    url: "/",
    Cname: "ImgComp",
    CImg: "ImgText Otherpage",
    CTravel: "TravelBtn",
  };

  return (
    <div>
      <Img {...ServiceData} />
      <Trip Data={Data} TabData={Data.service} Tab="Service" />
    </div>
  );
};
export default Service;
