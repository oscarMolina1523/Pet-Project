import React from "react";
import { Outlet } from "react-router-dom";

const MainLayoutComponent: React.FC = () => {
  return (
    <div className="bg-dark-orange">
      <Outlet/>
    </div>
  );
}
export default MainLayoutComponent;