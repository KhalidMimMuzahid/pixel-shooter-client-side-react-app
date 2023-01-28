import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
