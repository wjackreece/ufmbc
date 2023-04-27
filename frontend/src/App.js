import React from "react";
import About from "./components/About/About.js";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Map from "./components/Footer/Map.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";

import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Navbar />
      <Home />
      <About />
      <Footer />
      <Map />
    </div>
  );
};

export default App;
