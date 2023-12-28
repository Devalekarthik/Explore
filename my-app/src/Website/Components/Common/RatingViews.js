import Data from "../../Data/data.json";

const RatingViews = () => {
  return (
    <div className="RatingContainer" id="Rating">
      <div className="viewGrid">
        {Data.rating.map((item) => {
          return (
            <span className="viewBlock">
              <h2>{item.ratingNumber}</h2>
              <p>{item.ratingDesc}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RatingViews;
