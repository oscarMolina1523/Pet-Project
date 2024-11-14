import HomePresentationComponent from "@/components/petProject/HomePresentation";
import HomeServiceComponent from "@/components/petProject/HomeServices";
import HomeTestimonialsComponent from "@/components/petProject/HomeTestimonials";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
    <HomePresentationComponent/>
    <HomeServiceComponent/>
    <HomeTestimonialsComponent/>
    </>
  );
}

export default HomePage;