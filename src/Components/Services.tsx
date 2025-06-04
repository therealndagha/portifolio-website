import { services } from "@/utilities/Services"
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <section className="other-sections-container"  id="services">
      <div className="flex flex-col items-center justify-center space-y-5">
           <h1 className="text-2xl font-anton text-blue-950">Services</h1>
            <p className="font-open-sans text-slate-600 text-center">I exist as a creative and offer a wide range of IT solutions not only limited to: </p>
      </div>
      <div className="flex flex-col space-y-10 items-center justify-center mt-10">
         {
          services.map((singleService) => (<ServiceCard key={singleService.id} {...singleService} /> ))
         }
      </div>
       
    </section>
  )
}

export default Services