import { Fragment, useState } from "react";
import axios from "axios";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Favorite, Settings } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import Profile from "./Profile";

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    return (
        <div>
            <div className="upperBar">
                <div className="logoImage"></div>
                <div className="logo">Ajou-TAYO</div>
                <button className="profile" onClick={() => navigate("/Profile")}></button>
            </div>
            <div className="notice">
                
            </div>
            <div className="calender">

            </div>
            <BottomNavigation className="bottomBar" value={value} onChange={handleChange}>
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                <BottomNavigationAction label="Settings" icon={<Settings />} />
            </BottomNavigation>
        </div>
    );
}

export default App;
{/* <div className="container h-screen w-screen">
            <div className="hdStyle">
                <div className="logo">Ajou-TAYO</div>
                <div className="profile"></div>
            </div>
            <div>
                <div className="notice"></div>
            </div> */}
            {/* <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                className="h-screen w-screen"
                onCreate={map => map.relayout()}
            >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{ color: "#000" }}>Hello World!</div>
                </MapMarker>
            </Map> */}

            {/* <div
                className="absolute inset-x-0 top-0 z-10 m-5
            flex flex-row items-center gap-5 
            rounded-2xl bg-white p-5 shadow-2xl"
            >
                <button className="space-y-2" onClick={() => setIsOpen(true)}>
                    <span className="block h-1 w-8 bg-gray-600" />
                    <span className="block h-1 w-8 bg-gray-600" />
                    <span className="block h-1 w-8 bg-gray-600" />
                </button>

                <Transition show={isOpen} as={Fragment}>
                    <Dialog onClose={() => setIsOpen(false)} className="relative z-50"> */}
                        {/* The backdrop, rendered as a fixed sibling to the panel container */}
                        {/* <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/50" />
                        </Transition.Child> */}

                        {/* <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 -translate-x-full"
                        > */}
                            {/* Full-screen container to center the panel */}
                            {/* <div className="fixed left-0 inset-y-0"> */}
                                {/* The actual dialog panel  */}
                                {/* <Dialog.Panel className="mx-auto h-full w-48 rounded bg-white">
                                    <Dialog.Title>손진혁</Dialog.Title>

                                    <ul className="divide-y">
                                        <li>
                                            공지사항
                                        </li>
                                        <li>
                                            공지사항
                                        </li>
                                        <li>
                                            공지사항
                                        </li>
                                        <li>
                                            공지사항
                                        </li>
                                    </ul> */}
                                    {/* ... */}
                                {/* </Dialog.Panel>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </div> */}

           {/*  <div
                className="absolute inset-x-0 bottom-0 z-10 m-5 flex
            h-80 flex-col gap-5 overflow-y-scroll
            rounded-2xl bg-gray-200 p-5 shadow-2xl"
            >
                {[...new Array(5)].map(_ => (
                    <div className="flex flex-col rounded-2xl bg-white p-5 shadow">
                        <header className="mb-4 font-bold">아주대 - 수원역</header>

                        <ul className="divide-y pl-4">
                            <li className="flex flex-row items-center justify-between text-sm">
                                <div className="font-bold">아주대행</div>

                                <div className="flex flex-col text-red-500">
                                    <div>5분 뒤 출발</div>
                                    <div>7분 뒤 출발</div>
                                </div>
                            </li>

                            <li className="flex flex-row items-center justify-between text-sm">
                                <div className="font-bold">수원역행</div>

                                <div className="flex flex-col text-red-500">
                                    <div>5분 뒤 출발</div>
                                    <div>7분 뒤 출발</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                ))}
                s
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 m-5 h-20 rounded-2xl bg-white shadow-2xl" /> */}