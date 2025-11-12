import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MainLayOut = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayOut;
