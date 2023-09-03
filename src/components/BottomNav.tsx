import React from "react";
import { NavLink } from "react-router-dom";
import { BiBus, BiHome, BiUser } from "react-icons/bi";

const BottomTab: React.FC = () => {
    return (
        <div className="btm-nav absolute z-100 border-t ">
            <NavLink
                to="/"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <BiHome size={22} />
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
                <BiBus size={22} />
            </NavLink>

            <NavLink
                end
                to="/ajoumap"
                className={({ isActive, isPending }) => {
                    const classNames = ["text-primary"];
                    if (isPending) classNames.push("pending");
                    if (isActive) classNames.push("active");
                    return classNames.join(" ");
                }}
            >
                <p className="text-primary font-semibold">편의시설</p>
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
                <p className="text-primary font-semibold">제휴업체</p>
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
                <BiUser size={22} />
            </NavLink>
        </div>
    );
};

export default BottomTab;
