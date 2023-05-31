export default function Shopmenu({ setNowCatagory }) {

    return (
        <div className="grid grid-cols-4 gap-5">
            <div>
                <button onClick={(() => setNowCatagory("racket"))}>라켓</button>
            </div>
            <div>
                <button onClick={(() => setNowCatagory("shoe"))}>테니스화</button>
            </div>
            <div>
                <button onClick={(() => setNowCatagory("cloth"))}>테니스복</button>
            </div>
            <div>
                <button onClick={(() => setNowCatagory("ball"))}>테니스공</button>
            </div>
        </div>
    )
}