import Navupbar from "@/components/NavBar/navupbar"
import LoginComponent from "@/components/Login/LoginComponent"
import SignUpComponent from "@/components/SignUP/SignUpComponent";

import { useState } from "react"

export default function Loginpage() {

    const [issignup, setIsSignup] = useState(false);


    return (
        <div>
            <Navupbar />
            {!issignup ?
                <LoginComponent setIs_singup={setIsSignup} />
                : <SignUpComponent />
            }
        </div>
    )
}