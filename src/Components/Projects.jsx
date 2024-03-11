import projectOne from "../assets/project one.png"
import projectTwo from "../assets/project two.png"
import projectThree from "../assets/project three.png"

function Projects() {
    return <div id="projects">
        <h1 className="text-4xl text-[#b17940] font-bold text-center mt-10 md:mb-5 mb-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:max-[800px]:grid-cols-2 sm:gap-4 gap-10 mt-10 sm:pl-0 pl-14">
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] sm:ml-28 md:max-[800px]:ml-10">
                <img className="w-80" src={projectOne} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Hotel Booking Website</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">HTML and CSS</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">It's a responsive website, I built it with html and css, it's very beautiful and eye-catching</p>

                <a href="https://github.com/JacfarMohaz/Hotel-Wepsite"><button className="bg-[#e9bf69] px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> View Source Code</button></a>
            </div>

            {/* two */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] sm:ml-20 md:max-[800px]:ml-4">
                <img className="w-80" src={projectTwo} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">E-commerce Website</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">React js, and Redux</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">This project is just a frontend, but it does a lot of work like I do with React Redux</p>

                <div className="flex">
                    <a href="https://github.com/JacfarMohaz/E-Commertce-React-Js"><button className="bg-[#e9bf69] px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href="https://e-commerce-web-peach.vercel.app/"><button className="bg-[#e9bf69] px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i> Live</button></a>
                </div>

            </div>

            {/* three */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] sm:ml-10 md:max-[800px]:ml-10">
                <img className="w-80" src={projectThree} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Full-stack app Blood Bank</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Mern Stack</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">This project is full-stack and has two parts: a public part (website) and a private part (dashboard) which works as a blood bank management system.</p>

                <div className="flex">
                    <a href="https://github.com/JacfarMohaz/frontend"><button className="bg-[#e9bf69] px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href="https://blood-bank-black.vercel.app/"><button className="bg-[#e9bf69] px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i> Live</button></a>
                </div>

            </div>
        </div>

    </div>
}

export default Projects