import { useEffect, useState } from "react"

export default function SignUpComponent() {

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputTel, setInputTel] = useState("");


    const loginBtnOnClick = () => {

    }
    return (
        <div>
            <h1> 회원가입 form </h1>

            <form>
                <div>
                    <label> ID: </label>
                    <input className="id" onChange={(event) => setInputId(event.target.value)} />
                </div>
                <div>
                    <label> PassWord: </label>
                    <input className="pw" onChange={(event) => setInputPw(event.target.value)} />
                </div>
                <div>
                    <label> 이메일 : </label>
                    <input className="id" onChange={(event) => setInputEmail(event.target.value)} />
                </div>
                <div>
                    <label> 연락처: </label>
                    <input className="pw" onChange={(event) => setInputTel(event.target.value)} />
                </div>
                <button onClick={loginBtnOnClick}>
                    회원가입
                </button>
            </form>
        </div>
    )
}