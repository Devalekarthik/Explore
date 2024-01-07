import React, { useEffect, useState } from "react";
import Data from "../../Data/data.json";
import Select from "react-select";
import Cards from "./Cards";

const Destination = ({ revisedData, setBookedDestination }) => {
  const [destination, setDestination] = useState([]);
  const [navbarType, setNavbarType] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState();
  const [searchBox, setSearchBox] = useState("");
  const [destinationViewMore, setDestinationViewMore] = useState(false);

  const search = () => {
    setSelectedCountry(searchBox);
  };

  const revisedCountry = revisedData.filter(
    (item) => item.country === selectedCountry
  );

  const countries = [...new Set(revisedData.map((item) => item.country))];
  countries.unshift("All Country");
  countries.sort();
  const countryOption = countries.map((item) => ({ label: item, value: item }));

  const handleNavbar = (type) => {
    const DataType = (revised) =>
      type !== "All" ? revised.filter((item) => item.type === type) : revised;

    const revisedNavbar =
      selectedCountry === "All Country"
        ? DataType(revisedData)
        : DataType(revisedCountry);
    setNavbarType(type);
    setDestination(revisedNavbar);
  };

  const navbar = [
    ...new Set(
      (selectedCountry === "All Country" ? revisedData : revisedCountry).map(
        (item) => item.type
      )
    ),
  ];
  navbar.unshift("All");
  navbar.sort();

  useEffect(() => {
    setDestination(revisedCountry);
    handleNavbar("All");
  }, [selectedCountry]);

  useEffect(() => {
    setDestination(revisedData);
    setSelectedCountry("All Country");
  }, []);

  console.log("destination.length", destination.length);

  return (
    <>
      <div className="destination" id="Search Destination">
        <p className="dest-Title">{Data.Destination.title}</p>
        <p className="dest-Subtitle">{Data.Destination.desc}</p>

        <div className="search">
          <Select
            placeholder="Select Country..."
            isSearchable={true}
            options={countryOption}
            onChange={(e) => setSearchBox(e.value)}
          />
          <button
            onClick={() => search()}
            className={`searchBtn ${searchBox !== "" ? "" : "disabledBtn"}`}
            disabled={searchBox !== "" ? false : true}
          >
            Search
          </button>
        </div>

        <div className="cardsNavbar">
          {navbar.map((item) => {
            return (
              <button
                onClick={() => handleNavbar(item)}
                className={navbarType === item ? "selectedButton" : ""}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div
          className={`destination-cards 
          ${
            destinationViewMore && destination.length > 1
              ? "dest-viewMore"
              : "dest-viewMoreHidden"
          }
          `}
        >
          <Cards
            destination={destination}
            setBookedDestination={setBookedDestination}
            id="places"
          />
        </div>
        <button
          className={`dest-viewMoreBtn
            ${
              destination.length === 4
                ? "dest-Cards4"
                : destination.length === 3
                ? "dest-Cards3"
                : destination.length === 2
                ? "dest-Cards2"
                : destination.length === 1
                ? "dest-Cards1"
                : ""
            }`}
          onClick={() => setDestinationViewMore(!destinationViewMore)}
        >
          {destinationViewMore ? "View Less" : "View More"}
        </button>
      </div>
    </>
  );
};
export default Destination;
