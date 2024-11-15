import HomeMotivationalMessageComponent from "@/components/petProject/home/HomeMotivationalMessage";
import HomePresentationComponent from "@/components/petProject/home/HomePresentation";
import HomeProcessComponent from "@/components/petProject/home/HomeProcess";
import HomeServiceComponent from "@/components/petProject/home/HomeServices";
import HomeTestimonialsComponent from "@/components/petProject/home/HomeTestimonials";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden relative flex flex-col bg-sky">
      <img className="static object-cover object-top w-full mt-2 h-1/4 " src="src\assets\homeEffectP.svg" />
      <img className="static object-cover w-full " src="src\assets\homeBlueServices.svg" />
      <img className="static object-cover  w-full " src="src\assets\yellow-circle.svg" />
      <div className="flex flex-col w-full h-full absolute gap-10">
        <div className="flex flex-col h-1/5 mb-6">
          <HomePresentationComponent />
        </div>
        <div className="flex flex-col h-1/5">
          <HomeServiceComponent />
        </div>
        <div className="h-[7rem]"></div>
        <div className="flex flex-col h-1/5">
          <HomeTestimonialsComponent />
        </div>
        <div className="flex flex-col h-1/5">
          <HomeProcessComponent />
        </div>
        <div className="h-1/5">
          <HomeMotivationalMessageComponent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;