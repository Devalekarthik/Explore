import React from "react";
import HomeVideo from "../../Videos/HomePage.mp4";

const Banner = (prop) => {
  const { Data } = prop;

  return (
    <div className="banner">
      <video src={HomeVideo} className="banner-video" autoPlay loop muted />
      {Data?.home?.title && (
        <div className="banner-info">
          <div className="banner-title">{Data?.home?.title}</div>
          <p className="banner-text">{Data?.home?.text}</p>
        </div>
      )}
    </div>
  );
};
export default Banner;
