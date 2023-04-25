import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Map from "./components/Footer/Map.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";

import css from "./styles/app.module.scss";
import About from "./components/About/About.js";
import Sermons from "./components/Sermons/Sermons.js";
import Gallery from "./components/Gallery/Gallery.js";
import Events from "./components/Events/Events.js";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Navbar />
      <Home />
      <About />
      <Sermons />
      <Gallery />
      <Events />
      <Footer />
      <Map />
    </div>
  );
};

export default App;
