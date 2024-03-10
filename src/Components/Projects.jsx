import projectOne from "../assets/project one.png"
import projectTwo from "../assets/project two.png"
import projectThree from "../assets/project three.png"

function Projects() {
    return <div>
        <h1 className="text-4xl text-[#b17940] font-bold text-center mt-10 md:mb-5 mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-10 mt-10 md:pl-0 pl-10">
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] md:ml-28">
                <img className="w-80" src={projectOne} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Hotel Booking Website</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">HTML and CSS</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">It's a responsive website, I built it with html and css, it's very beautiful and eye-catching</p>

                <button className="bg-[#e9bf69] px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> View Source Code</button>
            </div>

            {/* two */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] md:ml-16">
                <img className="w-80" src={projectTwo} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">E-commerce Website</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">React js, and Redux</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">This project is just a frontend, but it does a lot of work like I do with React Redux</p>

                <button className="bg-[#e9bf69] px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> View Source Code</button>

            </div>

            {/* three */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] md:ml-6">
                <img className="w-80" src={projectThree} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Full-stack app Blood Bank</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2">Mern Stack</h3>
                    <i class="fa-solid pt-2 fa-screwdriver-wrench"></i>
                </div>
                <p className="text-gray-700 mb-4">This project is full-stack and has two parts: a public part (website) and a private part (dashboard) which works as a blood bank management system.</p>

                <div className="flex">
                    <button className="bg-[#e9bf69] px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button>
                    <button className="bg-[#e9bf69] px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i> Live</button>
                </div>

            </div>
        </div>

    </div>
}

export default Projects