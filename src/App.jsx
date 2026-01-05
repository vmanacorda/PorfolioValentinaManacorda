import Navbar from "./components/Navbar";
import Portada from "./components/Portada";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";




function App() {
  return (
    <div className="page">
      <Navbar />

      <main id="top" className="shell">
        <Portada />
       <About />
            <Skills />
                 <Certifications/>
         <Projects />
             <Contact/>
               <Footer/>
      </main>
    </div>
  );
}

export default App;