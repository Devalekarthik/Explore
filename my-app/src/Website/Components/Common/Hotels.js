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
        <Cards
          destination={hotelsList}
          setBookedHotel={setBookedHotel}
          id="hotels"
        />
      </div>
    </div>
  );
};
export default Hotels;
