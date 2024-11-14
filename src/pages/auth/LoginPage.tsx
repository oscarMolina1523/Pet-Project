import LoginFormComponent from "@/components/petProject/login/LoginForm";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="relative flex flex-row ">
      <div className="static w-1/2 h-screen flex flex-col items-start justify-center bg-surface-neutral overflow-hidden">
        <img className="static h-full object-cover" src="src\assets\petEffect.svg" alt="pet-effect" />
        <div className="flex flex-row w-1/2 absolute items-center justify-center">
          <div className="absolute rounded-full bg-surface-neutral w-[15rem] h-[15rem] py-4 px-4">
            <img className="object-contain h-full w-full " src="src\assets\pet.png" alt="pet-image" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 static items-start justify-center">
       <LoginFormComponent/>
      </div>
    </div>
  );
}

export default LoginPage;