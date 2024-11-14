import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import HomeProcessStep from "./HomeProcessStep";

const HomeProcessComponent: React.FC = () => {
  return (
    <div className="w-full relative h-screen flex flex-col items-center justify-center bg-surface-neutral">
      <img className="static object-cover object-right w-full h-full" src="src\assets\yellow-circle.svg" />
      <div className="absolute flex flex-row w-3/4 gap-8 h-full bg-transparent">
        <div className="w-1/2 flex flex-row gap-4 relative bg-transparent">
          {/* <div className="w-1/2 h-full flex flex-col justify-around bg-transparent">
            <Card className="flex flex-col gap-6 items-center py-4 w-2/3">
              <img className="h-2/4" src="src\assets\calendar.svg" alt="calendar" />
              <Label className="text-gray tracking-wide">Reserve</Label>
            </Card>
            <Card className="flex flex-col gap-6 items-center py-4  w-2/3">
              <img className="h-2/4" src="src\assets\happyPet.svg" alt="happy-pet" />
              <Label className="text-gray tracking-wide">Relax</Label>
            </Card>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center h-full bg-transparent">
            <Card className="flex flex-col gap-6 items-center py-4 w-2/3">
              <img className="h-2/4" src="src\assets\match.svg" alt="match" />
              <Label className="text-gray tracking-wide">Match</Label>
            </Card>
          </div> */}
          <HomeProcessStep/>
        </div>
        <div className="w-1/2 flex flex-col text-left gap-4 justify-start mt-12 bg-transparent">
          <Label className="text-custom-orange-3 font-semibold tracking-wide text-[2rem]">How it Works</Label>
          <Label className="text-gray tracking-wide text-justify">Because finding a good pet sitter shouldn’t be a hassle. With Fetch! It’s as easy as…</Label>
          <Label className="text-custom-orange-3 font-semibold tracking-wide">Enter Your Location and Fetch Our Services</Label>
          <div className="relative w-1/2">
            <Input placeholder="Zip code" className="rounded-full h-[3rem] pr-12 bg-surface-neutral" />
            <div className="absolute inset-y-0 right-0 flex items-center pr-1">
              <div className="bg-custom-orange-3 p-2 rounded-full">
                <ArrowRight className="text-surface-neutral" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProcessComponent;