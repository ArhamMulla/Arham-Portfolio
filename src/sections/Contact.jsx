import "./Sections.css";

function BrandIcon({ name }) {
  const paths = {
    github:
      "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 0Z",
    linkedin:
      "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z",
    leetcode:
      "M13.48 0 7.12 6.36a8.98 8.98 0 0 0 0 12.72l4.92 4.92 2.12-2.12-4.92-4.92a5.98 5.98 0 0 1 0-8.48l6.36-6.36L13.48 0Zm-1.06 12h9v3h-9v-3Z",
    gmail:
      "M2 3h20v18H2V3Zm2 2v14h16V5H4Zm0 0 8 6 8-6",
  };

  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  );
}

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
          FIND ME ON GITHUB <BrandIcon name="github" />
        </a>

        <a href="https://www.linkedin.com/in/arham-mulla/" target="_blank" rel="noreferrer" className="contact-button">
          LINKEDIN <BrandIcon name="linkedin" />
        </a>

        <a href="https://leetcode.com/u/arhammulla03/" target="_blank" rel="noreferrer" className="contact-button">
          LEETCODE <BrandIcon name="leetcode" />
        </a>

        <a href="mailto:arhammulla03@example.com" className="contact-button">
          EMAIL <BrandIcon name="gmail" />
        </a>
      </div>
    </section>
  );
}

export default Contact;