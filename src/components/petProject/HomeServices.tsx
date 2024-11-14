import { ArrowRight } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
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
        <div className="flex flex-col w-1/2 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 px-4 py-4">
            <Card className="flex flex-col gap-6 items-center py-4">
              <img className="h-2/4" src="src\assets\dogWalking.png" alt="dog-walking"/>
              <Label className="text-gray tracking-wide">Dog Walking</Label>
            </Card>
            <Card className="flex flex-col gap-6 items-center py-4">
              <img className="h-2/4" src="src\assets\petSitting.svg" alt="pet-sitting"/>
              <Label className="text-gray tracking-wide">Pet Sitting</Label>
            </Card>
            <Card className="flex flex-col gap-6 items-center py-4">
              <img className="h-2/4" src="src\assets\overnightCare.svg" alt="overnight-care"/>
              <Label className="text-gray tracking-wide">Overnight Care</Label>
            </Card>
            <Card className="flex flex-col gap-6 items-center py-4">
              <img className="h-2/4"  src="src\assets\dogPaw.svg" alt="dog-paw"/>
              <Label className="text-gray tracking-wide">Other Services</Label>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServiceComponent;