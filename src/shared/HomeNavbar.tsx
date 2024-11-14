import React from "react";
import { Label } from "../components/ui/label";

const HomeNavbarComponent: React.FC = () => {
  return (
    <div className="w-full flex flex-row h-[3rem] mt-2 justify-between px-12">
      <div className="overflow-hidden rounded-full h-full w-auto bg-surface-neutral px-2 py-2">
        <img className="object-cover h-full" src="src\assets\pet.png" alt="logo-img" />
      </div>
      <div className="flex flex-row gap-6 text-surface-neutral h-full items-center justify-start w-1/2 px-8">
        <Label className="hover:underline">Location</Label>
        <Label>Blog</Label>
        <Label>Services</Label>
        <Label>About Us</Label>
        <Label>Franchise with Us</Label>
      </div>
    </div>
  );
}

export default HomeNavbarComponent;