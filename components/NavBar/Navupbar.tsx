import Link from "next/link"

export default function Navupbar() {
    return (
        <header className="h-10 bg-purple-300 text-center">
            <Link href="/">
                <p>TenniSchool</p>
            </Link>
        </header>
    )
}