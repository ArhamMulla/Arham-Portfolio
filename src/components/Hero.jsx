import { ArrowDownRight } from "lucide-react";
import Avatar from "./Avatar";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-top">
        <span>Backend Focused Full-Stack Developer</span>
      </div>

      <div className="hero-main">
        <div className="hero-title">
          <h1 className="typing-line first-name">ARHAM</h1>

          <h1 className="second-line typing-line last-name">
            MULLA<span className="title-dot">.</span>
          </h1>
        </div>

        <div className="hero-side">
          <Avatar />
        </div>
      </div>

      <div className="hero-bottom">
        <p className="hero-description">
          I build web applications with a focus on
          <span> functionality, thoughtful design</span> and
          solving real problems.
        </p>

        <a href="#experience" className="explore-link">
          EXPLORE MY WORK
          <span className="explore-icon">
            <ArrowDownRight size={20} />
          </span>
        </a>

        <div className="hero-stack">
          <span>MY CURRENT TOOLKIT</span>
          <p>JAVA · SPRING BOOT · REACT</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;