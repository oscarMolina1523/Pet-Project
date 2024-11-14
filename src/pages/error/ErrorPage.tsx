import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-4">
      <div className="flex flex-col items overflow-hidden w-[12rem] h-[12rem] rounded-b-full px-2 py-2 bg-surface-neutral">
        <img className="object-cover" src="src\assets\pet.png" alt="logo-img" />
      </div>
      <Label className="text-[6rem] tracking-wide font-bold">404</Label>
      <Label className="text-[1.5rem] tracking-wide font-bold">Oops, This Page Not Found</Label>
      <Button asChild className="font-semibold h-[3rem] tracking-wide rounded-full px-6 bg-sky-blue text-surface-neutral hover:border hover:border-sky-blue hover:text-sky-blue hover:bg-surface-neutral"
      ><Link to="/home">Return Home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;