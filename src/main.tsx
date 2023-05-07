import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusPage from "./pages/BusPage";
import LandingPage from "./pages/LandingPage";
import BusPage2 from "./pages/BusPage2";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";

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
        path: "/signup",
        element: <SignUp />,
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
