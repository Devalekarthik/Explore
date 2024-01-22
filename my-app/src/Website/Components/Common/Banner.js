import React from "react";
import HomeVideo from "../../Videos/HomePage.mp4";

const Banner = (prop) => {
  const { Data } = prop;

  return (
    <div className="banner">
      <video src={HomeVideo} className="banner-video" autoPlay loop muted />
      {Data?.Header?.title && (
        <div className="banner-info">
          <div className="banner-title">{Data?.Header?.title}</div>
          <p className="banner-text">{Data?.Header?.subTitle}</p>
        </div>
      )}
    </div>
  );
};
export default Banner;
