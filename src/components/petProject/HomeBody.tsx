import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const HomeBodyComponent: React.FC = () => {
  return (
    <div className="flex flex-row w-4/5 h-full items-center justify-center gap-10">
      <div className="relative w-2/3 h-full flex flex-col items-center justify-center gap-6 px-10">
        <div className="text-surface-neutral text-[2rem] font-semibold w-full text-left">
          <Label className="text-surface-neutral text-[3.5rem] font-semibold tracking-wide">We Get Pet Care!</Label>
        </div>
        <div className="text-surface-neutral text-left font-semibold w-full">
          <Label className="text-surface-neutral tracking-wide">For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!</Label>
        </div>
        <div className="flex flex-row gap-6 items-center justify-start w-full">
          <Button
            className="font-semibold h-[3rem] tracking-wide rounded-full px-6 bg-sky-blue text-surface-neutral hover:border hover:border-sky-blue hover:text-sky-blue hover:bg-surface-neutral"
          >Schedule Service</Button>
          <Label className="text-surface-neutral">Or Call 866.338.2463</Label>
        </div>
      </div>
      <div className="relative w-1/2 h-full flex items-center justify-center">
        <div className="relative bg-custom-orange-1 rounded-full w-[19rem] h-[19rem] flex items-center justify-center">
          <img
            className="absolute object-cover transform top-[-31%] rounded-full"
            src="src/assets/homePetPresentation.png"
            alt="home-pet-presentation"
            style={{ clipPath: 'circle(50% at 50% 37% )' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBodyComponent;
