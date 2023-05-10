// SignUp.tsx

import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [id, setId] = useState("");
    const [num, setVerifyNum] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPwck] = useState("");

    function postSignUpData() {
        console.log(id, num, password);
        return axios
            .post(
                "http://localhost:8080/members/signup/",
                {
                    email: id,
                    verificationCode: num,
                    password,
                },
                { withCredentials: true },
            )
            .then(response => {
                console.log(response.data);
                // 로그인 성공 처리
            })
            .catch(error => {
                alert("가입에 실패했습니다. 입력한 내용을 다시 확인해 주세요.");
                console.error(error);
                // 로그인 실패 처리
            });
    }

    function postEmailCert() {
        axios
            .post(
                "http://localhost:8080/members/signup/email",
                {
                    email: id,
                },
                { withCredentials: true },
            )
            .then(response => {
                return axios
                    .post("http://localhost:8080/members/signup/email/request", {
                        email: id,
                    })
                    .then(response => {
                        console.log(response.data);
                        // 이메일 인증 성공 처리
                    })
                    .catch(error => {
                        console.error(error);
                        // 이메일 인증 실패 처리
                    });
            })
            .catch(error => {
                console.error(error);
                console.log("123");
                // 이메일 인증 실패 처리
            });
    }

    const SignFunc = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="relative">
                <div>
                    <div className="my-36 w-auto px-5">
                        <p className="pb-4 text-center text-xl font-bold text-blue-900">회원가입</p>
                        <div className="mb-10">
                            <form onSubmit={SignFunc}>
                                <div className="mb-5">
                                    <div className="box-border pb-3">
                                        <label htmlFor="email">* 이메일</label>
                                    </div>
                                    <div className="auto container box-border">
                                        <div className="container flex h-9 rounded-sm border border-gray-300">
                                            <input
                                                type="text"
                                                onChange={event => setId(event.target.value)}
                                                className="text-m relative inline-flex w-full p-1 px-2"
                                                placeholder="ajoulife@ajou.ac.kr"
                                            />
                                            <div className="relative">
                                                <button
                                                    onClick={postEmailCert}
                                                    className="h-9 w-10 rounded-sm bg-blue-500 text-sm font-bold text-white"
                                                >
                                                    인증
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative mt-2 flex items-center">
                                        <span className="text-xs text-gray-400">
                                            아주대학교 포탈에서 사용 중인 이메일을 정확하게 입력해 주세요. 해당 이메일로
                                            가입 인증 메일이 발송됩니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="box-border pb-3">
                                        <label htmlFor="email">* 인증번호</label>
                                    </div>
                                    <div className="auto container box-border">
                                        <div className="container relative rounded-sm border border-gray-300">
                                            <input
                                                type="text"
                                                onChange={event => setVerifyNum(event.target.value)}
                                                className="text-m relative inline-flex w-full p-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative mt-2 flex items-center">
                                        <span className="text-xs text-gray-400">
                                            입력한 이메일로 전송된 인증번호를 정확하게 입력해주세요.
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="box-border pb-3">
                                        <label htmlFor="email">* 비밀번호</label>
                                    </div>
                                    <div className="auto container box-border">
                                        <div className="container relative rounded-sm border border-gray-300">
                                            <input
                                                type="password"
                                                onChange={event => setPassword(event.target.value)}
                                                className="text-m relative inline-flex w-full p-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative mt-2 flex items-center">
                                        <span className="text-xs text-gray-400">
                                            8자 이상의 영문 숫자 혼합의 비밀번호를 설정해 주세요.
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="box-border pb-3">
                                        <label htmlFor="email">* 비밀번호 확인</label>
                                    </div>
                                    <div className="auto container box-border">
                                        <div className="container relative rounded-sm border border-gray-300">
                                            <input
                                                type="password"
                                                onChange={event => setPwck(event.target.value)}
                                                className="text-m relative inline-flex w-full p-1"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative mt-2 flex items-center">
                                        <span className="text-xs text-gray-400">
                                            비밀번호를 한 번 더 입력해 주세요.
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5 align-top">
                                    <button
                                        type="submit"
                                        onClick={postSignUpData}
                                        className="my-5 h-9 w-full rounded-sm bg-blue-500 text-sm font-bold text-white"
                                    >
                                        가입
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

export default SignUp;
