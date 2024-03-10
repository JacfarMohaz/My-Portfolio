import abdulahi from "../assets/abdulahi.jpg"

function Resume() {
    return <div className="">
        <div className="sm:w-[45%] sm:h-[60em] bg-white sm:ml-[30%] flex">
            <div className="bg-[#96572c] sm:h-[60em] w-[42%]">
                <div className="pt-4 pl-14">
                    <img className="rounded-full w-24 h-24" src={abdulahi} />
                </div>

                {/* personal info */}
                <div className="text-white">
                    <h1 className="text-2xl font-semibold pt-6 pl-4">Personal Info</h1>
                    <div className="flex pt-5 gap-2 pl-2">
                        <i class="fa-solid  fa-location-dot"></i>
                        <h1 className="text-sm">Jaale siyaar RD, Mogadishu</h1>
                    </div>

                    <div className="flex pt-5 gap-2 pl-2">
                        <i class="fa-solid  fa-phone"></i>
                        <h1 className="text-sm">+252618704206</h1>
                    </div>

                    <div className="flex pt-5 gap-2 pl-2">
                        <i class="fa-regular fa-envelope"></i>
                        <h1 className="text-xs">jacfarmahamed77@gmail.com</h1>
                    </div>
                </div>

                {/* skills */}
                <div className="text-white">
                    <h1 className="text-2xl font-semibold pt-6 pl-4">Skills</h1>
                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">HTML</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-5/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">css</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-4/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">JavaScript</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-5/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">React</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-5/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">Express js</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-6/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">MongoDB</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-4/6 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* langues */}
                <div className="text-white">
                    <h1 className="text-2xl font-semibold pt-6 pl-4">Langues</h1>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">Somali</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-6/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">English</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-3/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-4 pl-2">
                        <h1 className="text-xl pl-4 font-semibold">Arabic</h1>
                        <div className="bg-gray-500 rounded-full sm:w-40 w-36 h-1.5">
                            <div className="bg-[#e9bf69] h-1.5 w-2/6 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* dhanka kale */}
            <div>
                <div className="pt-10 pl-4">
                    <h1 className="text-4xl font-semibold">Abdulahi Mohamed Yusuf</h1>
                </div>

                {/* summary */}
                <div className="bg-[#96572c] mt-8">
                    <h1 className="text-2xl pl-2 text-white">Summary</h1>
                </div>
                <div className="px-5 pt-2">
                    <p className="text-sm">I am a highly -skilled expert with a web design, Programming , and project management .
                        I have great technical abilities , allowing me to work with a diverse group of Cliental.
                        I am looking for new challenges to help me grow and enhance my abilities.</p>
                </div>

                {/* education */}
                <div className="bg-[#96572c] mt-8">
                    <h1 className="text-2xl pl-2 text-white">Education</h1>
                </div>

                <div className="px-5 pt-2">
                    <h1>Bachelor of Science in Computer Science , University of Somalia
                        September 2019 - August 2023</h1> <br />
                    <h1>Banaadir, Al-Hilal
                        August 2014 - May 2018</h1> <br />
                    <h1>Diploma in Full-Stack Web Development, Rise Academy
                        November 2023 - February 2024</h1> <br />
                    <h1>Diploma in Graphic Design, Garaadso
                        April 2021 - June 2021</h1>
                </div>

                {/* Hobbies */}
                <div className="bg-[#96572c] mt-8">
                    <h1 className="text-2xl pl-2 text-white">Hobbies</h1>
                </div>

                <div className="px-5 pt-2">
                    <ul>
                        <li>Readin</li>
                        <li>Coding</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
}

export default Resume