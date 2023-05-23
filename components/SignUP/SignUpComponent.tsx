import { useEffect, useState } from "react"

export default function SignUpComponent() {

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const loginBtnOnClick = () => {

    }
    return (
        <div>
            <form>
                <div>
                    <label> ID: </label>
                    <input className="id" onChange={(event) => setInputId(event.target.value)} />
                </div>
                <div>
                    <label> PassWord: </label>
                    <input className="pw" onChange={(event) => setInputPw(event.target.value)} />
                </div>
                <button onClick={loginBtnOnClick}>
                    로그인
                </button>
            </form>
        </div>
    )
}