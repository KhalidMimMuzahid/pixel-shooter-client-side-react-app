import React from "react";
import { useLoaderData } from "react-router-dom";
import Carosel from "./Carosel/Carosel";
import DescriptionAboutPixelShooter from "./DescriptionAboutPixelShooter/DescriptionAboutPixelShooter";
import PopulerPhotosContainer from "./PopulerPhotosContainer/PopulerPhotosContainer";
import ServiceContainer from "./ServiceContainer/ServiceContainer";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Carosel />
      <ServiceContainer services={services}></ServiceContainer>
      <PopulerPhotosContainer />
      <DescriptionAboutPixelShooter />
    </div>
  );
};

export default Home;
