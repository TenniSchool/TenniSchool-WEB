import Navupbar from "/components/NavBar/navupbar"
import { useState } from "react"
import AnnouncemntItem from "@/components/Annnouncement/AnnouncementItem"

export default function Announcement지() {

    const data =
        [
            {
                people: "나현호",
                summary: "[공지사항] 나현호배 제 1차 테니스대회",
                day: "2023.5.30",
            },
            {
                people: "나현호",
                summary: "[공지사항] 테니스쿨 이용안내",
                day: "2023.5.30",
            },
            {
                people: "나현호",
                summary: "[공지사항] 불법프로그램사용자제제 안내",
                day: "2023.5.30",
            },
            {
                people: "나현호",
                summary: "[공지사항] 이용약관 1.0",
                day: "2023.5.30",
            },
        


        ]

    const [items, setItems] = useState(data)

    function uploadOnClick() {
    }

    return (
        <div>
            <Navupbar />
            {
                items.map((item, index) =>
                    <AnnouncemntItem key={index} data={item} />
                )
            }
        </div>
    )
}