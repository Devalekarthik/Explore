import LocationOnIcon from "@mui/icons-material/LocationOn";
import "bootstrap-4-react";
import "bootstrap";
import { useState } from "react";
import MoreDetails from "./MoreDetails";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Cards = ({ destination, setBookedDestination, setBookedHotel, id }) => {
  const [selectedCard, setSelectedCard] = useState([]);

  return (
    <div className="cardPlaces">
      {destination.map((item) => {
        return (
          <div className="cards">
            <div className="cardsImg">
              <img src={item?.Img} />
              <div className="cardsInfo">
                <div className="InfoPlacement">
                  <div>
                    {item?.place.length > 15
                      ? `${item?.place.substring(0, 20)}...`
                      : item?.place}
                    <div className="placelocation">
                      <LocationOnIcon /> {item?.country}
                    </div>
                  </div>
                  <div className="rating">
                    {item?.rating}
                    <StarRoundedIcon />
                  </div>
                </div>
              </div>
              <div className="cardsHover">
                <button
                  class="btn btn-primary"
                  data-bs-target={`#${id}`}
                  data-bs-toggle="modal"
                  onClick={() => setSelectedCard([item])}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <MoreDetails
        selectedCard={selectedCard}
        setBookedDestination={setBookedDestination}
        setBookedHotel={setBookedHotel}
        id={id}
      />
    </div>
  );
};
export default Cards;
