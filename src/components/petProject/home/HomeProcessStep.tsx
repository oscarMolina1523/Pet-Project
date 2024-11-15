import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

const HomeProcessStep: React.FC = () => {
  return (
    <div className="w-full h-full relative flex  flex-col bg-sky">
      <img className="static object-cover object-right w-full h-full" src="src\assets\circle-orange.svg" />
      <div className="flex flex-row w-3/4 gap-8 h-full absolute bg-transparent">
        <div className="w-1/2 flex flex-col justify-between h-full">
          <Card className="flex flex-col gap-6 items-center py-4 w-2/3">
            <img className="h-2/4" src="src\assets\calendar.svg" alt="calendar" />
            <Label className="text-gray tracking-wide">Reserve</Label>
          </Card>
          <Card className="flex flex-col gap-6 items-center py-4  w-2/3">
            <img className="h-2/4" src="src\assets\happyPet.svg" alt="happy-pet" />
            <Label className="text-gray tracking-wide">Relax</Label>
          </Card>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center h-full">
          <Card className="flex flex-col gap-6 items-center py-4 w-2/3">
            <img className="h-2/4" src="src\assets\match.svg" alt="match" />
            <Label className="text-gray tracking-wide">Match</Label>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomeProcessStep;