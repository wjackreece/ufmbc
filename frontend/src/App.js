import React from "react";
// import About from "./components/About/About.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
// import Map from "./components/Footer/Map.js";
import Ministries from "./components/Ministries/Ministries.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Contact from "./components/Contact/Contact.js";
import Gallery from "./components/Gallery/Gallery.js";

// import css from "./styles/app.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // </div>
  );
};

export default App;
