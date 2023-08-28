import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./land.css";
import TopBar from "../components/TopBar";

export default function LandingPage() {
    const [value, onChange] = useState(new Date());

    let vh = 0;

    useEffect(() => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    return (
        <div className="flex h-screen w-screen flex-col">
            <TopBar />

            {/* Content */}
            <div className="w-full h-100 flex flex-col justify-center items-center">
                <div className="w-full h-72 opacity-50 bg-[url('/main.png')] bg-cover bg-no-repeat"></div>
                <div className="w-4/5 h-32 bg-[#4E5FFF]"></div>
            </div>
            <div className="w-full h-40 mt-3 border-[#B1D5FF] border-t-2 border-b-2"></div>
            <div className="w-7/8 h-40 flex justify-between items-center m-3">
                <button className="w-1/4 h-20 border-[#4E5FFF] border-2 rounded-full"></button>
                <button className="w-1/4 h-20 border-[#4E5FFF] border-2 rounded-full"></button>
                <button className="w-1/4 h-20 border-[#4E5FFF] border-2 rounded-full"></button>
            </div>
        </div>
    );
}
