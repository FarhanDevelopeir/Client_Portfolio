import React from "react";
import Admin_SideBar from "./Admin_SideBar";
import { Outlet } from "react-router-dom";

const Admin_Main = () => {
  return (
    <div className=" h-full md:h-screen pt-[4rem] md:pt-[6.2rem]  md:flex ">
      <Admin_SideBar className="" />
      <div className="md:ml-[25%] lg:ml-[20%] xl:ml-[15%] w-full     border-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin_Main;
