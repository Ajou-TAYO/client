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
    const [Show, setShow] = useState(new Array(107).fill(true));
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [clickCount1, setClickCount1] = useState(1);
    const [clickCount2, setClickCount2] = useState(1);
    const [clickCount3, setClickCount3] = useState(1);
    const [clickCount4, setClickCount4] = useState(1);
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

    const handleToggle1 = event => {
        setClickCount1(clickCount1 + 1);
        console.log(clickCount1);
        if (clickCount1 % 2 === 0) {
            setIsClicked1(false);
        } else {
            setIsClicked1(true);
        }
    };

    const handleToggle2 = event => {
        setClickCount2(clickCount2 + 1);
        if (clickCount2 % 2 === 0) {
            setIsClicked2(false);
        } else {
            setIsClicked2(true);
        }
    };

    const handleToggle3 = event => {
        setClickCount3(clickCount3 + 1);
        if (clickCount3 % 2 === 0) {
            setIsClicked3(false);
        } else {
            setIsClicked3(true);
        }
    };

    const handleToggle4 = event => {
        setClickCount4(clickCount4 + 1);
        if (clickCount4 % 2 === 0) {
            setIsClicked4(false);
        } else {
            setIsClicked4(true);
        }
    };

    function onDismiss(markerindex) {
        const newBottomSheetStates = [...Open];
        newBottomSheetStates[markerindex] = false;
        setOpen(newBottomSheetStates);
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

            <div className="fixed left-5 top-24 z-50 box-border flex flex-col border-2 border-indigo-400 bg-slate-100">
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

            <Map
                center={{ lat: 37.27771738352343, lng: 127.04382834467262 }}
                level={3}
                className="z-0 h-screen w-screen"
            >
                {data.map(content => (
                    <MapMarker
                        key={content.id}
                        position={{ lat: content.lat, lng: content.lng }}
                        clickable
                        onClick={() => {
                            const newBottomSheetStates = [...Open];
                            newBottomSheetStates[content.id] = true;
                            setOpen(newBottomSheetStates);
                        }}
                        image={{
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX/AAD////2///6///sAAD6AADy/Pzw+fnPq6vXKircJCTxAADY2trYHx/0AADNyMjRNTXPfX3dGxvb4+PHoaHl8PDJjIzGra3Ed3fUMzPPxcXPlZXPY2PjGRnlFBTTSUnDjo7Cg4PCb2/NWVnQUVHT0dHPZGTOubnSPDzMbW3mCwvPo6PMmZnKsrLGt7fBfX2/kpJPIm+7AAAHOUlEQVR4nO2diXaqMBBAyyLUilJRqtK6VaSLtX3//3VPjrUVCCGECUmG3h9w7knMZJKQ3BjYuZEdgHD+DPXnz1B/2jS0TMdNcUyrxV8Vb2iGXnT7OH6K7/t3wXL1vloGd/37+Gn8eBt5oSn890UaWqF/GK+Hg95NGb1BsB4f/FBkm4oydPeHZDgoVcsyGj4d9q6gSEQYOt5HbDPK/WLHH3tHQDTghuHL26q23YXV20sIHRCsYXjc1W+8XFPujrCSgIZOlDTV+5ZMIsDuCmY4eQhA9M4EDxOowGAMLX83AvRLGe18mBwCYegcF8B6ZxYziAzS3NCdQnbPLMG0uWNTQ3fKnxtYWDV2bGZozu6E+qUEs2Zz10aG0b1wv5RFJMlw8tSKX8quQe7gNnQ2rPNqCAYb7jkAr6Hfb9Evpe+3aujOy2s+UfTmfKMql6EvLgPSCLiakcPQ3LbfgGd6W47EUd9w8irJL+W1/qBa2/ATpkLixf4UbGh+SfVL+arZU+sZhrFsvxNxvTWAWoaenDE0T+CJMozk/gV/setMVGsYzmQliSK9mQjDf7K1MvwDN7S2sp1ybFlXcRgNrblsowJzRkU2Q+tZtg+BZzZFJkMlBVkVWQwV7KJnmDoqi6Fqg8wvXzCGaqWJLAxJo9pwJtuCSnXqrzSM1JnJkOhVTuCqDD1V5qJl2FXT8ArDUI1qgkZQUUzRDU0V6sEqYnpJTDeUX9GzQM8ZVMNP2bEzQl27oRlOVB9lLti0FTiKoSlz2bAer5S/IsVQ3clakS2Poa92qs/SK1/wLzV01c+E1wSl2zalhqpWTGXM6xpq1UdTSvtpiaHT9gZoc/olu8QlhhvZ8XKwqWM4aXOPHooBOe+TDXeyo+Xiid0wkh0rJ8RqmGRoijmIJ54FafJGMlR7ZYYGadWGYKjZbOaaIWFmQzCcyo6zAVMWQ1fscUqxrIqNWDTUuQlJjVgwdPT9F6YEhblbwfAoO8aGHKsMLV1z4YVFfj8qb+jLjrAx+Soqb6jnjPSaHd1wAv1hSPuMJlTDB9nxAfBAM9Q8VZzJJYysoa5lU5aIYpjIDg6EpNww1GWjgo4dlhrqPp+5cCw11D8ZntmVGSLppLluem34IjsyMF5KDN9kBwbGG9nQ0bm4z7JyiIae7LgA8YiGH7LDAuSDaKjD2RlWYpKhiyVXpNguwXAvOypQ9gTDg+ygQDkQDHHUFReSoqE1lB0UKEOrYBjqv0JzzSAsGOq/jJjFLxjiGmiuhpofw7HskIAZFwzXskMCZp03NDGsI14TmDnDUMcTNDR+BtOLoafbObYqel7OEMda8DVRzvBWdkDg3OYMH2UHBM5jzhBbOvxNiBfD9m5EaoskZ4hpCeNMnDNs59auNrnPGlr6nXquom9lDE3xN8u1zZ2ZMUSxvZ3lstn9beguZQcEztLNGuLZs7iwyhm+yw4InPfOtSH6/yH+sRR/PsQ/p8E/L+1AbYG/PsRf4+Nfp8G/1oZ/vRT/mjf+fQv8e0/49w/RJcTiHjD+fXz8ZzHwn6fBfyYK/7k2ZEMN6Wwi/vOl+M8Io1rIIJ7z7sBZffzfWyD6ZmZJ/mYG/3dPHfh2Df/3h/i/Ie3Ad8BIuinlW24k9QXle3wk68K0OxVQbHZT78XAf7dJB+6nQZASK+4YQrCoWHVPFP67vrSf11Te16Z7whhW37mH/95EvY8pLlnuvtS6EZnuLzVcfXcwiv/Cjt4j3IG7oLUtopjv89b1HF+NO9k7cK++sZEdLge13kbowPsW+N8o6cA7M7rdrs/xVpBe/ZTnvacOvNnVgXfX8L+d14H3DzvwhmUH3iHF/5ZsB94DPlXDau/VjBq/6az6qg3Au9wdeFtd5enbliF6FkNL1UqqtGKqa2hYz7JdiDznN9L4DdVUZBNkNFSxo87ZBFkNDUu14WbLKMhsqFrSYEgTtQ2NmTqzm151oucxNCJV5qh25VSN09Dw1Kg0gqrJNr+hEapQL8YV5VIjQ8OUX/V/0QvepoaG8Sn3z2hT12RADI2JzEXGV9qqGpShYW5lrYb3tjV7KKehYfhyxtSgfOke2tBw5+03Y29euvkiwPDUjG1vofa5GrCBoeFs2tzrH2xKdngFGp4G1fZObDzVH0IhDE8T1XZuCFvUmYbCGhrmTPxNdsGMI0WAGZ5G1anYGxdXU74RFM4wdRR3ljFo7AdheBpWj2KO+i2O3APoFRCGhmH5O+gFgNHOZ12JoQNjeGLyADmVCx4a5IcsYIanzholMJWVnUQQ3fMbQMMT4XHXVNLeHevV8FXAGp4IX97488fq7QVWzxBgeMLxPuL6TWnHHx5g5/xBhGGKuz8kQ9a5+WiYHPbNMx8ZUYYpVugfxuuhXV5L9gbBenzwQ5i8QEak4Rkz9KLbx3ES3/fvguXqfbUM7vr3cTJ+vI28sNmckwXxhr9YpuOmOKbINsvTpqEc/gz1589Qf/Ab/geyD35nXdnKDAAAAABJRU5ErkJggg==",
                            size: {
                                width: 15,
                                height: 15,
                            },
                            options: {
                                offset: {
                                    x: 5,
                                    y: 0,
                                },
                            },
                        }}
                    />
                ))}
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
                    <p>{content.name}</p>
                    <p>{content.detail}</p>
                </BottomSheet>
            ))}
            <BottomNav />
        </div>
    );
}
