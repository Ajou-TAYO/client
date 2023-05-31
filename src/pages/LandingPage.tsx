import { Link } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./land.css";

export default function LandingPage() {
    const [value, onChange] = useState(new Date());

    const [noticeData, setNoticeData] = useState([
        {
            title: "[학부/학사과정] 2023학년도 하계 계절수업 등록 및 수강포기(계절학기 수강료 환불) 안내",
            body: "testBody1",
            date: "testDate1",
        },
        {
            title: "[필독]2023학년도 2학기 국가장학금 1차 신청안내 (5. 23. ~ 6. 22.)",
            body: "testBody2",
            date: "testDate2",
        },
        {
            title: "'장학공지' 메뉴 신설(한눈에 우리대학 장학정보를 확인하는 방법)",
            body: "testBody3",
            date: "testDate3",
        },
        {
            title: "★개설 교과목 List 업데이트_[학부/학사과정] 2023학년도 하계 계절수업 안내 자세히 보기",
            body: "testBody3",
            date: "testDate3",
        },
        {
            title: "[인문과학연구소] 세미나 개최 안내 자세히 보기",
            body: "testBody3",
            date: "testDate3",
        },
        {
            title: "[일자리+센터] 2023 AJOU-동문멘토링 8일차(0531-비대면) 참여안내 자세히 보기",
            body: "testBody3",
            date: "testDate3",
        },
        {
            title: "[홍보] 2023년 창업중심대학 창업클럽경진대회(수도권)(~06.12(월)) 자세히 보기",
            body: "testBody3",
            date: "testDate3",
        },
        {
            title: "[홍보] (탄소산업분야) 2023 창업지원사업 참가자 모집 공고(탄소소재 및 부품 활용 아이디어) 자세히 보기",
            body: "testBody3",
            date: "testDate3",
        },
        {
            title: "[교무팀] 코로나19 확산에 따른 출석인정 안내(백신공결 등)_2023.06.01.부 적용 자세히 보기",
            body: "testBody3",
            date: "testDate3",
        },
    ]);
    const [dateData, setDateData] = useState(["", "2학기 재입학 신청"]);

    return (
        <div className="flex h-screen w-screen flex-col">
            {/* Navbar */}
            <nav className="inset-x-0 top-0 p-2">
                <div className="navbar bg-base-100 rounded-box shadow-xl">
                    <div className="flex-1 justify-between">
                        <a className="px-3 text-xl font-bold normal-case">Ajou Life</a>
                        <div>
                            <Link className="object-right px-1 text-sm font-bold text-blue-400" to="/login">
                                로그인
                            </Link>
                            <Link className="object-right px-1 text-sm font-bold text-blue-400" to="/presignup">
                                회원가입
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="flex-1 overflow-scroll p-2">
                <div className="space-y-4">
                    <div className="notice">
                        <div className="text-2xl font-bold text-center py-3 text-white bg-purple-700">공지사항</div>
                        <ul>
                            {noticeData.map((item, index) => (
                                <li key={index} className="bg-white-500">
                                    <div className="itemTitle ">{item.title}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="my-6 border border-gray-200 bg-gray-200 p-4">
                            <div className="">
                                <Calendar onChange={onChange} value={value} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
