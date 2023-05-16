import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusPage from "./pages/BusPage";
import LandingPage from "./pages/LandingPage";
import BusPage2 from "./pages/BusPage2";
import LoginForm from "./pages/LoginForm";
import PreSignUp from "./pages/PreSignUp";
import SignUp from "./pages/SignUp";
import FindPw from "./pages/FindPw";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/bus",
        element: <BusPage />,
    },
    {
        path: "/bus2",
        element: <BusPage2 />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
    {
        path: "/presignup",
        element: <PreSignUp />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/password/find",
        element: <FindPw />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
