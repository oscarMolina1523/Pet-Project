import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const HomeServiceComponent: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col">
      <img className="static object-cover object-top w-full h-full" src="src\assets\homeBlueServices.svg" />
      <div className="absolute w-full h-full flex flex-row items-start px-4 py-8">
        <div className="flex flex-col w-1/2 items-center justify-start">
          <div className="w-2/4 flex flex-col text-left gap-4">
            <Label className="text-custom-orange-3 font-semibold tracking-wide text-[3rem]">Our Services</Label>
            <Label className="text-gray tracking-wide text-justify">National Brand With a Local Feel. Experience the Fetch! Difference</Label>
            <Label className="text-custom-orange-3 font-semibold tracking-wide">Enter Your Location and Fetch Our Services</Label>
            <div className="relative w-1/2">
              <Input placeholder="Zip code" className="rounded-full h-[3rem] pr-12" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <div className="bg-custom-orange-3 p-2 rounded-full">
                  <ArrowRight className="text-surface-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 bg-custom-orange-3 ">rigth</div>
      </div>
    </div>
  );
}

export default HomeServiceComponent;