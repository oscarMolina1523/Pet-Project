import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const LoginFormComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-2/3">
      <div className="flex flex-row h-[2.5rem] w-full gap-4">
        <div className="bg-custom-orange-3 w-[0.5rem] h-full"></div>
        <Label className="text-gray font-bold tracking-wide text-[1.5rem]">BIENVENIDO</Label>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <Input className="h-[3rem] opacity-75 shadow-xl" placeholder="EMAIL"/>
        <Input className="h-[3rem] opacity-75 shadow-xl" placeholder="CONTRASEÑA"/>
      </div>
      <div className="flex flex-row items-end justify-end w-full">
        <Label className="text-gray text-opacity-85">¿Olvidaste tu contraseña?</Label>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <Button className="h-[3.5rem] font-semibold tracking-wide rounded-full px-8 bg-sky-blue text-surface-neutral hover:border hover:border-sky-blue hover:text-sky-blue hover:bg-surface-neutral">INICIAR SESIÓN</Button>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Label className="text-gray text-opacity-75">AÚN NO TENGO UNA CUENTA</Label>
        <Label className="text-dark-sky-blue">REGISTRARSE</Label>
      </div>
    </div>
  );
}

export default LoginFormComponent;