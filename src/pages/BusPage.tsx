import { BottomSheet } from "react-spring-bottom-sheet";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "react-spring-bottom-sheet/dist/style.css";
import axios from "axios";
import BusMap from "./BusMap";
import BottomNav from "../components/BottomNav";
import BusPage2 from "./BusPage2";
import "./land.css";

function currentTimer() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    return hours * 60 + min;
}

function useInterval(callback: unknown, delay: number) {
    useEffect(() => {
        const intervalId = setInterval(callback, delay);

        return () => {
            clearInterval(intervalId);
        };
    }, [callback, delay]);
}

export default function BusPage() {
    const [boardContent, setBoardContent] = useState("");
    const fromGawngTime = [510, 530, 570, 605, 615, 705, 800, 885, 975, 1050]; // max 9
    const toGawngTime = [500, 520, 560, 595, 605, 695, 790, 875, 965, 1040, 1085]; // max 10
    const fromSuwonTime = [510, 590, 680]; // max 2
    const toSuwonTime = [910, 1000, 1085];
    const [nowTime, setNow] = useState(currentTimer());
    const [queue, setQueue] = useState(new Array(8).fill(""));
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    function findTimeZone(now: number) {
        // from g1 g2 to g1 g2 from s1 s2 to s1 s2
        let gf: number;
        let sf: number;
        let gt: number;
        let st: number;
        for (let i = 0; i < fromGawngTime.length; i++) {
            if (fromGawngTime[i] - now > 0) {
                gf = i;
                break;
            }
        }
        for (let j = 0; j < fromSuwonTime.length; j++) {
            if (fromSuwonTime[j] - now > 0) {
                sf = j;
                break;
            }
        }
        for (let k = 0; k < toGawngTime.length; k++) {
            if (toGawngTime[k] - now > 0) {
                gt = k;
                break;
            }
        }
        for (let l = 0; l < toSuwonTime.length; l++) {
            if (toSuwonTime[l] - now > 0) {
                st = l;
                break;
            }
        }

        return [
            fromGawngTime[gf] ? fromGawngTime[gf] - nowTime : -1,
            fromGawngTime[gf + 1] ? fromGawngTime[gf + 1] - nowTime : -1,
            toGawngTime[gt] ? toGawngTime[gt] - nowTime : -1,
            toGawngTime[gt + 1] ? toGawngTime[gt + 1] - nowTime : -1,
            fromSuwonTime[sf] ? fromSuwonTime[sf] - nowTime : -1,
            fromSuwonTime[sf + 1] ? fromSuwonTime[sf + 1] - nowTime : -1,
            toSuwonTime[st] ? toSuwonTime[st] - nowTime : -1,
            toSuwonTime[st + 1] ? toSuwonTime[st + 1] - nowTime : -1,
        ];
    }

    function convertQueue(numQueue: number[]) {
        const convertString = (min: number) => {
            if (min === -1) {
                return "운행 종료";
            }
            return Math.trunc(min / 60)
                ? `${String(Math.trunc(min / 60))} 시간 ${String(min % 60).padStart(2, "0")} 분 뒤 출발`
                : `${String(min % 60)} 분 뒤 출발`;
        };
        return [
            convertString(numQueue[0]),
            convertString(numQueue[1]),
            convertString(numQueue[2]),
            convertString(numQueue[3]),
            convertString(numQueue[4]),
            convertString(numQueue[5]),
            convertString(numQueue[6]),
            convertString(numQueue[7]),
        ];
    }

    useEffect(() => {
        const getBoard = async () => {
            try {
                const response = await axios.get("http://202.30.29.204:8080/bus/boards", {});
                const { content } = response.data.data[0];
                setBoardContent(content);
            } catch (error) {
                console.error(error);
                setBoardContent("");
            }
        };
        setQueue(convertQueue(findTimeZone(nowTime)));
        getBoard();
    }, []);

    useInterval(() => {
        setNow(currentTimer());
        setQueue(convertQueue(findTimeZone(nowTime)));
    }, 30000);

    return (
        <div className="h-screen w-screen">
            <BottomNav />
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
                        <span className="mr-2 font-bold">[공지]</span>
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

            <div className="fixed right-2 top-20 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                    <button type="button" onClick={setModal}>
                        <img src="/rent_bus.png" className="h-3/4 w-3/4" style={{ transform: "translate(15%, 0%)" }} />
                    </button>
                    <ReactModal
                        isOpen={modalIsOpen}
                        onRequestClose={setModal}
                        contentLabel="BusPage2 Modal"
                        style={{
                            content: {
                                width: "500px", // Set the desired width
                                height: "700px", // Set the desired height
                                margin: "auto", // Center the modal horizontally
                            },
                        }}
                    >
                        {modalIsOpen && <BusPage2 closeModal={setModal} />}
                    </ReactModal>
                </div>
            </div>

            {!modalIsOpen && (
                <BottomSheet
                    className="bg-base-100"
                    open
                    blocking={false}
                    expandOnContentDrag
                    snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
                >
                    <div className="flex flex-col gap-4 px-4">
                        <h2 className="font-bold">운행정보 </h2>
                        <div className="flex flex-col rounded-2xl bg-white p-5 shadow">
                            <header className="mb-4 font-bold">아주대 - 광교중앙역</header>

                            <ul className="divide-y pl-4">
                                <li className="flex flex-row items-center justify-between text-sm">
                                    <div className="font-bold">아주대행</div>

                                    <div className="flex flex-col text-red-500">
                                        <div>{queue[0]}</div>
                                        <div>{queue[1]}</div>
                                    </div>
                                </li>

                                <li className="flex flex-row items-center justify-between text-sm">
                                    <div className="font-bold">광교중앙역행</div>

                                    <div className="flex flex-col text-red-500">
                                        <div>{queue[2]}</div>
                                        <div>{queue[3]}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col rounded-2xl bg-white p-5 shadow">
                            <header className="mb-4 font-bold">아주대 - 수원역</header>

                            <ul className="divide-y pl-4">
                                <li className="flex flex-row items-center justify-between text-sm">
                                    <div className="font-bold">아주대행</div>

                                    <div className="flex flex-col text-red-500">
                                        <div>{queue[4]}</div>
                                        <div>{queue[5]}</div>
                                    </div>
                                </li>

                                <li className="flex flex-row items-center justify-between text-sm">
                                    <div className="font-bold">수원역행</div>

                                    <div className="flex flex-col text-red-500">
                                        <div>{queue[6]}</div>
                                        <div>{queue[7]}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </BottomSheet>
            )}
        </div>
    );
}
