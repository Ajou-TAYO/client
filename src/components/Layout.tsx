import React from "react";
import { Outlet } from "react-router-dom";
import BottomTab from "./BottomNav";

function Layout() {
    return (
        <div className="flex h-screen w-screen flex-col">
            <Outlet />
            <BottomTab />
        </div>
    );
}

export default Layout;
