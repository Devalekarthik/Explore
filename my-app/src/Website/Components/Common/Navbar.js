import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const { Data } = props;

  const [navbarIcon, setNavbarIcon] = useState(true);

  return (
    <nav className="navbar-block">
      <h1 className="navbar-logo">{Data.header.company}</h1>
      <div
        className="navbar-menuIcon"
        onClick={() => setNavbarIcon(!navbarIcon)}
      >
        {navbarIcon ? <DehazeIcon /> : <CancelIcon />}
      </div>
      <div className={`navbar-menu ${navbarIcon ? "" : "navbar-mobile"}`}>
        {Data.header["nav-name"].map((item) => (
          <div>
            <Link
              activeClass="active"
              to={item.tab}
              spy={true}
              smooth={true}
              offset={-150}
              duration={1500}
              className="navbar-link"
              onClick={() => setNavbarIcon(!navbarIcon)}
            >
              {item.tab}
            </Link>
          </div>
        ))}
        <button
          className="navbar-signUpBtn"
          data-toggle="modal"
          data-target="#login"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
