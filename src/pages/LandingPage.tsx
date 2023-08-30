import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./land.css";

export default function LandingPage() {

    return (
        <div className="flex h-screen w-screen flex-col">
            {/* Navbar */}
            <nav className="inset-x-0 top-0">
                <div className="navbar bg-[#4E5FFF] shadow-xl">
                    <div className="flex-1 justify-center">
                        <a className="px-3 text-2xl font-bold normal-case text-white">Ajou-life</a>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="flex flex-col w-full h-full justify-center my-2">
                <div className="flex flex-row gap-1 w-5/6 h-2/5 m-auto">
                    <div className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1">
                        <div className="text-white font-bold text-xl align-middle text-center m-10">
                            <p>Team</p>
                        </div>
                    </div>
                    <div className="flex-1 border-[#b1d5ff] border-2 container rounded-lg my-2 mx-1 text-center">
                        <div className="m-10 text-lg font-semibold">
                            <p>Ajou-life</p>
                            <p>Notion</p>
                        </div>
                        
                    </div>
                </div>

                <div className="flex w-5/6 h-2/5 m-auto">
                    <div className="flex flex-col border-[#b1d5ff] border-2 container rounded-lg my-2 mx-1 text-center">
                        <div className="m-3 text-2xl font-semibold">
                            <p>Notice</p>
                        </div>
                        <div className="h-1 w-4/5 mx-auto bg-[#b1d5ff]"></div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 w-5/6 h-1/5 m-auto">
                    <Link to="https://instagram.com/ajou.life_?igshid=MjEwN2IyYWYwYw==" className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 pt-10 text-center">
                        <div className="text-white font-bold text-xl align-middle items-center">
                            <p>Insta</p>
                        </div>
                    </Link>
                    <Link to="https://www.facebook.com/ajou.life.2023?mibextid=LQQJ4d" className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 pt-10 text-center">
                        <div className="text-white font-bold text-xl align-middle items-center">
                            <p>Facebook</p>
                        </div>
                    </Link>
                    <Link to="https://instagram.com/ajou.life_?igshid=MjEwN2IyYWYwYw==" className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 pt-10 text-center">
                        <div className="text-white font-bold text-xl align-middle items-center">
                            <p>Feedback</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/*bottom bar*/}
            <nav className="inset-x-0 bottom-0">
                <div className="navbar"></div>
            </nav>
        </div>
    );
}
