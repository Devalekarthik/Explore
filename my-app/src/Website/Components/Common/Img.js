import React from "react";

const Img = (prop) => {
  const { image, video, title, text, travellink, url, Cname, CImg, CTravel } =
    prop;

  return (
    <div className={Cname}>
      {/* <img src={image} /> */}
      <video src={video} autoPlay loop muted />
      {title && (
        <div className={CImg}>
          <h1>{title}</h1>
          <p>{text}</p>
          {/* {travellink && (
            <a href={url} className={CTravel}>
              {travelLink}
            </a>
          )} */}
        </div>
      )}
    </div>
  );
};
export default Img;
