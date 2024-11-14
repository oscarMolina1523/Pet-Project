import MainLayoutComponent from "@/layouts/MainLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/auth/LoginPage";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutComponent />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" /> 
      },
      {
        path: "/home",
        element: <HomePage />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path:"*",
    element: <ErrorPage/>
  },
]);

export default router;