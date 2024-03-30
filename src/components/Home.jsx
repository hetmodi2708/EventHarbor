import React from "react";

import UpcomingEvents from "./UpcomingEvents";
import Benefits from "./Benefits";
import Footer from "./Footer";
import PhotoGallery from "./Photo_Gallery";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <UpcomingEvents />
      <Benefits />
      <PhotoGallery />
      <Footer />
    </>
  );
};

export default Home;
