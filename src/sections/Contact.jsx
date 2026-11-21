import "./Sections.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <span>04 / CONTACT</span>
        <span>HAVE SOMETHING IN MIND?</span>
      </div>

      <h2>
        LET'S BUILD
        <br />
        SOMETHING<span className="title-dot">.</span>
      </h2>

      <p>
        I'm currently exploring software development opportunities
        and open to connecting with people working on interesting ideas.
      </p>

      <div className="contact-links">
        <a href="https://github.com/ArhamMulla" target="_blank" rel="noreferrer" className="contact-button">
          FIND ME ON GITHUB <span className="platform-logo">GH</span>
        </a>

        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer" className="contact-button">
          LINKEDIN <span className="platform-logo">in</span>
        </a>

        <a href="YOUR_LEETCODE_URL" target="_blank" rel="noreferrer" className="contact-button">
          LEETCODE <span className="platform-logo">LC</span>
        </a>

        <a href="mailto:YOUR_EMAIL@example.com" className="contact-button">
          EMAIL <span className="platform-logo">@</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;