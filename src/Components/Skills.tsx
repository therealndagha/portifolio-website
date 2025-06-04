import { mySkills } from "@/utilities/Skills";
import SkillCard from "./SkillCard";

const Skills = () =>{
    return (
        <section className="other-sections-container" id="skills">
             <div className="flex flex-col items-center justify-center space-y-5">
                   <h1 className="text-2xl text-blue-950 font-anton">My Skills</h1>
                   <p className="font-open-sans  text-slate-600 text-center">As a Computer Systems professional I have a wide range of technical skills and knowledge not only limited to:</p>
                   <div className="flex flex-col space-y-10">
                        {
                            mySkills.map((skill)=> ( <SkillCard key={skill.id} {...skill} /> ) )
                        }
                   </div>
             </div>
        </section>
    )
}

export default Skills;