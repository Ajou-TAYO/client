import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import reactLogo from "./assets/react.svg";

function App() {
    return (
        <div className="container h-screen w-screen">
            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                className="h-screen w-screen"
                onCreate={map => map.relayout()}
            >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{ color: "#000" }}>Hello World!</div>
                </MapMarker>
            </Map>

            <div
                className="absolute inset-x-0 top-0 z-10 m-5
            flex flex-row items-center gap-5 
            rounded-2xl bg-white p-5 shadow-2xl"
            >
                <button className="space-y-2">
                    <span className="block h-1 w-8 bg-gray-600" />
                    <span className="block h-1 w-8 bg-gray-600" />
                    <span className="block h-1 w-8 bg-gray-600" />
                </button>
            </div>

            <div
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

            <div className="absolute inset-x-0 bottom-0 z-10 m-5 h-20 rounded-2xl bg-white shadow-2xl" />
        </div>
    );
}

export default App;
