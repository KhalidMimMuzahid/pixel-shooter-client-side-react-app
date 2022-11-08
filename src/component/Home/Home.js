import React from "react";
import Carosel from "./Carosel/Carosel";
import DescriptionAboutPixelShooter from "./DescriptionAboutPixelShooter/DescriptionAboutPixelShooter";
import PopulerPhotosContainer from "./PopulerPhotosContainer/PopulerPhotosContainer";
import ServiceContainer from "./ServiceContainer/ServiceContainer";

const Home = () => {
  return (
    <div>
      <Carosel />
      <ServiceContainer />
      <PopulerPhotosContainer />
      <DescriptionAboutPixelShooter />
    </div>
  );
};

export default Home;
