import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const BottomTab: React.FC = () => {
    const [activePage, setActivePage] = useState("home");

    const handlePageChange = page => {
        setActivePage(page);
        window.location.href = page;
    };

    return (
        <div className="btm-nav absolute">
            <NavLink
                to="/"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            </NavLink>

            <NavLink
                end
                to="/bus"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <p className="text-primary font-semibold">bus</p>
            </NavLink>

            <NavLink
                end
                to="/bus2"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <p className="text-primary font-semibold">route</p>
            </NavLink>

            <NavLink
                to="/alliance"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <p className="text-primary font-semibold">alliance</p>
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <div className="w-10 rounded-full">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" />
                </div>
            </NavLink>
        </div>
    );
};

export default BottomTab;
