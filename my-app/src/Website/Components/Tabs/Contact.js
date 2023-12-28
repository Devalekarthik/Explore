import React from "react";
import Img from "../Common/Img";
// import ContactImg from "../../Images/2.jpg";
import Data from "../../Data/data.json";
import ContactDetails from "../Common/ContactDetails";
// import ContactVideo from "../../videos/video-2.mp4";

const Contact = () => {
  let ContactData = {
    image: "ContactImg",
    video: "ContactVideo",
    title: Data.contact.title,
    text: Data.contact.text,
    url: "/",
    travelLink: Data.contact.travellink,
    Cname: "ImgComp",
    CImg: "ImgText Otherpage",
    CTravel: "TravelBtn",
  };
  return (
    <div>
      <Img {...ContactData} />
      <ContactDetails />
    </div>
  );
};
export default Contact;
