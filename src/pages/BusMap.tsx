import { useEffect, useRef, useState } from "react";
import { Map, Polyline, CustomOverlayMap } from "react-kakao-maps-sdk";
import ReconnectingWebSocket from "reconnecting-websocket";

function BusOverlay({ position }: { position: { x: number; y: number } | null }) {
    if (!position) return null;

    return (
        <CustomOverlayMap position={{ lat: position.x, lng: position.y }} yAnchor={1}>
            <div
                style={{
                    width: "36px",
                    height: "36px",
                }}
            >
                <img
                    src="/bus.png"
                    style={{
                        width: "36px",
                        height: "36px",
                        transform: `translate(0%, 50%) scaleX(-1)`,
                    }}
                />
            </div>
        </CustomOverlayMap>
    );
}

export default function () {
    const [busPosition, setBusPosition] = useState<({ x: number; y: number } | null)[]>(new Array(3).fill(null));

    const [isWsOpened, setIsWsOpened] = useState(false);

    useEffect(() => {
        const rws = new ReconnectingWebSocket("ws://202.30.29.204:8080/bin");

        rws.onopen = () => {
            setIsWsOpened(true);
        };

        rws.onclose = () => {
            setIsWsOpened(false);
        };

        rws.onmessage = (evt: MessageEvent) => {
            const index: number = parseInt(evt.data.charAt(4), 10);
            const value: string = evt.data.substring(27, 46);
            const cArray = value.split(", ");
            const x = parseFloat(cArray[0]);
            const y = parseFloat(cArray[1]);
            setBusPosition(prevPosition => {
                const updatedPositions = [...prevPosition];
                updatedPositions[index - 1] = { x, y };
                return updatedPositions;
            });
        };

        return () => {
            rws.close();
        };
    }, []);

    return (
        <Map
            center={{
                lat: 37.28022225696853,
                lng: 127.043874901048,
            }}
            level={6}
            className="z-0 h-screen w-screen"
        >
            {!isWsOpened && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="flex flex-col items-center">
                        <svg className=" h-8 w-8 animate-spin text-white" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <div className="mt-4 font-bold">서버와 연결중입니다.</div>
                        <div className="font-bold">잠시만 기다려주세요.</div>
                    </div>
                </div>
            )}

            {isWsOpened && busPosition.every(v => v === null) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="flex flex-col items-center">
                        <svg className=" h-8 w-8 animate-spin text-white" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <div className="mt-4 font-bold">데이터 수신 중입니다.</div>
                        <div className="font-bold">잠시만 기다려주세요.</div>
                    </div>
                </div>
            )}

            <BusOverlay position={busPosition[0]} />
            <BusOverlay position={busPosition[1]} />
            <BusOverlay position={busPosition[2]} />
        </Map>
    );
}
