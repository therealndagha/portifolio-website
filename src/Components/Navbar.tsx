import { navLinks } from "@/utilities/NavLinks";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa";
const Navbar = () =>{
    return (
        <nav className="flex flex-row items-center justify-between space-x-20 mt-10 mr-10 ml-10">
            <div>
                <h3 className="logo">Ndagha Kang'oma</h3>
            </div>
            <div className="hidden md:block">
                 <div className="flex flex-row items-center justify-center space-x-10">
                        {
                    navLinks.map((singleNavLink)=> (
                        <div key={singleNavLink.title}>
                              {
                                singleNavLink.title === 'Contacts' ? <button  className="bg-some-blue-shade text-white py-5 px-2.5 rounded-md hover:outline-2 hover:outline-some-lighter-blue-shade hover:bg-blue-400 hover:ring-blue-950"><a href={singleNavLink.href}>{singleNavLink.title}</a></button> : <button ><a href={singleNavLink.href}>{singleNavLink.title}</a></button>
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
                        <SheetTitle className="logo">Ndagha Kang'oma</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-5">
                        {
                            navLinks.map((singleNavLinks)=>(
                                <div key={singleNavLinks.title}>
                                    <button>{singleNavLinks.title}</button>
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