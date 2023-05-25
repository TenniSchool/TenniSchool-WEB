import Navupbar from "@/components/NavBar/navupbar"
import LoginComponent from "@/components/Login/LoginComponent"
import SignUpComponent from "@/components/SignUP/SignUpComponent";

import { useState } from "react"

export default function loginpage() {

    const [is_signup, setIs_singup] = useState(false);


    return (
        <div>
            <Navupbar />
            {!is_signup ?
                <LoginComponent setIs_singup={setIs_singup} />
                : <SignUpComponent />
            }
        </div>
    )
}