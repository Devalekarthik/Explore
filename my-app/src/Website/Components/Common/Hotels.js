import { useEffect, useState } from "react";
import Cards from "./Cards";

const Hotels = ({ revisedData, bookedDestination, setBookedHotel }) => {
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

  return (
    <div className="hotels" id="Hotels">
      <div className="hotels-left">
        <img src="hotelsPlanImg.jpg" />
        <h1>Speacil Offers</h1>
        <div className="hotels-desc">
          <div className="hotel-offers">
            <h2>
              <span>FLAT</span>{" "}
              <span>
                60% OFF <br />
              </span>
              On Online Booking
            </h2>
          </div>
          <div className="hotel-searchBtn">
            <p>Search Hotels</p>
            <button
              onClick={() => bookedDestination.length !== 0 && handleHotels()}
              className={bookedDestination.length !== 0 ? "" : "disabledBtn"}
            >
              {!AllHotels
                ? "Search All Hotels Avaliable"
                : "Search Hotels near Booked Destination"}
            </button>
          </div>
        </div>
      </div>
      <div className="hotels-right">
        <div
          className={`hotels-cards ${
            hotelsViewMore && hotelsList.length > 1
              ? "hotels-viewMore"
              : "hotels-viewMoreHidden"
          }`}
        >
          <Cards
            destination={hotelsList}
            setBookedHotel={setBookedHotel}
            id="hotels"
          />
        </div>
        <button
          className={`hotels-viewMoreBtn
            ${
              hotelsList.length === 4 || hotelsList.length === 3
                ? "hotels-Cards4"
                : hotelsList.length === 2
                ? "hotels-Cards2"
                : hotelsList.length === 1
                ? "hotels-Cards1"
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
