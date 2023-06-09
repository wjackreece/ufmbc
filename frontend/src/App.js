import React from "react";
// import About from "./components/About/About.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Ministries from "./components/Ministries/Ministries.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Contact from "./components/Contact/Contact.js";
import GalleryTest from "./components/Gallery/GalleryTest.js";
import MinistryInfo from "./components/MinistryInfo/MinistryInfo.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/ministries/info/:ministryname"
          element={<MinistryInfo />}
        />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/gallery" element={<GalleryTest />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // </div>
  );
};

export default App;
