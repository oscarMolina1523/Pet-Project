import React from "react";
import HomeBodyComponent from "./HomeBody";
import HomeNavbarComponent from "./HomeNavbar";

const HomePresentationComponent: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col">
      <img className="static object-cover object-top w-full h-full" src="src\assets\homeEffectP.svg" />
      <div className="w-full absolute">
        <HomeNavbarComponent />
      </div>
      <div className="w-full h-full absolute top-12 flex flex-col items-start justify-center">
        <HomeBodyComponent />
      </div>
    </div>
  );
}

export default HomePresentationComponent;