import { loginService } from "@/pages/auth/services/AuthService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const emailIsValid = /\S+@\S+\.\S+/.test(email);
    const passwordIsValid = password.length >= 6;
    setIsButtonEnabled(emailIsValid && passwordIsValid);
  }, [email, password]);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await loginService({ email, password });
      localStorage.setItem("authToken", response.token);
      setError(false);
      setSuccess(true);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch {
      setError(true);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    isButtonEnabled,
    isLoading,
    handleLogin,
  };
};
