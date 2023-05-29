import { useState } from 'react'

export default function UploadMatching({ setOnUploadMatching, setItems }) {

    const [nickname, setNickname] = useState("");
    const [where, setWhere] = useState("");
    const [game, setGame] = useState("");
    const [people, setPeople] = useState("");
    const [inout, setInout] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");

    function onClickSubmitBtn() {
        setItems((event: any) => [...event, { nickname, where, game, people, inout, day, time }])
        setOnUploadMatching(false);
    }

    return (
        <div>
            <div className="grid gap-2 grid-cols-2 bg-blue-100">
                <label> 닉네임 </label>
                <input onChange={(event) => setNickname(event.target.value)} />
                <label> 테니스장 </label>
                <input onChange={(event) => setWhere(event.target.value)} />
                <label> 단식/복식 </label>
                <input onChange={(event) => setGame(event.target.value)} />
                <label> 모집 인원 </label>
                <input onChange={(event) => setPeople(event.target.value)} />
                <label> 실내/ 야외 </label>
                <input onChange={(event) => setInout(event.target.value)} />
                <label> 날짜 </label>
                <input onChange={(event) => setDay(event.target.value)} />
                <label> 시간 </label>
                <input onChange={(event) => setTime(event.target.value)} />
            </div>
            <div className="flex gap-5 ">
                <button className="bg-green-300" onClick={onClickSubmitBtn}> 등록하기 </button>
                <button className="bg-green-300"> 취소하기 </button>
            </div>
        </div>
    )
}