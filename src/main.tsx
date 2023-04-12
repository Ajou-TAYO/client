import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import App from "./App";
import SignUp from "./SignUp";
import "./index.css";

const rootElement = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Profile",
        element: <Profile />,
    },
    {
        path: "/LoginForm",
        element: <LoginForm />,
    }
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        {/* <RouterProvider router = {router} /> */}
        <SignUp />
    </React.StrictMode>
);
