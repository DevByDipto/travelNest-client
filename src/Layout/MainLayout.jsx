import React, { useContext } from "react";
import Navber from "../Components/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loding from "../Components/Loding";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Navber></Navber>
      <div className="min-h-[700px]">
      <Outlet></Outlet>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
