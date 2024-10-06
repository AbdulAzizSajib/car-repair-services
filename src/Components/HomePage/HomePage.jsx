import React from "react";

import Slider from "../Slider/Slider";
import About from "../About/About";
import Services from "../Services/Services";

const HomePage = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <Slider />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;
