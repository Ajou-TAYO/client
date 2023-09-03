import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import "react-calendar/dist/Calendar.css";
import "./land.css";
import TopBar from "../components/TopBar";

export default function LandingPage() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        // Axios를 사용하여 데이터 가져오기
        axios
            .get("http://202.30.29.204:8080/notices/latest") // 공지사항 API 엔드포인트를 여기에 입력
            .then(response => {
                console.log(response.data);
                setNotices(response.data); // 데이터를 상태에 설정
            })
            .catch(error => {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            });
    }, []);

    return (
        <div className="flex h-screen w-screen flex-col">
            <TopBar />

            {/* Content */}
            <div className="flex flex-col w-full h-full justify-center my-2">
                <div className="flex flex-row gap-1 w-5/6 h-2/5 m-auto">
                    <div className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 text-center">
                        <div className="m-7 text-2xl font-semibold">
                            <p>Notion</p>
                        </div>
                        <Link to="https://www.notion.so/suin-bundang-line/22ae2066fe384ca999a160239654616a?pvs=4">
                            <div className="m-5 text-sm font-semibold">
                                <p>▶ 셔틀버스 페이지</p>
                                <p>소개 보러가기!</p>
                            </div>
                        </Link>
                        <Link to="https://suin-bundang-line.notion.site/5ffde682ba3f48f1ae610bebc1fd389f?pvs=4">
                            <div className="m-5 text-sm font-semibold">
                                <p>▶ 제휴업체 페이지</p>
                                <p>소개 보러가기!</p>
                            </div>
                        </Link>
                        <Link to="https://suin-bundang-line.notion.site/66dffe5f43d743ff8fce3c0ed1aa7ee8?pvs=4">
                            <div className="m-5 text-sm font-semibold">
                                <p>▶ 교내 편의시설 페이지</p>
                                <p>소개 보러가기!</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex w-5/6 h-2/5 m-auto">
                    <div className="flex flex-col border-[#b1d5ff] border-2 container rounded-lg my-2 mx-1 text-center">
                        <div className="m-3 text-2xl font-semibold">
                            <p>Notice</p>
                        </div>
                        <div className="h-1 w-4/5 mx-auto bg-[#b1d5ff]">
                            <ul>
                                {notices.map((notice, index) => (
                                    <li key={index}>{notice}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 w-5/6 h-1/5 m-auto">
                    <Link
                        to="https://instagram.com/ajou.life_?igshid=MjEwN2IyYWYwYw=="
                        className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 pt-5 text-center"
                    >
                        <FiInstagram className="stroke-white mx-auto mb-3" size={50} />
                        <div className="text-white font-bold text-2xl align-middle items-center">
                            <p>Insta</p>
                        </div>
                    </Link>
                    <Link
                        to="https://www.facebook.com/ajou.life.2023?mibextid=LQQJ4d"
                        className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 pt-5 text-center"
                    >
                        <FaFacebookSquare className="fill-white mx-auto mb-3" size={50} />
                        <div className="text-white font-bold text-xl align-middle items-center">
                            <p>Facebook</p>
                        </div>
                    </Link>
                    <Link
                        to="https://instagram.com/ajou.life_?igshid=MjEwN2IyYWYwYw=="
                        className="flex-1 bg-[#b1d5ff] container rounded-lg my-2 mx-1 pt-5 text-center"
                    >
                        <RiFeedbackFill className="fill-white mx-auto mb-3" size={50} />
                        <div className="text-white font-bold text-xl align-middle items-center">
                            <p>Feedback</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/*bottom bar*/}
            <nav className="inset-x-0 bottom-0">
                <div className="navbar"></div>
            </nav>
        </div>
    );
}
