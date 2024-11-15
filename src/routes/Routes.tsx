import BlogLetter from "@/components/petProject/home/letters/BlogLetter";
import LocationLetter from "@/components/petProject/home/letters/LocationLetter";
import MainLayoutComponent from "@/layouts/MainLayout";
import LoginPage from "@/pages/auth/LoginPage";
import ErrorPage from "@/pages/error/ErrorPage";
import HomePage from "@/pages/home/HomePage";
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
        element: <HomePage />,
        children: [
          {
            path: "location",
            element: <LocationLetter /> 
          },
          {
            path: "blog",
            element: <BlogLetter /> 
          },
        ],
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