import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import { Link } from "react-router-dom";
import Data from "../../Data/data.json";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarIcon, setNavbarIcon] = useState(true);

  // const tabIcons = [
  //   { tab: "Home", icons: <HomeIcon /> },
  //   { tab: "About", icons: <InfoIcon /> },
  //   { tab: "Service", icons: <BusinessCenterIcon /> },
  //   { tab: "Contact", icons: <ContactsIcon /> },
  // ];

  // const displayicon = (tabName) => {
  //   const logo = tabIcons.filter((item) => item.tab === tabName);
  //   return <span>{logo[0].icons}</span>;
  // };

  return (
    <nav className="navbarItems">
      <h1 className="navbarLogo">{Data.header.company}</h1>
      <div className="menuIcon" onClick={() => setNavbarIcon(!navbarIcon)}>
        {navbarIcon ? <DehazeIcon /> : <CancelIcon />}
      </div>
      <div className={`navMenu ${navbarIcon ? "" : "mobile"}`}>
        {Data.header["nav-name"].map((item) => (
          <div>
            <Link
              activeClass="active"
              to={item.tab}
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
              className="navLink"
              onClick={() => setNavbarIcon(!navbarIcon)}
            >
              {item.tab}
            </Link>
          </div>
        ))}
        <button className="signUpButton">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
