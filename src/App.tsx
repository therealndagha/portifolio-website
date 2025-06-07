import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";


function App (){
  return (
    <main>
      
      <Navbar/>
      <Hero/>  
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </main>
  )
}

export default App;
