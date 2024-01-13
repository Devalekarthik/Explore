const PopularDestination = (props) => {
  const { Data } = props;
  return (
    <div className="popular-destination">
      <div className="popular-wrapper" id="Popular Destination">
        <p className="popular-title">{Data.home.desc["desc-title"]}</p>
        <div className="popular-subTitle">{Data.home.desc["desc-info"]}</div>
        {Data.home["travel-places"].map((item) => {
          return (
            <div className="popularBlock">
              <div className="popularBlock-text">
                <div className="popularBlock-title">{item.title}</div>
                <p className="popularBlock-info">{item.info}</p>
              </div>
              <div className="popularBlock-images">
                <img src={item.img1} alt="" className="popularBlock-img" />
                <img src={item.img2} alt="" className="popularBlock-img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PopularDestination;