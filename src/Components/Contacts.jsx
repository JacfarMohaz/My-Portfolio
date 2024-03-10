import jm9Logo from "../assets/jm9 logo.png"


function Contacts() {
    return <div className="sm:flex justify-between sm:pt-20 pb-5">
        <div>
            <img className="w-60 mt-32 sm:ml-56 ml-14" src={jm9Logo} />
        </div>

        <div className="sm:pr-[20em] sm:pl-0 pl-10">
            <h1 className="text-4xl text-[#b17940] font-bold text-center mt-10 md:mb-5 mb-10">Get in <span className="text-white">Touch</span></h1>
            <div className="bg-[#96572c] w-[20em] h-72 rounded-2xl">
                <a href="https://github.com/JacfarMohaz"><div className="text-white hover:text-[#e9bf69] flex ml-10 pt-2">
                    <i class="fa-brands text-4xl pt-2 fa-github"></i>
                    <h1 className="pl-4 pt-4">JacfarMohaz</h1>
                </div></a>

                <a href="mailto:jacfarmahamed77@gmail.com"><div className="text-white hover:text-[#e9bf69] flex ml-10 pt-2">
                    <i class="fa-regular text-4xl pt-2 fa-envelope"></i>
                    <h1 className="pl-4 pt-4">jacfarmahamed77@gmail.com</h1>
                </div></a>

                <a href="tel:+252618704206"><div className="text-white hover:text-[#e9bf69] flex ml-10 pt-2">
                    <i class="fa-brands text-4xl pt-2 fa-whatsapp"></i>
                    <h1 className="pl-4 pt-4">+252618704206</h1>
                </div></a>

                <a href="https://www.linkedin.com/in/abdullahi-mohamed-yusuf-jacfar-24320b1b8/"><div className="text-white hover:text-[#e9bf69] flex ml-10 pt-2">
                    <i class="fa-brands text-4xl pt-2 fa-linkedin"></i>
                    <h1 className="pl-4 pt-4">Abdullahi Mohamed Yusuf</h1>
                </div></a>

                <a href="https://www.instagram.com/iamjacfar_mohaz/"><div className="text-white hover:text-[#e9bf69] flex ml-10 pt-2">
                    <i class="fa-brands text-4xl pt-2 fa-instagram"></i>
                    <h1 className="pl-4 pt-4">iamjacfar_mohaz</h1>
                </div></a>

            </div>

        </div>


    </div>
}

export default Contacts