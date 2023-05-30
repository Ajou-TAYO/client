import { Map, MapMarker } from "react-kakao-maps-sdk";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BottomNav from "../components/BottomNav";

async function getData() {
    // Fetch data from an API or any other source
    const response = await axios.get("http://202.30.29.204:8080/partnerships", {});
    return response.data.data;
}

export default function AllianceMap() {
    const [Open, setOpen] = useState(new Array(107).fill(false));
    const [Show, setShow] = useState([true, true, true, true]);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [filOn, setFilOn] = useState(true);
    const [data, setData] = useState(new Array(44).fill(0));

    useEffect(() => {
        getData()
            .then(d => {
                setData(d);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // console.log(data);

    function filter(index: number) {
        const newFilterState = [...Show];
        if (Show[index]) {
            newFilterState[index] = false;
        } else {
            newFilterState[index] = true;
        }
        setShow([...newFilterState]);
    }

    const handleToggle1 = event => {
        // 카페&디저트
        filter(0);
        setIsClicked1(!isClicked1);
    };

    const handleToggle2 = event => {
        // 식당
        filter(1);
        setIsClicked2(!isClicked2);
    };

    const handleToggle3 = event => {
        // 편의시설
        filter(2);
        setIsClicked3(!isClicked3);
    };

    const handleToggle4 = event => {
        // 주점
        filter(3);
        setIsClicked4(!isClicked4);
    };

    function onDismiss(markerindex) {
        const newBottomSheetStates = [...Open];
        newBottomSheetStates[markerindex] = false;
        setOpen(newBottomSheetStates);
        setFilOn(true);
    }

    function check_filter_is(str: string) {
        if (str === "CAFE" || str === "ETC") {
            return Show[0];
        }
        if (str === "RESTAURANT") {
            return Show[1];
        }
        if (str === "PUB") {
            return Show[3];
        }
        return Show[2];
    }

    function check_filter_type(str: string) {
        if (str === "CAFE" || str === "ETC") {
            return 0;
        }
        if (str === "RESTAURANT") {
            return 1;
        }
        if (str === "PUB") {
            return 3;
        }
        return 2;
    }

    const markerImg = ["/red_dot.png", "/blue_dot.png", "/yellow_dot.png", "/green_dot.png"];

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

            {filOn ? (
                <div className="fixed left-5 top-24 z-10 box-border flex flex-col border-2 border-indigo-400 bg-slate-100">
                    <button className="flex flex-row p-1" onClick={handleToggle1}>
                        <div className="mx-2 mt-1 h-4 w-4 rounded-full bg-red-500" />
                        <p className={`mr-2 ${!isClicked1 ? "font-bold" : ""}`}>카페 & 디저트</p>
                    </button>
                    <button className="flex flex-row p-1" onClick={handleToggle2}>
                        <div className="mx-2 mt-1 h-4 w-4 rounded-full bg-blue-500" />
                        <p className={`mr-2 ${!isClicked2 ? "font-bold" : ""}`}>식당</p>
                    </button>
                    <button className="flex flex-row p-1" onClick={handleToggle3}>
                        <div className="mx-2 mt-1 h-4 w-4 rounded-full bg-yellow-500" />
                        <p className={`mr-2 ${!isClicked3 ? "font-bold" : ""}`}>편의시설</p>
                    </button>
                    <button className="flex flex-row p-1" onClick={handleToggle4}>
                        <div className="mx-2 mt-1 h-4 w-4 rounded-full bg-green-500" />
                        <p className={`mr-2 ${!isClicked4 ? "font-bold" : ""}`}>주점</p>
                    </button>
                </div>
            ) : null}

            <Map
                center={{ lat: 37.27771738352343, lng: 127.04382834467262 }}
                level={3}
                className="z-0 h-screen w-screen"
            >
                {data.map(
                    content =>
                        check_filter_is(content.category) && (
                            <MapMarker
                                key={content.id}
                                position={{ lat: content.lat, lng: content.lng }}
                                clickable
                                onClick={() => {
                                    const newBottomSheetStates = [...Open];
                                    newBottomSheetStates[content.id] = true;
                                    setOpen(newBottomSheetStates);
                                    setFilOn(false);
                                }}
                                image={{
                                    src: markerImg[check_filter_type(content.category)],
                                    size: {
                                        width: 20,
                                        height: 20,
                                    },
                                    options: {
                                        offset: {
                                            x: 5,
                                            y: 0,
                                        },
                                    },
                                }}
                            />
                        ),
                )}
            </Map>
            {data.map(content => (
                <BottomSheet
                    key={content.id}
                    open={Open[content.id]}
                    onDismiss={() => onDismiss(content.id)}
                    style={{ zIndex: 30 }}
                    defaultSnap={({ maxHeight }) => maxHeight / 4}
                    snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, maxHeight / 4, maxHeight * 0.6]}
                >
                    <p className="m-8 text-center text-4xl">{content.name}</p>
                    <img src={`/${content.id}.jpg`} className="object-contain p-12" alt="해당 점포 이미지" />
                    <p className="text-center text-2xl">{content.detail}</p>
                </BottomSheet>
            ))}
            <BottomNav />
        </div>
    );
}
