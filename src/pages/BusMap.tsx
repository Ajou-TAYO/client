import { useEffect, useState } from "react";
import { Map, Polyline, CustomOverlayMap } from "react-kakao-maps-sdk";
import { svgPathProperties as SvgPathProperties } from "svg-path-properties";

const gwangyoSubwayStationLinks = [
    {
        roadnum: 0,
        hints: "~~",
        grade: 11,
        name: "",
        length: 88,
        time: 20,
        eangle: 267,
        lane: 1,
        speed: 16,
        points: "509651.0 1051082.0,509432.0 1051069.0",
    },
    {
        roadnum: 0,
        hints: "~4944~",
        grade: 11,
        name: "",
        length: 349,
        time: 78,
        eangle: 177,
        lane: 1,
        speed: 16,
        points: "509432.0 1051069.0,509487.0 1050985.0,509610.0 1050789.0,509653.0 1050722.0,509662.0 1050572.0,509673.0 1050264.0",
    },
    {
        roadnum: 0,
        hints: "~4444499~",
        grade: 6,
        name: "월드컵로",
        length: 533,
        time: 102,
        eangle: 308,
        lane: 1,
        speed: 19,
        points: "509673.0 1050264.0,509648.0 1050241.0,509635.0 1050236.0,509600.0 1050228.0,509530.0 1050280.0,509442.0 1050342.0,508943.0 1050707.0,508668.0 1050909.0,508595.0 1050965.0",
    },
    {
        roadnum: 0,
        hints: "~4449444944449944~~",
        grade: 6,
        name: "광교로",
        length: 1312,
        time: 190,
        eangle: 44,
        lane: 1,
        speed: 25,
        points: "508595.0 1050965.0,508567.0 1051023.0,508552.0 1051060.0,508540.0 1051175.0,508562.0 1051505.0,508576.0 1051593.0,508625.0 1051713.0,508669.0 1051801.0,508710.0 1051874.0,508743.0 1051914.0,508792.0 1051978.0,508822.0 1052013.0,508903.0 1052089.0,509455.0 1052632.0,509868.0 1053046.0,509895.0 1053074.0,509930.0 1053110.0,510019.0 1053188.0,510348.0 1053522.0",
    },
    {
        roadnum: 0,
        hints: "~44444994~",
        grade: 6,
        name: "도청로",
        length: 589,
        time: 138,
        eangle: 132,
        lane: 1,
        speed: 15,
        points: "510348.0 1053522.0,510371.0 1053527.0,510388.0 1053527.0,510408.0 1053525.0,510428.0 1053517.0,510451.0 1053508.0,510784.0 1053204.0,511047.0 1052949.0,511226.0 1052776.0,511446.0 1052576.0",
    },
];

const gwangyoSubwayStationPath = gwangyoSubwayStationLinks
    .map(gwangyoSubwayStationLink => gwangyoSubwayStationLink.points.split(","))
    .map(pStrings => {
        return pStrings.map(pString => {
            const [x, y] = pString.split(" ");
            return new kakao.maps.Coords(Number(x), Number(y)).toLatLng();
        });
    });

const gwangyoSubwayStationLatLngArray = gwangyoSubwayStationPath.map(a =>
    a.map(b => {
        return { lat: b.getLat(), lng: b.getLng() };
    }),
);

let gwangyoSubwayStationSvgPath = "";

// loop through the points array and add the move to and line to commands
for (let i = 0; i < gwangyoSubwayStationLatLngArray.length; i += 1) {
    const link = gwangyoSubwayStationLatLngArray[i];
    for (let j = 0; j < link.length; j += 1) {
        const { lat: x, lng: y } = link[j];
        if (i === 0 && j === 0) {
            gwangyoSubwayStationSvgPath += `M ${x} ${y} `;
        } else {
            gwangyoSubwayStationSvgPath += `L ${x} ${y} `;
        }
    }
}

const gwangyoSubwayStationSvgPathProperties = new SvgPathProperties(gwangyoSubwayStationSvgPath);
// create an SVG path properties object from the path commands
const gwangyoSubwayStationSvgPathTotalLength = gwangyoSubwayStationSvgPathProperties.getTotalLength();

