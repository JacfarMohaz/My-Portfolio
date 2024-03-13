import jm9withCode from "../assets/jm9with code.jpg"

function About() {
    return <div id="about">
        <h1 className="text-4xl text-[#b17940] font-bold text-center mt-10 md:mb-5 mb-10">About</h1>
        <div className="sm:flex md:gap-10 justify-around">
            <div className="pl-10 lg:pt-0 md:min-[800px]:pt-10">
                <img className="lg:w-[30em] w-[20em] rounded-xl" src={jm9withCode} />
            </div>

            <div className="sm:pr-10 pr-5">
                <div>

                    <p className="lg:text-xl text-md md:min-[800px]:text-[15px] text-white font-bold mt-10 md:mb-2 mb-5 pl-10 sm:pl-5">I am a full-stack developer with a passion for building dynamic <br />
                        and user-friendly web applications. I enjoy working <br />
                        on both the front-end and back-end aspects of web <br />
                        development, allowing me to craft a cohesive <br />
                        experience from design to functionality.</p>
                </div>

                <div>
                    <div className="flex gap-5 sm:pl-14 md:min-[800px]:pl-0 pl-10 pt-3 pb-10">
                        <a href="https://github.com/JacfarMohaz"><div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                            <i class="fa-brands text-4xl  pl-1 pt-1 fa-github"></i>
                        </div></a>

                        <a href="mailto:jacfarmahamed77@gmail.com"><div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                            <i class="fa-solid text-3xl pl-2 pt-1 fa-envelope"></i>
                        </div></a>

                        <a href="https://www.linkedin.com/in/abdullahi-mohamed-yusuf-jacfar-24320b1b8/"><div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                            <i class="fa-brands text-3xl pl-2 pt-1 fa-linkedin"></i>
                        </div></a>

                        <a href="https://www.instagram.com/iamjacfar_mohaz/"><div className="w-11 h-11 rounded-full bg-[#96572c] text-white hover:bg-[#e9bf69] hover:text-[#b17940]">
                            <i class="fa-brands text-3xl pl-2 pt-1 fa-instagram"></i>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default About