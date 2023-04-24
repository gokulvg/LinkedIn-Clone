import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import LoginFormCompoent from "../Components/LoginFormCompoent";
import SignUpPage from "../Pages/SignUpPage";
import HomePage from "../Pages/HomePage";
import HomeLayout from "../Layout/HomeLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<LoginPage/>,
    },   
    {
      path: "/sign-up",
      element: <SignUpPage/>,
    },
    {
      path: "/home",
      element: <HomeLayout/>,
    },
  ]);