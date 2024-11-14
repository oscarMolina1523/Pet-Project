import { useLoginHook } from "@/pages/auth/hooks/AuthLoginHook";
import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import LoadingComponent from "../info/LoadingComponent";
import SuccessfulComponent from "../info/SuccessfulComponent";

const LoginFormComponent: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    isButtonEnabled,
    isLoading,
    handleLogin,
  } = useLoginHook();

  return (
    <div className="flex flex-col gap-6 items-center w-2/3">
      {isLoading && <LoadingComponent />}
      {success && <SuccessfulComponent show={success} />}
      <div className="flex flex-row h-[2.5rem] w-full gap-4">
        <div className="bg-custom-orange-3 w-[0.5rem] h-full"></div>
        <Label className="text-gray font-bold tracking-wide text-[1.5rem]">BIENVENIDO</Label>
      </div>
      {error && <p className="text-red">*Error en el inicio de sesión. Verifica tus credenciales.</p>}
      <div className="flex flex-col gap-3 w-full">
        <Input className="h-[3rem] opacity-75 shadow-xl"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input className="h-[3rem] opacity-75 shadow-xl"
          placeholder="CONTRASEÑA"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-end justify-end w-full">
        <Label className="text-gray text-opacity-85">¿Olvidaste tu contraseña?</Label>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <Button
          onClick={handleLogin}
          disabled={!isButtonEnabled}
          className={`h-[3.5rem] font-semibold tracking-wide rounded-full px-8 bg-sky-blue text-surface-neutral ${isButtonEnabled ? "hover:border hover:border-sky-blue hover:text-sky-blue hover:bg-surface-neutral" : "opacity-60 cursor-not-allowed"
            }`}
        >
          INICIAR SESIÓN
        </Button>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Label className="text-gray text-opacity-75">AÚN NO TENGO UNA CUENTA</Label>
        <Label className="text-dark-sky-blue">REGISTRARSE</Label>
      </div>
    </div>
  );
}

export default LoginFormComponent;