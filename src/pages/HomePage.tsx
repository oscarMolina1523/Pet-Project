import HomePresentationComponent from "@/components/petProject/HomePresentation";
import HomeServiceComponent from "@/components/petProject/HomeServices";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
    <HomePresentationComponent/>
    <HomeServiceComponent/>
    </>
  );
}

export default HomePage;