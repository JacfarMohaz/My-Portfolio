import jacfar from "../assets/jacfar.jpg"

function Showcase() {
    return <div>
        <div className="text-white pt-10 md:pl-[25em]  pl-2">
            <div className="flex ">
                <div>
                    <h1 className="text-4xl font-bold pl-24 pb-4"><span className="text-[#96572c]">Hi</span> I am</h1>
                    <h1 className="text-3xl font-bold pb-2">Abdulahi Mohamed Yusuf</h1>
                    <p className="text-xl font-thin pl-24 text-[#b17940]">Full Stack Developer</p>
                </div>

                <div className="flex gap-5 pl-14 pt-3 pb-10">
                    <div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                        <i class="fa-brands text-4xl  pl-1 pt-1 fa-github"></i>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                        <i class="fa-solid text-3xl pl-2 pt-1 fa-envelope"></i>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                        <i class="fa-brands text-3xl pl-2 pt-1 fa-linkedin"></i>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                        <i class="fa-brands text-3xl pl-2 pt-1 fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div>
                <img className="rounded-full w-[19em] h-[19em] md:ml-4 ml-8 px-2 py-2" src={jacfar} />
            </div>
        </div>


    </div>
}

export default Showcase