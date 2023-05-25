import Image from "next/image";
import uploadeimage from "../../public/upload.jpeg"
import React, { useRef } from "react";
import { useState, useEffect } from "react"

export default function Upload() {

    const selectFile = useRef(null);
    const [video, setVideo] = useState(null);
    const [imageSrc, setImageSrc] = useState('');

    const [userImage, setUserImage] = useState("");

    const handleChangeFile = (temp: any) => {
        let reader = new FileReader();
        if (temp) {
            reader.readAsDataURL(temp);
        }
        reader.onloadend = () => {
            const resultImage = reader.result;
            setUserImage(resultImage);
        };


    }
    const onCickImageUpload = () => {
        selectFile.current.click();
    };

    useEffect(() => {
        if (video) {
            handleChangeFile(video);
        }
    }, [video]);
    return (
        <div className="text-center">
            {video === null ?
                <div>
                    <input
                        ref={selectFile}
                        type="file"
                        onChange={(event) => setVideo(event.target.files[0])}
                        accept="image/jpg, image/jpeg, image/png"
                        style={{ display: 'none' }}
                    />
                    <button className="bg-slate-200" onClick={onCickImageUpload}>
                        <Image src={uploadeimage} alt="" width={500} height={300} />
                    </button>
                    <h3>당신의 영상을 업로드 해주세요.</h3>
                </div>
                :
                <div className="items-center">
                    <Image src={userImage} alt="" width={300} height={300} />
                    <div>
                        <button>
                            영상저장
                        </button>
                    </div>
                    <div>
                        <button>
                            레슨중계
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}