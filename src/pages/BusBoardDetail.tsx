import { useEffect, useState } from "react";
import BottomTab from "../components/BottomNav";
import TopBar from "../components/TopBar";

//버스 상세 공지사항 페이지
const BusBoardDetail = () => {
    const boardsTitle = ["글쓰기의 영도", "미슐레", "신화론", "모드의 체계", "S/Z", "기호의 제국", "텍스트의 즐거움"];

    return (
        <div>
            <TopBar />
            {boardsTitle.map(title => {
                return (
                    <div className="flex flex-col items-center justify-center w-full h-20 border-b border-black bg-white">
                        <div className="flex items-center justify-left w-11/12 h-full">
                            <p className="text-lg font-bold text-primary">{title}</p>
                        </div>
                    </div>
                );
            })}
            <BottomTab />
        </div>
    );
};

export default BusBoardDetail;
