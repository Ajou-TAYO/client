// LoginForm.tsx

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SignUp from "./pages/SignUp";

function LoginForm() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function postLoginData() {
        console.log(id, password);
        return axios
            .post(
                "http://202.30.29.204:8080/members/login",
                {
                    email: id,
                    password,
                },
                { withCredentials: true },
            )
            .then(response => {
                console.log(response.data);
                window.location.href = "/";
                setIsLog(true);
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
        <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="pb-10 text-center text-3xl font-bold text-blue-600">Ajou-life</p>
            <div className="w-full px-8">
                <form onSubmit={LoginFunc} className="flex flex-col gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">이메일</span>
                        </label>
                        <input type="text" placeholder="@ajou.ac.kr" className="input input-bordered w-full max-w-xs" onChange={event => setId(event.target.value)} value={id}/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">비밀번호</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" onChange={event => setPassword(event.target.value)} value={password}/>
                    </div>

                    <div className="align-top">
                        <button
                            type="submit"
                            onClick={postLoginData}
                            className="btn btn-primary w-full"
                        >
                            로그인
                        </button>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="w-5" />
                        <Link to="/presignup">
                            <div className="">
                                <button className="h-7 rounded-sm text-xs font-bold text-blue-500 underline">
                                    회원가입 하기
                                </button>
                            </div>
                        </Link>
                        <Link to="/password/find">
                            <div className="mb-5">
                                <button className="h-7 text-xs font-bold text-blue-500 underline selection:rounded-sm">
                                    비밀번호 찾기
                                </button>
                            </div>
                        </Link>
                        <div className="w-5" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
