import Image from "next/image";
import uploadeimage from "../../public/upload.jpeg"
import { useRef } from "react";

export default function Upload() {

    const selectFile = useRef("");

    const buttonStyle = {
        width: '150px',
        height: '50px',
        backgroundColor: 'blue',
        color: 'white',
    };

    return (
        <div className="text-center">
            <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                multiple
                style={{ display: 'none' }}
            />
            <button className="bg-slate-200" onClick={() => selectFile.current. ()}>
                <Image src={uploadeimage} alt="" />
            </button>
            <h3>당신의 영상을 업로드 해주세요.</h3>
        </div>
    )
}