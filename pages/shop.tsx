import Navupbar from "@/components/NavBar/Navupbar"
import Shopmenu from "@/components/Shop/shopmenu";
import Shopitemlist from "@/components/Shop/shopitemlist";

import { useState } from "react"

export default function Shop() {

    const [issignup, setIsSignup] = useState(false);
    const [nowCatagory, setNowCatagory] = useState("racket");

    return (
        <div>
            <Navupbar />
            <Shopmenu setNowCatagory={setNowCatagory} />
            <Shopitemlist />
        </div>
    )
}