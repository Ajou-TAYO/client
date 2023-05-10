// LoginForm.tsx

import { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function postLoginData() {
        console.log(id, password);
        return axios
            .post(
                "http://localhost:8080/members/login",
                {
                    email: id,
                    password: password,
                },
                { withCredentials: true },
            )
            .then(response => {
                console.log(response.data);
                // 로그인 성공 처리
            })
            .catch(error => {
                alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.");
                console.error(error);
                // 로그인 실패 처리
            });
    }

    const LoginFunc = e => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="relative">
                <div>
                    <div className="my-36 w-auto px-5">
                        <p className="pb-10 text-center text-3xl font-bold text-blue-600">Ajou-life</p>
                        <div className="mb-10">
                            <form onSubmit={LoginFunc}>
                                <div className="mb-8">
                                    <div className="box-border pb-3">
                                        <label htmlFor="email">이메일</label>
                                    </div>
                                    <div className="auto container box-border">
                                        <div className="container relative rounded-sm border border-gray-300">
                                            <input
                                                type="text"
                                                onChange={event => setId(event.target.value)}
                                                className="text-m relative inline-flex w-full p-2"
                                                placeholder="ajoulife@ajou.ac.kr"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="box-border pb-3">
                                        <label htmlFor="email">비밀번호</label>
                                    </div>
                                    <div className="auto container box-border">
                                        <div className="container relative rounded-sm border border-gray-300">
                                            <input
                                                type="password"
                                                onChange={event => setPassword(event.target.value)}
                                                className="text-m relative inline-flex w-full p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 align-top">
                                    <button
                                        type="submit"
                                        onClick={postLoginData}
                                        className="my-5 h-9 w-full rounded-sm bg-blue-500 text-sm font-bold text-white"
                                    >
                                        로그인
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-32 w-full bg-blue-100 p-5">
                <div className="py-2 text-sm font-bold text-gray-500">장우성여친구함</div>
                <div className="text-xs text-gray-500">개인정보처리방침 | 이용약관</div>
                <div className="text-xs text-gray-500">Copyright © 장우성여친구함. All Rights Reserved.</div>
            </div>
        </div>
    );
}

export default LoginForm;
