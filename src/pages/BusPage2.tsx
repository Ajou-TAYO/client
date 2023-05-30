import "react-spring-bottom-sheet/dist/style.css";

function BusPage2() {
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
            <div className="mt-20 space-y-4 p-4">
                <div className="text-lg font-bold">아주대학교 - 수원역</div>

                <div>
                    <div className="font-bold">등교 노선</div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>출발시각</th>
                                    <th>출발장소</th>
                                    <th>도착장소</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>08:20</th>
                                    <td>수원역 9번/10번 출구 중간지점</td>
                                    <td>율곡관 건물 입구 → 원천관 건물 입구</td>
                                </tr>
                                <tr>
                                    <th>09:50</th>
                                    <td>수원역 9번/10번 출구 중간지점</td>
                                    <td>율곡관 건물 입구 → 원천관 건물 입구</td>
                                </tr>
                                <tr>
                                    <th>11:20</th>
                                    <td>수원역 9번/10번 출구 중간지점</td>
                                    <td>도서관 옆 통학버스 승강장</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

              <div className="divider" />
                <div>
                    <div className="font-bold">하교 노선</div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>출발시각</th>
                                    <th>출발장소</th>
                                    <th>도착장소</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>15:10</th>
                                    <td>도서관 옆 통학버스 승강장</td>
                                    <td>수원역 9번/10번 출구 중간지점</td>
                                </tr>
                                <tr>
                                    <th>16:40</th>
                                    <td>도서관 옆 통학버스 승강장</td>
                                    <td>수원역 9번/10번 출구 중간지점</td>
                                </tr>
                                <tr>
                                    <th>18:10</th>
                                    <td>율곡관 건물 입구 → 원천관 건물 입구</td>
                                    <td>수원역 9번/10번 출구 중간지점</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusPage2;
