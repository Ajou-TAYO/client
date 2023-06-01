import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BusPage from "./pages/BusPage";
import LandingPage from "./pages/LandingPage";
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
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </QueryClientProvider>
    </React.StrictMode>,
);
