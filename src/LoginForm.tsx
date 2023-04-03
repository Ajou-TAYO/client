import { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
    // const [isOpen, setIsOpen] = useState(true);
    
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    
    function postLoginData() {
        console.log(id, password);
        return axios.post('http://localhost:8080/user/login', {
          Email: id,
          Password: password
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

    const LoginFunc = (e) => {
        e.preventDefault();
    }

    return (
        <div className="wrap">
            <h1 className="loginText">Log In</h1>
            
            <form onSubmit={LoginFunc} className="loginBox">
                <div className="loginBorder">
                    <input type="text" placeholder="Email" className="login"  onChange={(event) => setId(event.target.value)}/>
                </div>
                <div className="loginBorder">
                    <input type="password" placeholder="Password" className="login"  onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button className="loginButton" onClick={postLoginData}>Log In</button>
            </form>
        </div>
    );
}

export default LoginForm;
