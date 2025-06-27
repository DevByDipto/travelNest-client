import React, { useContext } from "react";
import Navber from "../Components/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loding from "../Components/Loding";

const MainLayout = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <Navber></Navber>
      {user?<Outlet></Outlet> : <Loding></Loding>}
      
    </>
  );
};

export default MainLayout;
