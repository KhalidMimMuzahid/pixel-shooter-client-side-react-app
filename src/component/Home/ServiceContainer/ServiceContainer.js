import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/UserContext";
import EachService from "../../Services/EachService";

const ServiceContainer = ({ services }) => {
  console.log("services", services);
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
      <div className="mx-8">
        <Link
          className="block font-bold hover:bg-slate-300 text-center bg-white px-4 py-2"
          to="/services"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default ServiceContainer;
