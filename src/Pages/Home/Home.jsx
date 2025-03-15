import Test from "../Test";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skill from "./Skill";


const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection></HeroSection>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;