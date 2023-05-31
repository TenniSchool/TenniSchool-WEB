import MatchingItem from "@/components/Matching/MatchingItem";
import Navupbar from "/components/NavBar/navupbar"
import { useState } from "react"
import UploadMatching from "@/components/Matching/UploadMatching";

export default function Matching() {

    const [onUploadMatching, setOnUploadMatching] = useState(false);

    const data =
        [
            {
                nickname: "테니스왕 덕봉킴",
                where: "신도림역 테니스장",
                game: "단식",
                people: "2명",
                inout: "야외",
                day: "2023.6.12",
                time: "17시~19시"
            },
            {
                nickname: "발음좋은 인터프리터 충규림",
                where: "대림동 테니스장",
                game: "복식",
                people: "2명",
                inout: "야외",
                day: "2023.6.14",
                time: "17시~20시"
            },


        ]

    const [items, setItems] = useState(data)

    function uploadOnClick() {
        setOnUploadMatching(true);
    }

    return (
        <div>
            <Navupbar />
            <button className="bg-yellow-200" onClick={uploadOnClick}> 매칭공고 올리기 </button>
            {
                onUploadMatching ?
                    <UploadMatching setItems={setItems} setOnUploadMatching={setOnUploadMatching} />
                    :
                    items.map((item, index) =>
                        <MatchingItem key={index} data={item} />
                    )
            }
        </div>
    )
}