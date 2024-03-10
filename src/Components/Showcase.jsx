import { Link } from "react-router-dom"
import jacfar from "../assets/jacfar.jpg"

function Showcase() {
    return <div>
        <div className="text-white sm:pt-10 pt-0 sm:pl-2 pl-5 sm:flex justify-around">
            <div className="pt-16">
                <h1 className="text-4xl font-bold pl-24 pb-4"><span className="text-[#96572c]">Hi</span> I am</h1>
                <h1 className="sm:text-3xl text-2xl sm:pl-0 pl-8 font-bold pb-2">Abdulahi Mohamed Yusuf</h1>
                <p className="text-xl font-thin pl-24 text-[#b17940]">Full Stack Developer</p>
                <div className="mt-5 ml-28">
                    <Link to="/resume" className="bg-[#96572c] hover:bg-[#b17940] px-6 py-2 rounded-lg text-xl">Resume</Link>
                </div>
            </div>

            <div className="pr-10 pt-10 sm:pt-0">
                <img className="rounded-full w-[19em] h-[19em] md:mr-4 ml-8 px-2 py-2" src={jacfar} />
            </div>
        </div>


    </div>
}

export default Showcase