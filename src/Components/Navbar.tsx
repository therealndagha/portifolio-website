import { navLinks } from "@/utilities/NavLinks";
import { Sheet, SheetContent,  SheetHeader,  SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () =>{
    const navigate = useNavigate();
    return (
        <nav className="flex flex-row items-center justify-between space-x-20 mt-10 mr-10 ml-10">
            <div>
                <div className="flex items-center ">
                    <img src='ndagha.jpg' className="w-5 h-5 rounded-md" alt="ndagha" />
                    <h3 onClick={()=>{navigate('/')}} className="logo">Ndagha Kang'oma</h3>
                </div>
            </div>
            <div className="hidden md:block">
                 <div className="flex flex-row items-center justify-center space-x-10">
                        {
                    navLinks.map((singleNavLink)=> (
                        <div key={singleNavLink.title}>
                              {
                                singleNavLink.title === 'Contacts' ? <button onClick={()=>{navigate(`/${singleNavLink.href}`)}}  className="contact_button">{singleNavLink.title}</button> : <button ><a href={singleNavLink.href} className="navlink">{singleNavLink.title}</a></button>
                              }
                        </div>
                    ))
                  }
                 </div>
                 
            </div>
            <Sheet>
                <SheetTrigger className="block md:hidden"><FaBars size={24}/></SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                             <div className="flex items-center">
                                    <img src='ndagha.jpg' className="w-5 h-5 rounded-md" alt="ndagha" />
                                    <h3 onClick={()=>navigate('/')} className="logo">Ndagha Kang'oma</h3>
                             </div>
                    </SheetHeader>
                    <div className="flex flex-col space-y-5 p-10">
                        {
                            navLinks.map((singleNavLinks)=>(
                                <div key={singleNavLinks.title}>
                                    <button><a href={singleNavLinks.title} className="navlink">{singleNavLinks.title}</a></button>
                                </div>
                            ))
                        }
                    </div>
                </SheetContent>
            </Sheet>



        </nav>
    )
}

export default Navbar;