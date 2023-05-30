import Navupbar from "@/components/NavBar/Navupbar"
import LoginComponent from "@/components/Login/LoginComponent"
import SignUpComponent from "@/components/SignUP/SignUpComponent";

import { useState } from "react"

export default function Announcement() {

    const [issignup, setIsSignup] = useState(false);


    return (
        <div>
            <Navupbar />
        </div>
    )
}