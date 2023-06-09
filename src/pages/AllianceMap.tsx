import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import BottomNav from "../components/BottomNav";
import "./land.css";

async function getData() {
    // Fetch data from an API or any other source
    const response = await axios.get("http://202.30.29.204:8080/partnerships", {});
    return response.data.data;
}

const categoryType = {
    CAFE: {
        title: "카페",
        className: "bg-red-500",
    },
    RESTAURANT: {
        title: "식당",
        className: "bg-blue-500",
    },
    PUB: {
        title: "주점",
        className: "bg-green-500",
    },
    ETC: {
        title: "기타",
        className: "bg-yellow-500",
    },
};

type TCategoryKey = keyof typeof categoryType;

export default function AllianceMap() {
    const categoryKeys = Object.keys(categoryType) as unknown as TCategoryKey[];

    const [categoryFilterStatus, setCategoryFilterStatus] = useState(
        Object.fromEntries(categoryKeys.map(categoryKey => [categoryKey, true])) as unknown as {
            [key in TCategoryKey]: boolean;
        },
    );

    const [Open, setOpen] = useState(new Array(107).fill(false));
    const [partnershipDatas, setPartnershipDatas] = useState<any[]>([]);
    const [list, setList] = useState(true);
    const [center, setCenter] = useState({ lat: 37.27771738352343, lng: 127.04382834467262 });

    useEffect(() => {
        getData()
            .then(d => {
                setPartnershipDatas(d);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const filteredPartnershipDatas = useMemo(() => {
        return partnershipDatas.filter(
            partnershipData => categoryFilterStatus[partnershipData.category as TCategoryKey],
        );
    }, [partnershipDatas, categoryFilterStatus]);

    function onDismiss(markerindex) {
        const newBottomSheetStates = [...Open];
        newBottomSheetStates[markerindex] = false;
        setOpen(newBottomSheetStates);
        setList(true);
    }

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

            <Map center={center} level={3} className="z-0 h-screen w-screen">
                {filteredPartnershipDatas.map(filteredPartnershipData => (
                    <CustomOverlayMap position={{ lat: filteredPartnershipData.lat, lng: filteredPartnershipData.lng }}>
                        <div
                            className={`h-4 w-4 translate-x-1/2 translate-y-1/2 rounded-full border-2 border-black ${
                                categoryType[filteredPartnershipData.category as TCategoryKey].className
                            }`}
                            onClick={() => {
                                const newBottomSheetStates = [...Open];
                                newBottomSheetStates[filteredPartnershipData.id] = true;
                                setOpen(newBottomSheetStates);
                                setList(false);
                            }}
                        />
                    </CustomOverlayMap>
                ))}
                <BottomSheet
                    open={list}
                    style={{ zIndex: 30 }}
                    snapPoints={({ maxHeight }) => [maxHeight / 3, maxHeight * 0.7]}
                    defaultSnap={({ maxHeight }) => maxHeight / 2}
                    blocking={false}
                >
                    <div className="my-2 flex flex-row gap-2">
                        {categoryKeys.map(categoryKey => (
                            <button
                                className={`flex flex-row rounded-full border-2 p-1 ${
                                    categoryFilterStatus[categoryKey] ? "bg-base-100" : "bg-base-300"
                                } `}
                                onClick={() => {
                                    setCategoryFilterStatus(prev => ({
                                        ...prev,
                                        [categoryKey]: !prev[categoryKey],
                                    }));
                                }}
                            >
                                <div
                                    className={`mx-2 mt-1 h-4 w-4 rounded-full ${categoryType[categoryKey].className}`}
                                />
                                <p className={`mr-2 ${categoryFilterStatus[categoryKey] ? "font-bold" : ""}`}>
                                    {categoryType[categoryKey].title}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div id="partnershipContainer" className="flex flex-col gap-4 px-4">
                        {filteredPartnershipDatas.map(filteredPartnershipData => (
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{filteredPartnershipData.name}</h2>
                                    <div>
                                        <span
                                            className={`rounded-full px-2 ${
                                                categoryType[filteredPartnershipData.category as TCategoryKey].className
                                            }`}
                                        >
                                            {categoryType[filteredPartnershipData.category as TCategoryKey].title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-20" />
                </BottomSheet>
            </Map>
            {partnershipDatas.map(content => (
                <BottomSheet
                    key={content.id}
                    open={Open[content.id]}
                    onDismiss={() => onDismiss(content.id)}
                    style={{ zIndex: 30 }}
                    defaultSnap={({ maxHeight }) => maxHeight / 4}
                    snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, maxHeight / 4, maxHeight * 0.6]}
                >
                    <p className="m-8 text-center text-3xl font-bold">{content.name}</p>
                    <img
                        src={`/img/alliance/${content.id}.jpg`}
                        className="object-contain px-12 py-6"
                        alt="해당 점포 이미지"
                    />
                    <p className="text-center text-2xl">{content.detail}</p>
                </BottomSheet>
            ))}
            <BottomNav />
        </div>
    );
}
