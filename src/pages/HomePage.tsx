import HomeBodyComponent from "@/components/petProject/HomeBody";
import HomeNavbarComponent from "@/components/petProject/HomeNavbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col">
      <img className="static object-cover object-top w-full h-full opacity-75" src="src\assets\homeEffectP.svg" />
      <div className="w-full absolute">
        <HomeNavbarComponent />
      </div>
      <div className="w-full h-full absolute top-12 flex flex-col items-center justify-center">
        <HomeBodyComponent/>
      </div>
    </div>
  );
}

export default HomePage;