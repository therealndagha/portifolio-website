

type ServiceCardPropsType = {
    id: number,
    description: string,
    imageSrc: string,
    icon: string,
    name: string
}



const ServiceCard = ({description, icon, id, imageSrc, name}: ServiceCardPropsType) =>{
    return (
      <div className="flex flex-row space-x-5">
           <div className={`hidden md:block ${id%2 === 0 ? `order-2`: `order-1` } `}>
                <img src={imageSrc} alt={name} className="h-auto w-60 object-cover" />
           </div>
           <div className={`flex flex-col space-y-10 ${id%2 === 0 ? `order-1`: `order-2`} `}>
                <div className="flex flex-row space-x-5  items-center justify-center">
                    <span className="bg-some-blue-shade px-1.5  text-white rounded-md">{id}</span>
                     <h2 className="text-blue-950 font-inter font-bold">{name}</h2>
                </div>
                <div className="block md:hidden  items-center justify-center">
                     <img src={imageSrc} alt={name} className="h-auto w-60 object-cover ml-16" />
                </div>
                <p className="w-72 ml-10 md:ml-16 text-slate-600 font-inter">{description}</p>
                <div className="text-center">
                     <button className="bg-some-blue-shade text-white rounded-md px-2.5 font-anton focus:ring-2 focus:ring-blue-800  hover:bg-some-lighter-blue-shade">Learn More  </button>
                </div>
                <hr className="text-slate-800"/>
           </div>
      </div>
    )
}
export default ServiceCard;