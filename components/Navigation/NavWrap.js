import { useState } from "react"
import NavBar from "./NavBar"
import NavButton from "./NavButton"
import NavSvg from "./NavSvg"
import NavModalBtns from "./NavModalBtns"
import NavModalItems from "./NavModalItems"

const NavWrap = () => {
    const [showNav, setShowNav] = useState(false);
    const [showConnect, setShowConnect] = useState(false);

    const changeHandler = () => {
        setShowNav(!showNav);
    };
    return (
        <div className="flex items-center justify-between min-h-[160px] mx-[150px] ms:mx-[25px]">
            <NavBar />
            <NavButton />
            <div className="hidden ms:block">
                <NavSvg showNav={showNav} changeNav={changeHandler} />
                {showNav ?
                    <div className={`bg-white absolute top-[130px] left-[20px] w-[90vw] ${showConnect ? "h-[500px]" : "h-[350px]"} p-[30px] rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]`}>
                        <ul className="min-h-[55%] flex items-center flex-col border-b-[2px]">
                            <li className="flex items-center pb-[20px]"><a href="#" className="ubuntu text-[20px] text-[#1f3f5b] font-medium pr-[10px]">Product</a><svg xmlns="http://www.w3.org/2000/svg" className="pt-[3px]" width="10" height="10"><path fill="none" stroke="#FF7B86" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4" /></svg></li>
                            <li className="flex items-center pb-[20px]"><a href="#" className="ubuntu text-[20px] text-[#1f3f5b] font-medium pr-[10px]">Company</a><svg xmlns="http://www.w3.org/2000/svg" className="pt-[3px]" width="10" height="10"><path fill="none" stroke="#FF7B86" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4" /></svg></li>
                            <li className="flex items-center pb-[20px]"><a href="#" className={`ubuntu text-[20px] ${showConnect ? "light-blue" : "text-[#1f3f5b]"} font-medium pr-[10px]`} onClick={() => setShowConnect(!showConnect)}>Connect</a><svg xmlns="http://www.w3.org/2000/svg" className={showConnect ? "pt-[3px] rotate-180" : "pt-[3px]"} width="10" height="10"><path fill="none" stroke="#FF7B86" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4" /></svg></li>
                            {showConnect ? <NavModalItems /> : null}
                        </ul>
                        <NavModalBtns />
                    </div> : null}
            </div>
        </div>
    )
}

export default NavWrap
