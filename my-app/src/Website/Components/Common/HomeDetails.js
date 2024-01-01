import React, { useState } from "react";
import Data from "../../Data/data.json";
import Trip from "./Trip";
import RatingViews from "./RatingViews";
import ChooseUs from "./ChooseUs";
import Blog from "./Blog";
import ClientsReview from "./ClientsReview";
import Destination from "./Destination";
import Hotels from "./Hotels";
import Portfolio from "./Portfolio";

const HomeDetails = () => {
  // let revisedData = Data.Destination.places.sort((a, b) => b.rating - a.rating);

  // const [destination, setDestination] = useState([]);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [descType, setDescType] = useState("All");
  // const [selectedCountry, setSelectedCountry] = useState("All Country");
  // const [searchBox, setSearchBox] = useState("All Country");

  // const search = () => {
  //   setSelectedCountry(searchBox);
  // };

  // const revisedCountry = revisedData.filter(
  //   (item) => item.country === selectedCountry
  // );

  // const countries = [...new Set(revisedData.map((item) => item.country))];
  // countries.unshift("All Country");
  // countries.sort();
  // const countryOption = countries.map((item) => ({ label: item, value: item }));

  // const handleNavbar = (type) => {
  //   const DataType = (revised) =>
  //     type !== "All" ? revised.filter((item) => item.type === type) : revised;

  //   const revisedNavbar =
  //     selectedCountry === "All Country"
  //       ? DataType(revisedData)
  //       : DataType(revisedCountry);
  //   setDescType(type);
  //   setDestination(revisedNavbar);
  // };

  // const navbar = [
  //   ...new Set(
  //     (selectedCountry === "All Country" ? revisedData : revisedCountry).map(
  //       (item) => item.type
  //     )
  //   ),
  // ];
  // navbar.unshift("All");
  // navbar.sort();

  // useEffect(() => {
  //   setDestination(revisedCountry);
  //   handleNavbar("All");
  // }, [selectedCountry]);

  // useEffect(() => {
  //   setDestination(revisedData);
  // }, []);

  const [bookedDestination, setBookedDestination] = useState([]);
  const [bookedHotel, setBookedHotel] = useState([]);

  let revisedData = Data.Destination.places.sort((a, b) => b.rating - a.rating);

  revisedData = revisedData
    .map((item, index) => [
      {
        ...item,
        id: index + 1,
        hotels: item.hotels
          .map((ht) => [{ ...ht, country: item.country }])
          .flat(),
      },
    ])
    .flat();

  return (
    <div className="places">
      <RatingViews />
      <div className="popular-Dest" id="Popular Destination">
        <p className="popular-Title">{Data.home.desc["desc-title"]}</p>
        <div className="popular-subtitle">{Data.home.desc["desc-info"]}</div>
        {Data.home["travel-places"].map((item) => {
          return (
            <div className="des">
              <div className="des-text">
                <h2>{item.title}</h2>
                <p>{item.info}</p>
              </div>
              <div className="des-image">
                <img src={item.img1} alt="" />
                <img src={item.img2} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <Trip Data={Data} TabData={Data.home} Tab="Home" />

      <Destination
        revisedData={revisedData}
        setBookedDestination={setBookedDestination}
      />
      <Hotels
        revisedData={revisedData}
        bookedDestination={bookedDestination}
        setBookedHotel={setBookedHotel}
      />

      <ChooseUs />
      {/* <Blog /> */}
      <ClientsReview />
      <Portfolio Data={revisedData} />
    </div>
  );
};

export default HomeDetails;
