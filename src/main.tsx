import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BusPage from "./pages/bus/BusOverlay";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/profile/LoginForm";
import PreSignUp from "./pages/profile/PreSignUp";
import SignUp from "./pages/profile/SignUp";
import FindPw from "./pages/profile/FindPw";
import AllianceMap from "./pages/partnership/AllianceMap";
import Profile from "./pages/profile/Profile";
import ChangeNick from "./pages/profile/ChangeNick";
import ChangePw from "./pages/profile/ChangePw";
import Policy from "./pages/profile/Policy";
import Layout from "./components/Layout";
import BusBoardDetail from "./pages/bus/BusBoardDetail";
import SchoolMap from "./pages/campus/School";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: "/bus",
                element: <BusPage />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
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
    {
        path: "/alliance",
        element: <AllianceMap />,
    },
    {
        path: "/nickname/reset",
        element: <ChangeNick />,
    },
    {
        path: "/password/reset",
        element: <ChangePw />,
    },
    {
        path: "/policy",
        element: <Policy />,
    },
    {
        path: "/busboarddetail",
        element: <BusBoardDetail />,
    },
    {
        path: "/ajoumap",
        element: <SchoolMap />,
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    </React.StrictMode>,
);
