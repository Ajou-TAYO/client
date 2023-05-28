import { useEffect, useState } from "react";
import { Map, Polyline, CustomOverlayMap } from "react-kakao-maps-sdk";

const ws: any = new WebSocket("ws://localhost:8080/bus");

ws.onopen = () => {};

function BusOverlay(props) {
    return (
        <>
            {props && (
                <CustomOverlayMap position={{ lat: props.position.x, lng: props.position.y }} yAnchor={1}>
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
            )}
        </>
    );
}

export default function () {
    const [busPosition, setBusPosition] = useState<{x: number; y: number }[]>(new Array(3).fill({ x: 0, y: 0}));

    ws.onmessage = (evt: MessageEvent) => {
        const index: number = parseInt(evt.data.charAt(4), 10);
        const value: string = evt.data.substring(27, 46);
        const cArray = value.split(", ");
        const x = parseFloat(cArray[0]);
        const y = parseFloat(cArray[1]);
        setBusPosition((prevPosition) => {
            const updatedPositions = [...prevPosition];
            updatedPositions[index - 1] = { x, y };
            return updatedPositions;
        });
    };

    return (
        <Map
            center={{
                lat: 37.28022225696853,
                lng: 127.043874901048,
            }}
            level={6}
            className="z-0 h-screen w-screen"
        >
            <BusOverlay position={busPosition[0]} />
            <BusOverlay position={busPosition[1]} />
            <BusOverlay position={busPosition[2]} />
        </Map>
    );
}
