import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import EachService from "./EachService";

const Services = () => {
  const services = useLoaderData();
  console.log("services,", services);
  return (
    <div className=" bg-slate-500 my-12 py-8 ">
      <div className="container mx-auto grid grid-cols-12  ">
        {services.map((eachService) => (
          <EachService
            key={eachService._id}
            eachService={eachService}
          ></EachService>
        ))}
      </div>
    </div>
  );
};

export default Services;
