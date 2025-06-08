import About from "@/Components/About";
import Contacts from "@/Components/Contacts";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";




const Home = () =>{
    return (
      <>
      <Navbar/>
      <Hero/>  
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contacts/>
      </>   
    )
}

export default Home;

