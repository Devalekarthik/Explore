import { useEffect, useState } from "react";
import Cards from "./Cards";

const Hotels = (props) => {
  const { Data, revisedData, bookedDestination, setBookedHotel } = props;

  const [AllHotels, setAllHotels] = useState(true);

  const hotels = revisedData.map((item) => item.hotels).flat() || [];

  const filterHotel =
    bookedDestination.length !== 0 && AllHotels
      ? bookedDestination[0]?.hotels
      : hotels;

  const [hotelsList, sethotelsList] = useState(hotels);
  const [hotelsViewMore, setHotelsViewMore] = useState(false);

  const handleHotels = () => {
    sethotelsList(filterHotel);
    setAllHotels(!AllHotels);
  };

  useEffect(() => {
    setAllHotels(filterHotel);
  }, [bookedDestination]);

  const hotelsCardsData = {
    Data: Data,
    destination: hotelsList,
    setBookedHotel: setBookedHotel,
    id: "hotels",
  };

  return (
    <div className="hotels" id="Hotels">
      <div className="hotels-offers">
        <img src="hotelsPlanImg.jpg" className="hotels-bgimg" />
        <span className="hotels-specialTag">Special Offers</span>
        <div
          className={`hotels-offersblock ${
            hotelsViewMore && "hotel-offersViewMore"
          }`}
        >
          <div
            className={`hotel-offersTag ${
              hotelsViewMore && "hotel-offersTagViewMore"
            }`}
          >
            <div className="hotels-offersText">
              <span>FLAT</span>{" "}
              <span>
                60% OFF <br />
              </span>
              On Online Booking
            </div>
          </div>
          <div className="hotel-searchBlock">
            <p className="hotel-searchText">Search Hotels</p>
            <button
              onClick={() => bookedDestination.length !== 0 && handleHotels()}
              className={`hotels-searchBtn ${
                bookedDestination.length !== 0 ? "" : "hotels-searchdisabledBtn"
              }`}
            >
              {!AllHotels
                ? "Search All Hotels Avaliable"
                : "Search Hotels near Booked Destination"}
            </button>
          </div>
        </div>
      </div>
      <div className="hotels-cardsBlock">
        <div
          className={`hotels-cards ${
            hotelsViewMore && hotelsList.length > 1
              ? "hotels-viewMore"
              : "hotels-viewMoreHidden"
          }`}
        >
          <Cards {...hotelsCardsData} />
        </div>
        <button
          className={`hotels-viewMoreBtn
            ${
              hotelsList.length === 2
                ? "hotels-cards2"
                : hotelsList.length === 1
                ? "hotels-cards1"
                : ""
            }
          `}
          onClick={() => setHotelsViewMore(!hotelsViewMore)}
        >
          {hotelsViewMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};
export default Hotels;
