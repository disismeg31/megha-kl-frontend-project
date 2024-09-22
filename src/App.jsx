import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import './App.css'
import Services from "./pages/Services.jsx";
import Leader from "./pages/Leader.jsx";
import Testimonials from "./pages/Testimonials.jsx";

function App() {
 

  return (
    <>
    <div className="App">
      <Navbar/>
       
       <Home/>
       <About/>
       <Works/>
       <Services/>
       <Leader/>
       <Testimonials/>
    </div>
     
    </>
  )
}

export default App
