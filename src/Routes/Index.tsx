import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import LoginFormCompoent from "../Components/LoginFormCompoent";
import SignUpPage from "../Pages/SignUpPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/sign-up",
      element: <SignUpPage/>,
    },
  ]);