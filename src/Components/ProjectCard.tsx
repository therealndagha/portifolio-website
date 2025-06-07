type ProjectCardProps = {
    id?: number,
    title: string,
    overview: string,
    responsibilities: string,
    achievements?: string,
    link?: string | null
}

const ProjectCard = ({id, title, overview, responsibilities, achievements}: ProjectCardProps)=>{
    return (
        <div className="flex flex-col space-y-10">
             <div className="flex items-center justify-center space-x-5">
                 <span className="bg-some-blue-shade text-white rounded-md  px-1.5">{id}</span>
                 <h2 className="text-blue-950 font-inter font-bold">{title}</h2>
             </div>
             <div className="flex flex-col  md:flex-row items-center justify-center space-y-2.5 md:space-x-10 max-w-lg">
                  <h3 className="self-start text-blue-950 font-inter font-bold text-sm">Overview:</h3>
                  <p className="text-slate-600 text-sm font-inter">{overview}</p>
             </div>
             <div className="flex flex-col  md:flex-row items-center justify-center space-y-2.5 md:space-x-10 max-w-lg">
                  <h3 className="self-start text-blue-950 font-inter font-bold text-sm">Responsibilities:</h3>
                  <p className="text-slate-600 font-inter text-sm">{responsibilities}</p>
             </div>
             <div className="flex  flex-col md:flex-row  items-center justify-center space-y-2.5 md:space-x-10 max-w-lg">
                  <h3 className="self-start text-blue-950 font-inter font-bold text-sm">Achievements:</h3>
                  <p className="text-slate-600 font-inter  text-sm">{achievements}</p>
             </div>
             <div className="flex items-center justify-center">
                   <button className="bg-some-blue-shade text-white hover:bg-some-lighter-blue-shade rounded-md px-1.5 font-anton"><a href="">View Project</a></button>
             </div>
        </div>
    )
}

export default ProjectCard;