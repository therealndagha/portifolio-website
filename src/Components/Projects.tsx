import { myProjects } from "@/utilities/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () =>{
    return (
        <section className="other-sections-container" id="projects">
            <div className="flex flex-col items-center justify-center space-y-5">
                <h1 className="text-2xl font-anton text-blue-950">Projects and Achievements</h1>
                 <p className="font-opens-sans text-slate-600 text-center text-lg">Throughout the years I have been involved in a number of projects that have showcasted my ability to apply Computer Science to solve real world problems.</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-10 mt-10">
               {myProjects.map((project)=>( <ProjectCard key={project.id} {...project} /> )) }
            </div>
        </section>
    )
}

export default Projects;