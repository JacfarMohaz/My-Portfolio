import jm9withCode from "../assets/jm9with code.jpg"

function About() {
    return <div>
        <h1 className="text-4xl text-[#b17940] font-bold text-center mt-10 md:mb-5 mb-10">About</h1>
        <div className="sm:flex justify-around">
            <div className="sm:pl-10 pl-10">
                <img className="sm:w-[30em] w-[20em] rounded-xl" src={jm9withCode} />
            </div>

            <div className="sm:pr-10 pr-5">
                <div>

                    <p className="text-xl text-white font-bold mt-10 md:mb-2 mb-5 pl-10 sm:pl-0">I am a full-stack developer with a passion for building dynamic <br />
                        and user-friendly web applications. I enjoy working <br />
                        on both the front-end and back-end aspects of web <br />
                        development, allowing me to craft a cohesive <br />
                        experience from design to functionality.</p>
                </div>

                <div>
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
            </div>
        </div>
    </div>
}

export default About