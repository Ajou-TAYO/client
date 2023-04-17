import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import BusMap from "./BusMap";

function BusPage() {
    return (
        <div className="h-screen w-screen">
            <BusMap />

            <div className="absolute inset-x-0 top-0 z-10 p-2">
                <div className="navbar bg-base-100 rounded-box shadow-xl">
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

            <BottomSheet
                className="bg-base-100"
                open
                blocking={false}
                expandOnContentDrag
                snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
            >
                {[...new Array(3)].map(_ => (
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
            </BottomSheet>
        </div>
    );
}

export default BusPage;
