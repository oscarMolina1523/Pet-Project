import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const FooterComponent: React.FC = () => {
  return (
    <div className="w-full h-[34rem] overflow-hidden relative flex flex-col items-center justify-end mt-auto bg-sky">
      <img className="static object-cover object-bottom w-full h-full" src="src\assets\orange-footer.svg" />
      <div className="flex flex-row gap-4 px-4 w-full absolute items-end justify-center h-full py-6 ">
        <div className="flex flex-col w-1/5 gap-4">
          <Label className="text-yellow text-left text-[1.2rem] font-semibold tracking-wide">About</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Locations</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Franchise With Us</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Partners</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">About Us</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Make Fetch Happen!</Label>
        </div>
        <div className="flex flex-col w-1/5 gap-4">
          <Label className="text-yellow text-left text-[1.2rem] font-semibold tracking-wide">Resources</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Reviews</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Pet Resource Center</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Media Fact Sheet</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Blog</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">News</Label>
        </div>
        <div className="flex flex-col w-1/5 gap-4">
          <Label className="text-yellow text-left text-[1.2rem] font-semibold tracking-wide"></Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Gift Cards</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Services</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Franchisee Login</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Terms of Use</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Privacy Policy</Label>
        </div>
        <div className="flex flex-col w-1/5 gap-4">
          <Label className="text-yellow text-left text-[1.2rem] font-semibold tracking-wide">NewsLetter</Label>
          <Label className="text-surface-neutral text-left text-[1.2rem] tracking-wide">Sign up to receive the Fetch! Family Newsletter</Label>
          <div className="relative w-full">
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

export default FooterComponent;