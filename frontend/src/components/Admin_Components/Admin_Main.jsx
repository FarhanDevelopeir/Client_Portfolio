import React from "react";
import Admin_SideBar from "./Admin_SideBar";
import { Outlet } from "react-router-dom";

const Admin_Main = () => {
  return (
    <div className=" h-full md:h-screen pt-[4rem] md:pt-[6.2rem]  md:flex ">
      <Admin_SideBar/>
      <div className="md:flex-1 ">
      <Outlet/>
      </div>
    
    </div>
  );
};

export default Admin_Main;
