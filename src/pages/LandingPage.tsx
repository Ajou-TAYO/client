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
                        <Link className="px-1 object-right text-blue-400 text-sm font-bold" to="/signup">회원가입</Link>
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
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            to="/bus"
                            className="card bg-primary text-primary-content flex h-24 items-center justify-center"
                        >
                            <div className="text-xs font-bold text-gray-200">ㅅㅕஞ틄뻢✪亼☜ 보ㄹㅓㄱr기</div>
                        </Link>

                        <div className="card bg-secondary text-primary-content flex h-24 items-center justify-center">
                            <div className="text-xs font-bold text-gray-200">편으ㅣㅅㅣ♙➤설♕</div>
                        </div>
                    </div>
                    haksa 1 jung
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

            {/*  Bottom Nav */}
            <div className="btm-nav relative">
                <button className="text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </button>
                <button className="text-primary active">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <button className="text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </button>
                <button className="text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </button>
                <button className="text-primary">
                    <div className="w-10 rounded-full">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                    </div>
                </button>
            </div>
        </div>
    );
}
