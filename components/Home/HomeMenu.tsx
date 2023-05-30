import { useRouter } from 'next/router'
import Link from "next/link"

export default function HomeMenu() {

    const router = useRouter();

    function analyzeBtnonClick() {
        router.push("/analyzepage");
    }
    function matchingBtnonClick() {
        router.push("/matching");
    }
    return (
        <div className="grid gap-4 grid-cols-4 grid-rows-3 bg-blue-100">
            <button className="bg-slate-300" onClick={analyzeBtnonClick}>분석</button>
            <Link className="bg-slate-300 text-center" href="/shop">
                <button className="bg-slate-300">용품</button>
            </Link>
            <button className="bg-slate-300" onClick={matchingBtnonClick}>매칭</button>
            <Link className="bg-slate-300 text-center" href="/lesson">
                <button >레슨</button>
            </Link>
            <Link className="bg-slate-300 text-center" href="/reservation">
                <button className="bg-slate-300">코트</button>
            </Link>
            <Link className="bg-slate-300 text-center" href="/board">
                <button className="bg-slate-300">게시판</button>
            </Link>
            <Link className="bg-slate-300 text-center" href="/announcement">
                <button className="bg-slate-300">공지사항</button>
            </Link>
            <Link className="bg-slate-300 text-center" href="/temppage">
                <button className="bg-slate-300">8번기능</button>
            </Link>
        </div>
    )
}