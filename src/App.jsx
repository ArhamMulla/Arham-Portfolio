import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="portfolio">
      <Navbar />

      <Hero />

      <About />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;