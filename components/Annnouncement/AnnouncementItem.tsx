
export default function AnnouncemntItem({ data }) {


    return (
        <div className="bg-slate-100 border-2">

            <p>{data.summary}</p>
            <div className="flex justify-between">
                <p className="align-start">{data.people}</p>
                <p className="align-end">{data.day}</p>
            </div>
        </div >
    )
}