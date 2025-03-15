import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProjectsCard from "../../components/ProjectsCard";


const Projects = () => {
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        try {
            axios.get('/projects.json')
                .then(res => setProjectsData(res.data))
        } catch (error) {
            toast.error(error.code);
        }
    }, []);
    return (
        <div id="projects" className="w-11/12 lg:w-10/12 mx-auto text-white pb-20">
            <h2 className="text-xl font-semibold text-center mb-10">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projectsData.map(project => <ProjectsCard key={project.id} project={project}></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;