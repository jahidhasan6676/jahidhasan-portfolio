import LazyLoad from "react-lazyload";
import SkillCard from "../../components/SkillCard";




const skills = [
    { title: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { title: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { title: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
    { title: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { title: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
    { title: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { title: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { title: 'Mongodb', icon: 'https://skillicons.dev/icons?i=mongodb' },

];

const Skill = () => {
    return (
        <div id="skill" className="w-11/12 lg:w-10/12 mx-auto py-20">
            <h2 className="pb-10 text-xl font-semibold text-center text-white">Skill</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-8 ">
                {skills.map((skill, index) => (
                    <LazyLoad key={index}>
                        <SkillCard title={skill.title} icon={skill.icon} />
                    </LazyLoad>
                ))}
            </div>
        </div>

    );
};

export default Skill;