const routes = [
    "509651.0 1051082.0,509432.0 1051069.0",
    "509432.0 1051069.0,509487.0 1050985.0,509610.0 1050789.0,509653.0 1050722.0,509662.0 1050572.0,509673.0 1050264.0,509674.0 1050174.0,509700.0 1050042.0,509700.0 1049987.0,509706.0 1049935.0,509713.0 1049787.0,509728.0 1049467.0,509731.0 1049435.0,509741.0 1049227.0,509744.0 1049217.0,509749.0 1049145.0,509761.0 1048965.0,509767.0 1048868.0,509768.0 1048845.0",
    "509768.0 1048845.0,509738.0 1048815.0,509711.0 1048797.0,509651.0 1048794.0,509497.0 1048855.0,509475.0 1048865.0,509407.0 1048891.0,509342.0 1048916.0,509289.0 1048940.0,508983.0 1049064.0,508860.0 1049118.0,508789.0 1049145.0,508616.0 1049210.0,508531.0 1049237.0,508481.0 1049259.0,508458.0 1049266.0,508398.0 1049286.0,508348.0 1049305.0,508252.0 1049352.0,508054.0 1049420.0,508026.0 1049429.0,507805.0 1049507.0,507655.0 1049558.0,507509.0 1049604.0,507447.0 1049626.0,507371.0 1049650.0,507309.0 1049669.0,507111.0 1049702.0,507081.0 1049707.0,507026.0 1049714.0,506908.0 1049722.0,506841.0 1049724.0,506746.0 1049731.0,506688.0 1049733.0,506641.0 1049732.0,506538.0 1049729.0,506528.0 1049728.0,506496.0 1049721.0,506399.0 1049680.0,506195.0 1049515.0,506009.0 1049360.0,505977.0 1049338.0,505937.0 1049310.0,505838.0 1049254.0,505823.0 1049248.0,505699.0 1049202.0,505641.0 1049184.0,505484.0 1049130.0,505332.0 1049071.0,505223.0 1049035.0,505158.0 1049016.0,504894.0 1048929.0,504881.0 1048923.0,504719.0 1048917.0,504564.0 1048913.0,504442.0 1048904.0,504432.0 1048904.0,504342.0 1048900.0,504332.0 1048900.0,504244.0 1048897.0,504147.0 1048893.0,504049.0 1048890.0,503982.0 1048889.0,503929.0 1048886.0,503899.0 1048886.0,503747.0 1048881.0,503692.0 1048878.0",
    "503692.0 1048878.0,503690.0 1048813.0,503677.0 1048628.0,503670.0 1048581.0,503648.0 1048293.0,503639.0 1048175.0",
    "503639.0 1048175.0,503582.0 1048147.0,503515.0 1048112.0,503271.0 1047974.0,503182.0 1047928.0,502948.0 1047800.0,502742.0 1047683.0,502717.0 1047671.0,502543.0 1047576.0,502498.0 1047553.0,502486.0 1047548.0,502118.0 1047379.0,502083.0 1047359.0,502063.0 1047349.0,501953.0 1047300.0,501837.0 1047244.0,501737.0 1047198.0,501535.0 1047106.0,501441.0 1047055.0,501354.0 1047014.0,501172.0 1046929.0,500996.0 1046847.0,500834.0 1046773.0,500802.0 1046758.0,500782.0 1046750.0,500588.0 1046658.0,500518.0 1046622.0,500406.0 1046571.0,500396.0 1046566.0,500376.0 1046563.0,500359.0 1046566.0,500351.0 1046568.0,500326.0 1046583.0,500278.0 1046622.0,500228.0 1046662.0,500210.0 1046672.0,500180.0 1046681.0,500115.0 1046685.0,500077.0 1046675.0",
    "500077.0 1046675.0,500211.0 1046356.0,500252.0 1046277.0,500262.0 1046260.0",
    "500262.0 1046260.0,500284.0 1046102.0,500289.0 1046080.0,500340.0 1045973.0,500406.0 1045911.0,500426.0 1045871.0",
    "500426.0 1045871.0,500424.0 1045854.0",
];

const suwonStationLatLngArray = routes
    .join(",")
    .split(",")
    .map(coord => {
        const [x, y] = coord.split(" ");
        return new kakao.maps.Coords(Number(x), Number(y)).toLatLng();
    });

const suwonLatLngPaths = suwonStationLatLngArray.map(a => ({ lat: a.getLat(), lng: a.getLng() }));

let suwonSvgPath = "";

// loop through the points array and add the move to and line to commands
for (let i = 0; i < suwonLatLngPaths.length; i += 1) {
    const { lat: x, lng: y } = suwonLatLngPaths[i];
    if (i === 0) {
        suwonSvgPath += `M ${x} ${y} `;
    } else {
        suwonSvgPath += `L ${x} ${y} `;
    }
}

const suwonStationSvgPathProperties = new SvgPathProperties(suwonSvgPath);
// create an SVG path properties object from the path commands
const suwonStationSvgPathTotalLength = suwonStationSvgPathProperties.getTotalLength();

function BusOverlay({
    svgPathProperty,
    svgTotalLength,
}: {
    svgPathProperty: ReturnType<typeof SvgPathProperties>;
    svgTotalLength: number;
}) {
    const [slope, setSlope] = useState<number>();
    const [busPosition, setBusPosition] = useState<{ x: number; y: number }>();

    useEffect(() => {
        let percentage = 0.001;

        const timer = setInterval(() => {
            const currPosition = svgPathProperty.getPointAtLength(svgTotalLength * percentage);
            percentage += 0.001;
            const nextPosition = svgPathProperty.getPointAtLength(svgTotalLength * percentage);

            const angle =
                -(Math.atan2(currPosition.y - nextPosition.y, currPosition.x - nextPosition.x) * 180) / Math.PI + 90;

            setBusPosition(currPosition);
            setSlope(angle);

            console.log(angle);
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            {busPosition && slope && (
                <CustomOverlayMap position={{ lat: busPosition.x, lng: busPosition.y }} yAnchor={1}>
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
                                transform: `translate(0%, 50%) scaleX(-1) rotate(${slope}deg)`,
                            }}
                        />
                    </div>
                </CustomOverlayMap>
            )}
        </>
    );
}

export default function () {
    return (
        <Map
            center={{
                lat: 37.28022225696853,
                lng: 127.043874901048,
            }}
            level={6}
            className="h-screen w-screen z-0"
        >
            <Polyline
                path={suwonLatLngPaths}
                strokeWeight={5} // 선의 두께 입니다
                strokeColor="#FF0000" // 선의 색깔입니다
                strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle="solid" // 선의 스타일입니다
            />
            <Polyline
                path={gwangyoSubwayStationLatLngArray}
                strokeWeight={5} // 선의 두께 입니다
                strokeColor="#0800ff" // 선의 색깔입니다
                strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle="solid" // 선의 스타일입니다
            />
            <BusOverlay
                svgPathProperty={suwonStationSvgPathProperties}
                svgTotalLength={suwonStationSvgPathTotalLength}
            />
            <BusOverlay
                svgPathProperty={gwangyoSubwayStationSvgPathProperties}
                svgTotalLength={gwangyoSubwayStationSvgPathTotalLength}
            />
        </Map>
    );
}
