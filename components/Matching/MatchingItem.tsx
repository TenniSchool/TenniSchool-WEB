
export default function MatchingItem({ data }) {


    return (
        <div className="bg-blue-100">

            <div className="bg-green-100 flex gap-20">
                <p className="align-middle">{data.nickname}</p>
                <p className="align-middle">20대/남성/초급자 </p>
            </div>
            <div className="flex">
                <label> 테니스장 :  </label>
                <p>{data.where}</p>
            </div>
            <div className="grid gap-1 grid-cols-3">

                <div className="flex">
                    <label> 게임종류 : </label>
                    <p>{data.game}</p>
                </div>
                <div className="flex">
                    <label> 모집인원 :  </label>
                    <p>{data.people}</p>
                </div>
                <div className="flex">
                    <label> 실내/야외 : </label>
                    <p>{data.inout}</p>
                </div>
                <div className="flex">
                    <label> 날짜 :  </label>
                    <p>{data.day}</p>
                </div>
                <div className="flex">
                    <label> 시간 : </label>
                    <p>{data.time}</p>
                </div>

            </div>
        </div>
    )
}