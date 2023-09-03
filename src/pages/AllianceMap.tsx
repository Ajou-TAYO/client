import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import BottomNav from "../components/BottomNav";
import "./land.css";
import TopBar from "../components/TopBar";
import { BiCoffee, BiDrink } from "react-icons/bi";
import { PiBowlFood, PiGuitar } from "react-icons/pi";

async function getData() {
    // Fetch data from an API or any other source
    const response = await axios.get("http://127.0.0.1:8080/partnerships", {});
    return response.data.data;
}

const categoryType = {
    CAFE: {
        title: "카페",
        className: "bg-red-500",
        icon: <BiCoffee />,
    },
    RESTAURANT: {
        title: "식당",
        className: "bg-blue-500",
        icon: <PiBowlFood />,
    },
    PUB: {
        title: "주점",
        className: "bg-green-500",
        icon: <BiDrink />,
    },
    ETC: {
        title: "기타",
        className: "bg-yellow-500",
        icon: <PiGuitar />,
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

    console.log(filteredPartnershipDatas);

    function onDismiss(markerindex: number) {
        const newBottomSheetStates = [...Open];
        newBottomSheetStates[markerindex] = false;
        setOpen(newBottomSheetStates);
        setList(true);
    }

    return (
        <div className="h-screen w-screen">
            <TopBar />

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
                    <div className="px-2 my-2 flex flex-row gap-2 justify-around">
                        {categoryKeys.map(categoryKey => (
                            <button
                                className={`flex flex-row rounded-full border-2 p-1 w-fit h-8 ${
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
                                    className={`mx-1 my-auto h-5 w-5 rounded-full ${categoryType[categoryKey].className} items-center justify-center flex`}
                                >
                                    {categoryType[categoryKey].icon}
                                </div>
                                <p
                                    className={`mr-1 md:text-base text-sm ${
                                        categoryFilterStatus[categoryKey] ? "font-bold" : ""
                                    }`}
                                >
                                    {categoryType[categoryKey].title}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div id="partnershipContainer" className="flex flex-col gap-4 px-4">
                        {filteredPartnershipDatas.map(filteredPartnershipData => (
                            <div className="card bg-base-100 shadow-xl">
                                <div
                                    className="card-body"
                                    onClick={() => {
                                        setCenter({
                                            lat: filteredPartnershipData.lat,
                                            lng: filteredPartnershipData.lng,
                                        });
                                    }}
                                >
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
