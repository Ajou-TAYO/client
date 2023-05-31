import { Link } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
    
    const [noticeData, setNoticeData] = useState([
        {
            title: "testTitle1",
            body: "testBody1",
            date: "testDate1",
        },
        {
            title: "testTitle2",
            body: "testBody2",
            date: "testDate2",
        },
        {
            title: "testTitle3",
            body: "testBody3",
            date: "testDate3",
        },
    ]);

    return (
        <div className="flex h-screen w-screen flex-col">
            {/* Navbar */}
            <nav className="inset-x-0 top-0 p-2">
                <div className="navbar bg-base-100 rounded-box shadow-xl">
                    <div className="flex-1 justify-between">
                        <a className="px-3 text-xl font-bold normal-case">Ajou Life</a>
                        <div>
                        <Link className="px-1 object-right text-blue-400 text-sm font-bold" to="/login">로그인</Link>
                        <Link className="px-1 object-right text-blue-400 text-sm font-bold" to="/presignup">회원가입</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="flex-1 overflow-scroll p-2">
                <div className="space-y-4">
                    <div className="notice">
                        <ul>
                            {noticeData.map((item, index) => (
                                <li key={index} className="noticeItem">
                                    <div className="itemTitle">{item.title}</div>
                                    <div className="itemBody">{item.body}</div>
                                    <div className="itemDate">{item.date}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="relative grid h-96 grid-cols-7 grid-rows-5 gap-px border border-gray-200 bg-gray-200">
                            {[...new Array(35)].map((_, i) => (
                                <div className="bg-white">{i}</div>
                            ))}

                            <div className="absolute inset-0 grid grid-cols-7 grid-rows-5">
                                <div className="col-start-3 col-end-8 row-start-3 flex items-end p-1">
                                    <div className="h-2 w-full bg-red-500" />
                                </div>
                                <div className="col-start-1 col-end-3 row-start-4 flex items-end p-1">
                                    <div className="h-2 w-full bg-red-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}