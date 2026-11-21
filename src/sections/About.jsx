import "./Sections.css";
function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading">
        <span>01 / ABOUT</span>
        <span>A LITTLE ABOUT ME</span>
      </div>

      <div className="about-content">
        <h2>
          Building things.
          <br />
          <span>Solving problems.</span>
        </h2>

        <div className="about-details">
          <p>
            I'm a software engineer with 1.8 years of experience
            building full-stack applications using Java, Spring Boot
            and React.
          </p>

          <p>
            I enjoy understanding how things work, solving
            challenging problems and building applications that
            make a real difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;