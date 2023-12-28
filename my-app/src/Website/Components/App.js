import React from "react";
import "../Styles/App.scss";
// import { Route, Routes } from "react-router-dom";
import Home from "./Tabs/Home";
// import About from "./Tabs/About";
// import Service from "./Tabs/Service";
// import Contact from "./Tabs/Contact";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;
