type ProjectCardProps = {
    id?: number,
    title: string,
    overview: string,
    responsibilities: string,
    achievements?: string,
    link?: string | null
}

const ProjectCard = ({id, title, overview, responsibilities, achievements, link}: ProjectCardProps)=>{
    return (
        <div className="flex flex-col space-y-5">
            <div className="flex items-center justify-center space-x-5">
                <span className="bg-some-blue-shade px-1.5 text-white rounded-md">{id}</span>
                <h2 className="text-blue-950 font-inter text-sm font-bold">{title}</h2>
            </div>
            <div className="flex flex-col space-y-5 items-center justify-center">
                <p className="text-slate-600 font-inter text-sm text-center">{overview}</p>
                <p className="text-slate-600 font-inter text-sm text-center">{responsibilities}</p>
                <p className="text-slate-600 font-inter text-sm text-center">{achievements}</p>
            </div>
            <div className="flex items-center justify-center">
                 <button className="bg-some-blue-shade text-white px-2 rounded-md font-anton"><a href="">View Project</a></button>
            </div>
        </div>
    )
}

export default ProjectCard;