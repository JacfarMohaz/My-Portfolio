import { useState } from "react"
import jm9Logo from "../assets/jm9 logo.png"

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }


    return <div className="flex justify-between text-white sm:px-40 md:px-20 sm:py-4 px-2 py-4">
        <div>
            <img className="w-28" src={jm9Logo} />
        </div>
        <i onClick={handleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-4xl absolute text-[#96572c] right-4 sm:hidden fa-bars"></i>
        <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-4xl absolute text-[#96572c] right-4 hidden fa-xmark"></i>
        <nav className="hidden md:flex space-x-10">
            <a href="#" className="hover:text-[#96572c] text-4xl">Home</a>
            <a href="#" className="hover:text-[#96572c] text-4xl">About</a>
            <a href="#" className="hover:text-[#96572c] text-4xl">Projects</a>
        </nav>

        {/* small screen */}
        <div style={{ display: isOpen === true ? "block" : "" }} className="hidden">
            <nav className="flex flex-col space-y-4 pt-16 pr-10 text-3xl">
                <a href="#" className="hover:text-[#96572c] text-4xl">Home</a>
                <a href="#" className="hover:text-[#96572c] text-4xl">About</a>
                <a href="#" className="hover:text-[#96572c] text-4xl">Projects</a>
            </nav>
        </div>
    </div>
}

export default Header