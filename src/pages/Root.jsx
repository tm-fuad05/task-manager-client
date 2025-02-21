import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Root = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* {pathname === "/" && <Footer />} */}
    </div>
  );
};

export default Root;
