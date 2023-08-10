import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import axios from "axios";
import BottomNav from "../components/BottomNav";

function Profile() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="h-screen w-screen">
            {/* Navbar */}
            <nav className="inset-x-0 top-0">
                <div className="navbar bg-[#4E5FFF] shadow-xl">
                    <div className="flex-1 justify-center">
                        <a className="px-3 text-2xl font-bold normal-case text-white">Ajou-life</a>
                    </div>
                </div>
            </nav>

            <div className="absolute inset-x-0 top-20 z-10">
                <div className="p-3 pb-5 text-2xl font-bold">nickname 님, 반갑습니다.</div>
                <div>
                    <div className="border-t-2" />
                    <Link to="/nickname/reset">
                        <button className="w-full border-b-2 py-4 pl-3 text-left font-semibold">닉네임 변경</button>
                    </Link>
                    <Link to="/password/reset">
                        <button className="w-full border-b-2 py-4 pl-3 text-left font-semibold">비밀번호 변경</button>
                    </Link>
                    
                    <button className="w-full border-b-2 py-4 pl-3 text-left font-semibold">백그라운드 알림 설정</button>
                    <Link to="/policy">
                        <button className="w-full border-b-2 py-4 pl-3 text-left font-semibold">개인정보 처리 방침</button>
                    </Link>
                    
                    <button className="w-full border-b-2 py-4 pl-3 text-left font-semibold">로그아웃</button>
                    <button className="w-full border-b-2 py-4 pl-3 text-left font-semibold">회원탈퇴</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
