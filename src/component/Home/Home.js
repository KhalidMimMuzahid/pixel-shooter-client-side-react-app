import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "./About/About";
import Carosel from "./Carosel/Carosel";
import ContactUS from "./ContactUS/ContactUS";
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
      <About />
      <ContactUS />
    </div>
  );
};

export default Home;
