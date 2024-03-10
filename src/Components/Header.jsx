import { useRef, useState } from "react"
import jm9Logo from "../assets/jm9 logo.png"
import { Link } from "react-router-dom"

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    const aboutRef = useRef(null);

    const handleLinkClick = (section) => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', });
        }
    };


    return <div className="flex justify-between text-white sm:px-40 md:px-20 sm:py-4 px-2 py-4">
        <Link to="/"><div>
            <img className="w-28" src={jm9Logo} />
        </div></Link>
        <i onClick={handleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-4xl absolute text-[#96572c] right-4 sm:hidden fa-bars"></i>
        <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-4xl absolute text-[#96572c] right-4 hidden fa-xmark"></i>
        <div className="hidden md:flex space-x-10">
            <Link className="hover:text-[#96572c] text-4xl">Home</Link>
            <Link onClick={() => handleLinkClick("about")} className="hover:text-[#96572c] text-4xl">About</Link>
            <Link onClick={() => handleLinkClick("projects")} className="hover:text-[#96572c] text-4xl">Projects</Link>
        </div>

        {/* small screen */}
        <div style={{ display: isOpen === true ? "block" : "" }} className="hidden">
            <div className="flex flex-col space-y-4 pt-16 pr-10 text-3xl">
                <Link onClick={() => handleLinkClick("home")} className="hover:text-[#96572c] text-4xl">Home</Link>
                <Link onClick={() => handleLinkClick("about")} className="hover:text-[#96572c] text-4xl">About</Link>
                <Link onClick={() => handleLinkClick("projects")} className="hover:text-[#96572c] text-4xl">Projects</Link>
            </div>
        </div>
    </div>
}

export default Header