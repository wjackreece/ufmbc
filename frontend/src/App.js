import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Map from "./components/Footer/Map.js";
import Ministries from "./components/Ministries/Ministries.js";
import Navbar from "./components/Navbar/Navbar.js";

import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Navbar />
      <Ministries />
      <Footer />
      <Map />
    </div>
  );
};

export default App;
