import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        ARHAM<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>

      <a href="#contact" className="contact-link">
        Let's talk <ArrowUpRight size={16} />
      </a>
    </nav>
  );
}

export default Navbar;