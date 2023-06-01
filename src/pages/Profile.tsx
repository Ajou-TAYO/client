import { Fragment, useState } from "react";
import axios from "axios";
import BottomNav from "../components/BottomNav";

function Profile() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="h-screen w-screen">
            <div className="absolute inset-x-0 top-0 z-10 p-2">
                <div className="navbar bg-primary text-primary-content rounded-box shadow-xl">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <a className="text-xl font-bold normal-case">Ajou Life</a>
                    </div>
                    <div className="flex-none" />
                </div>
            </div>

            <div className="absolute inset-x-0 top-20 z-10 flex flex-col items-center">
                <div className="w-24 rounded-full pt-8">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" />
                </div>
                <div className="py-3 text-xl font-bold">김나영</div>
                <div className="pb-12 font-semibold">버스의 신</div>
                <div>
                    <div className="bg-indigo-500 py-3 pl-3 text-lg font-semibold text-white">계정</div>
                    <div className="border-t-2" />
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                    <button className="w-full border-b-2 py-2 pl-3 text-left">content 1</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
