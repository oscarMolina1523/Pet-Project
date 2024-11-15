import React from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Label } from "../../ui/label";

const HomeMotivationalMessageComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full relative items-center justify-center bg-stransparent">
      <div className="w-3/5 h-full">
        <Card className="flex flex-row w-full h-full bg-dark-blue items-center justify-center">
          <div className="flex flex-col w-1/3 items-center justify-center">
            <div className="relative bg-custom-orange-1 rounded-full w-[10rem] h-[10rem] flex items-center justify-center">
              <img
                className="absolute object-cover transform top-[-30%] rounded-b-full"
                src="src/assets/little-dog.png"
                alt="home-pet-message"
                style={{ clipPath: 'inset(100 100 25% 50 round 50%)' }}
              />
            </div>
          </div>
          <div className="flex flex-col w-2/3 items-start justify-center py-6">
            <div className="flex flex-col gap-4 items-start justify-center w-4/5">
              <Label className="text-yellow font-semibold tracking-wide text-[2rem]">Make Fetch! Happen</Label>
              <Label className="text-surface-neutral tracking-wide leading-[1.2rem] text-justify">If you love pets and want exciting work,
                apply to be a Fetch! Pet Care Provider! We train every team member
                and provide ongoing support to help you get the most from your experience.</Label>
              <Button className="text-custom-orange-4 font-semibold tracking-wide bg-surface-neutral rounded-full hover:text-surface-neutral hover:bg-custom-orange-4">Join Now</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default HomeMotivationalMessageComponent;