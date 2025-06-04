import { HiOutlineHand } from "react-icons/hi";
const Hero = () =>{
    return (
        <div className="other-sections-container">
           <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                        {/**Welcome message */}
            <div className="flex flex-col space-y-5">
               <div>
                 <h3 className="hero-hello-message">Hello there! <HiOutlineHand className="inline"/></h3>
               </div>
                <div className="">
                    <p className="hero-description-message">I'm Ndagha Kang'oma. <span className="hero-description-message-span">Software Developer</span> based in Lilongwe, Malawi.</p>
                </div>
                <div>
                    <p className="hero-description-message2">I’m passionate about building clean, functional software that solves real-world problems. Currently focused on growing my skills in full-stack development, I enjoy working on meaningful projects and continuously learning new technologies.</p>
                </div>
                <div>
                    <button className="bg-some-blue-shade text-white px-5 py-2.5 hover:bg-some-lighter-blue-shade"><a href="#contacts">Hire Me</a></button>
                </div>
            </div>
            {/**optional image */}
            <div className="hidden md:block  items-center justify-center">
                <img src="ndagha-no-bg.png" className="w-80" alt="ndagha" />
            </div>
            </div>
         
        </div>
    )
}

export default Hero;