import { useRouter } from 'next/router'

export default function HomeMenu() {

    const router = useRouter();

    function analyzeBtnonClick() {
        router.push("/analyzepage");
    }
    return (
        <div className="grid gap-4 grid-cols-4 grid-rows-3 bg-blue-100">
            <button className="bg-slate-300" onClick={analyzeBtnonClick}>분석</button>
            <button className="bg-slate-300">용품</button>
            <button className="bg-slate-300">매칭</button>
            <button className="bg-slate-300">레슨</button>

            <button className="bg-slate-300">코트</button>
            <button className="bg-slate-300">게시판</button>
            <button className="bg-slate-300">공지사항</button>
            <button className="bg-slate-300">8번기능</button>
        </div>
    )
}