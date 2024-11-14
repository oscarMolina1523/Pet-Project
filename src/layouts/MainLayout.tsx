import FooterComponent from "@/shared/Footer";
import HomeNavbarComponent from "@/shared/HomeNavbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayoutComponent: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col">
      <HomeNavbarComponent/>
      <Outlet/>
      <FooterComponent/>
    </div>
  );
}
export default MainLayoutComponent;