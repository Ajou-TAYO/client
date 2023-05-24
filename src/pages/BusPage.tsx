import { BottomSheet } from "react-spring-bottom-sheet";
import { useEffect, useState } from "react";
import "react-spring-bottom-sheet/dist/style.css";
import BusMap from "./BusMap";
import BottomNav from "../components/BottomNav";
import axios from "axios";

function BusPage() {
  const [boardContent, setBoardContent] = useState("");
  useEffect(() => {
    // Function to fetch the board content
    const getBoard = async () => {
      try {
        const response = await axios.get("http://localhost:8080/bus/boards", {});
        const content = response.data.data[0].content;
        setBoardContent(content); // Update the state with the fetched content
      } catch (error) {
        console.error(error);
        setBoardContent(""); // Set an empty string if there's an error
      }
    };

    getBoard(); // Call the function to fetch the board content
  }, []);

    return (
        <div className="h-screen w-screen">
            <BusMap />

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
                <div className="badge badge-error gap-2">
                    <span className="text-xs">
                        <span className="font-bold mr-2">[공지]</span>
                      {boardContent}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-4 w-4 stroke-current"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            
            {/* <BottomSheet
                className="bg-base-100"
                open
                blocking={false}
                expandOnContentDrag
                snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
            >
                <div className="flex flex-col gap-4 px-4">
                    <h2 className="font-bold">운행정보 </h2>
                    {[...new Array(2)].map(_ => (
                        <div className="flex flex-col rounded-2xl bg-white p-5 shadow">
                            <header className="mb-4 font-bold">아주대 - 수원역</header>

                            <ul className="divide-y pl-4">
                                <li className="flex flex-row items-center justify-between text-sm">
                                    <div className="font-bold">아주대행</div>

                                    <div className="flex flex-col text-red-500">
                                        <div>27분 뒤 출발</div>
                                        <div>47분 뒤 출발</div>
                                    </div>
                                </li>

                                <li className="flex flex-row items-center justify-between text-sm">
                                    <div className="font-bold">수원역행</div>

                                    <div className="flex flex-col text-red-500">
                                        <div>15분 뒤 출발</div>
                                        <div>47분 뒤 출발</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </BottomSheet> */}
            <BottomNav />
        </div>
    );
}

export default BusPage;
