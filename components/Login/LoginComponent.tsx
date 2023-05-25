import { useEffect, useState } from "react"

export default function LoginComponent({ setIs_singup }) {

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const loginBtnOnClick = () => {

    }
    const signupBtnOnClick = () => {
        setIs_singup(true);
    }
    return (
        <div>
            <h1> 로그인 폼 </h1>
            <form>
                <div>
                    <label> ID: </label>
                    <input className="id" onChange={(event) => setInputId(event.target.value)} />
                </div>
                <div>
                    <label> PassWord: </label>
                    <input className="pw" onChange={(event) => setInputPw(event.target.value)} />
                </div>
                <div className="grid gap-2 col-2 row-2">
                    <button onClick={loginBtnOnClick}>
                        로그인
                    </button>
                    <button onClick={signupBtnOnClick}>
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    )
}