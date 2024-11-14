import HomeMotivationalMessageComponent from "@/components/petProject/home/HomeMotivationalMessage";
import HomePresentationComponent from "@/components/petProject/home/HomePresentation";
import HomeProcessComponent from "@/components/petProject/home/HomeProcess";
import HomeServiceComponent from "@/components/petProject/home/HomeServices";
import HomeTestimonialsComponent from "@/components/petProject/home/HomeTestimonials";
import FooterComponent from "@/shared/Footer";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <HomePresentationComponent />
      <HomeServiceComponent />
      <HomeTestimonialsComponent />
      <HomeProcessComponent />
      <HomeMotivationalMessageComponent />
      <FooterComponent/>
    </>
  );
}

export default HomePage;