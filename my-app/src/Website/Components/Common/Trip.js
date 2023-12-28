import React from "react";
// import Slider from "react-slick";
// import { useCollapse } from "react-collapsed";
import ReadMoreandLess from "./ReadMoreandLess";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Trip = ({ Data, TabData, Tab }) => {
  //   const desktopSettings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     pauseOnHover: true,
  //   };

  //   const mobileSettings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  //   const slider = (settings) => {
  //     return <Slider {...settings}>(tripCards())</Slider>;
  //   };

  // const tripcards = () => {
  //   return (
  //     <>
  //       {Data.specialOffers.hotels.map((item) => (
  //         <div className="card">
  //           <div className="card-image">
  //             <img src={item.image} alt="image" />
  //           </div>

  //           {/* <h4>{item.PName}</h4>
  //           <ReadMoreandLess
  //             text={item.Pdesc}
  //             Showmore="Show more"
  //             ShowLess="Show Less"
  //           />
  //           <button>Book Now</button> */}

  //           <div className="card-details">
  //             <div className="card-hotel">
  //               <h2>{item.name}</h2>
  //             </div>
  //             <div className="card-price">
  //               <div>
  //                 <h3>{item.price}</h3>
  //               </div>
  //               <div>
  //                 <button>{Data.specialOffers.rentButtonName}</button>
  //               </div>
  //             </div>
  //             <div className="card-offer">
  //               <button>
  //                 <BedIcon /> {item.beds}
  //               </button>
  //               <button>
  //                 <BathtubIcon /> {item.bath}
  //               </button>
  //               <button>
  //                 <WifiIcon /> {item["Wi-Fi"]}
  //               </button>
  //               <button>
  //                 <AirportShuttleIcon /> {item.shuttle}
  //               </button>
  //               {/* <button>
  //                 <AirportShuttleIcon /> {item.shuttle}
  //               </button> */}
  //             </div>
  //             <div className="card-location">
  //               <div>
  //                 <LocationOnIcon />
  //               </div>
  //               <div>{item.address}</div>
  //             </div>
  //             <button className="viewButton">
  //                {Data.specialOffers.viewButtonName} <ArrowRightAltIcon />
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </>
  //   );
  // };

  // const [isExpanded, setExpanded] = useState(false);
  // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="container">
      {/* <h1>Special Offers</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trip">{tripcards()}</div> */}
      {/* <div className="desktopSlider">
        <Slider {...desktopSettings}>
          {TabData.recentTrips.map((item) => (
            <div className="card">
              <div className="card-image">
                <img src={item.PImg} alt="image" />
              </div>
              <h4>{item.PName}</h4>
              <p>(item.Pdesc.slice(0, 250))...</p>
            </div>
          ))}
        </Slider>
      </div>
      <div clasName="mobileSlider">
        <Slider {...mobileSettings}>
          {TabData.recentTrips.map((item) => (
            <div className="card">
              <div className="card-image">
                <img src={item.PImg} alt="image" />
              </div>
              <h4>{item.PName}</h4>
              <p>{item.Pdesc.slice(0, 250)}...</p>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default Trip;
