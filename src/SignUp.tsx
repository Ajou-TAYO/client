import { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSent, setIsSent] = useState(false);
  
    const handleSendVerificationCode = () => {
        axios.post('http://localhost:8080/signup/email', {
            email: id
        })
        .then(response => {
            return axios.post('http://localhost:8080/signup/email/request', {
                email: id
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
          // 이메일 인증 실패 처리
        });
        setIsSent(true);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, verificationCode, password, confirmPassword);
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </label>
            <br />
            {!isSent && (
            <button type="button" onClick={handleSendVerificationCode}>
                Send Verification Code
            </button>
            )}
            {isSent && (
            <>
                <label>
                Verification Code:
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(event) => setVerificationCode(event.target.value)}
                />
                </label>
                <br />
            </>
            )}
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <label>
                Confirm Password:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Signup</button>
        </form>
    );
  }
/*  const [id, setId] = useState("")
    const [num, setVerifyNum] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPwck] = useState("")
    
    function postSignUpData() {
        console.log(id, num, password);
        return axios.post('http://localhost:8080/members/signup/', {
            email: id,
            verificationCode: num,
            password: password,
        })
        .then(response => {
          console.log(response.data);
          // 로그인 성공 처리
        })
        .catch(error => {
          console.error(error);
          // 로그인 실패 처리
        });
      }

    function postEmailCert() {
        axios.post('http://localhost:8080/signup/email', {
            email: id
        })
        .then(response => {
            return axios.post('http://localhost:8080/signup/email/request', {
                email: id
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
          // 이메일 인증 실패 처리
        });
    }

    const SignFunc = (e) => {
        e.preventDefault();
    }

    function passwordCheckFunc() {
        var password = document.getElementById("pw").value;
        var passwordCheck = document.getElementById("pwck").value;

        if(passwordCheck=="") {
            document.getElementById("passwordCheckText").innerHTML=""
        }
        else if (password!=passwordCheck) {
            document.getElementById("passwordCheckText").innerHTML="비밀번호가 일치하지 않습니다."
        }
        else {
            document.getElementById("passwordCheckText").innerHTML="비밀번호가 일치합니다."
        }
    }

    return (
        <div className="wrap">
            <h1 className="signUpText">Sign Up</h1>
        
            <form onSubmit={SignFunc} className="signUpBox">
                <div className="emailBox">
                    <div className="smBox">
                        <p className="text">이메일</p>
                            <div className="signUpBorder">
                                <input type="text" placeholder="address@ajou.ac.kr" className="signUp"  onChange={postEmailCert}/>
                                <button className="emailCheck">인증</button>
                            </div>
                    </div>
                </div>
                <div className="smBox">
                    <p className="text">입력하신 이메일로 전송된 인증번호를 입력해주세요</p>
                    <div className="signUpBorder">
                        <input type="password" placeholder="인증번호" className="signUp" onChange={(event) => setVerifyNum(event.target.value)}/>
                    </div>
                </div>
                <div className="smBox">
                    <p className="text">비밀번호</p>
                    <div className="signUpBorder">
                        <input type="password" placeholder="Password" className="signUp"  onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                <div className="smBox">
                    <p className="text">비밀번호 확인</p>
                    <div className="signUpBorder">
                        <input type="password" placeholder="Password" className="signUp"  onChange={(event) => setPwck(event.target.value)} onkeyup={passwordCheckFunc}/>
                    </div>
                </div>
                <button className="signUpButton" onClick={postSignUpData}>Log In</button>
            </form>
        </div>
    )
} */

export default SignUp;