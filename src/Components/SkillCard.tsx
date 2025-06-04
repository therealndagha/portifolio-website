
type SkillCardPropsType = {
    id: number,
  category: string,
  description: string,
  skills: string[]

}

const SkillCard = ({category, description, id,skills}: SkillCardPropsType) =>{
    return (
        <div className="flex flex-col sm:flex-row space-y-8">
                <div className="flex flex-col space-y-10 justify-center items-center">
                        <div className="flex items-center justify-center space-x-5">
                            <span className="bg-some-blue-shade px-1.5  text-white rounded-md">{id}</span>
                            <h2 className="text-blue-950 font-inter text-sm font-bold">{category}</h2>
                        </div>
                        <p className="text-slate-600 font-inter text-sm text-center">{description}</p>
                </div>
                
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 space-y-5 space-x-10">
                {/**skills render here */}
                {
                    skills.map((skill) => ( <button key={skill}><span className="text-sm font-roboto text-slate-800 p-3">{skill}</span> </button> )  )
                }
               </div>
        </div>
        
    )
}

export default SkillCard;