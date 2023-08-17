
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SlideVertical from "./components/partials/SlideVertical";
import Passion from "./components/Passion";
import About from "./menue/About";
import Skills from "./menue/Skills";
import Project from "./menue/Project";
import Contact from "./menue/Contact";
import Particle from "./components/Particle";
import Testimonials from "./menue/Testimonials";
import Explore from "./menue/Explore";
import { Scroll } from "./components/partials/Scroll";

// import ScrollToTop from "react-scroll-to-top";





function App() {
  const [preload, setPreload] = useState(true);

  setTimeout(function () {
    setPreload(false);
  }, 2000);

  if (preload) {
    return (
      <>
        <div className="preload text-white font-bold">
          <h1 className="text-3xl">
            <strong>RA</strong>
            <br></br>
            <i> ZAK.</i>.
          </h1>
          <p>─────</p>
          <Spinner animation="spin" className="animate-spin h-5 w-5 bg-white" />
        </div>
      </>
   
   );
  }
  return (
    <div className="w-full h-screen cursor-pointer text-sm md:text-base ">

      <Navbar />
      <Hero />
      <SlideVertical />
      <Passion />
      <About />
      <Skills />
      <Project />
      <Explore />
      <Testimonials />
      <Contact />
      <Particle />
      {/* <ScrollToTop smooth color="white" style={{backgroundColor: "transparent"}} /> */}
   <Scroll />
    </div>
  );
}

export default App;
