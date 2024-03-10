import About from "../Components/About"
import Chalenges from "../Components/Chalenges"
import Contacts from "../Components/Contacts"
import Header from "../Components/Header"
import Projects from "../Components/Projects"
import Showcase from "../Components/Showcase"
import TechStack from "../Components/TechStack"

function Home() {
  return <div>
    <Header />
    <Showcase />
    <About />
    <Projects />
    <Chalenges />
    <TechStack />
    <Contacts />
  </div>
}

export default Home
