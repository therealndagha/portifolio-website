import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactsPage from "./pages/ContactsPage";


function App (){
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </Routes>
    </main>
  )
}

export default App;
