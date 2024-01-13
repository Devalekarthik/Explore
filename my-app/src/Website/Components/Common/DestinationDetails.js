import React, { useState } from "react";
import Data from "../../Data/data.json";
import Trip from "./Trip";
import ChooseUs from "./ChooseUs";
import Blog from "./Blog";
import ClientsReview from "./ClientsReview";
import Destination from "./Destination";
import Hotels from "./Hotels";
import Portfolio from "./Portfolio";
import ContactDetails from "./ContactDetails";

const DestinationDetails = () => {
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
    <div className="destination">
      <Destination
        revisedData={revisedData}
        setBookedDestination={setBookedDestination}
      />
      <Hotels
        revisedData={revisedData}
        bookedDestination={bookedDestination}
        setBookedHotel={setBookedHotel}
      />
    </div>
  );
};

export default DestinationDetails;
