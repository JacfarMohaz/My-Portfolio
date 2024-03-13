import challengeOne from "../assets/chalenge one.png"
import challengeTwo from "../assets/chalenge two.png"
import challengeThree from "../assets/chalenge three.png"


function Chalenges() {
    return <div>
        <h1 className="text-4xl text-[#b17940] font-bold text-center mt-10 md:mb-5 mb-10">Challengers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:min-[800px]:grid-cols-2 sm:gap-4 gap-10 mt-10 sm:pl-0 pl-11">
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] sm:ml-28 md:min-[800px]:ml-10 transition-all duration-500 hover:scale-110">
                <img className="w-80" src={challengeOne} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Hotel Booking Benefits</h3>
            </div>

            {/* two */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] sm:ml-20 md:min-[800px]:ml-4 transition-all duration-500 hover:scale-110">
                <img className="w-80" src={challengeTwo} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Review</h3>
            </div>

            {/* three */}
            <div className="bg-white p-4 rounded-lg shadow-lg shadow-black w-80 border-4 border-[#e9bf69] sm:ml-8 md:min-[800px]:ml-10 transition-all duration-500 hover:scale-110">
                <img className="w-80 h-32" src={challengeThree} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Image Black and White</h3>
            </div>
        </div>

    </div>
}

export default Chalenges