import React from "react";
import { Link } from "react-router-dom";
import { Label } from "../components/ui/label";

const HomeNavbarComponent: React.FC = () => {
  return (
    <div className="w-full flex flex-row h-[4rem] fixed top-0 left-0 z-50 justify-between px-12 py-2 bg-custom-orange-3">
      <div className="overflow-hidden rounded-full h-full w-auto bg-surface-neutral px-2 py-2">
        <img className="object-cover h-full" src="src\assets\pet.png" alt="logo-img" />
      </div>
      <div className="flex flex-row gap-6 text-surface-neutral h-full items-center justify-start w-1/2 px-8">
        <Link to="/home/location" className="hover:underline">Location</Link>
        <Link to="/home/blog" className="hover:underline">Blog</Link>
        <Label className="hover:underline">Services</Label>
        <Label className="hover:underline">About Us</Label>
        <Label className="hover:underline">Franchise with Us</Label>
      </div>
    </div>
  );
}

export default HomeNavbarComponent;