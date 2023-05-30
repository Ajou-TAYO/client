import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BusPage from "./pages/BusPage";
import LandingPage from "./pages/LandingPage";
import BusPage2 from "./pages/BusPage2";
import LoginForm from "./pages/LoginForm";
import PreSignUp from "./pages/PreSignUp";
import SignUp from "./pages/SignUp";
import FindPw from "./pages/FindPw";
import AllianceMap from "./pages/AllianceMap";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

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
                path: "/bus2",
                element: <BusPage2 />,
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
        path: "/profile",
        element: <Profile />,
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
);
