
import "./Sections.css";

const experiences = [
  {
    number: "01",
    role: "Software Engineer 1",
    period: "AUG 2026 — SEP 2026",
    type: "Full - time",
    description:
      "Worked on improving enterprise search capabilities and resolving customer-reported issues.",
    highlights: [
      "Implemented sorting and faceting/aggregation on nested fields in OpenSearch.",
      "Introduced new Document and Task search filters, improving search usage by 20%.",
      "Resolved customer-reported issues across Search and Proof Reports, including release-critical hotfixes.",
    ],
    technologies: ["Java,", " SpringBoot,", " OpenSearch."],
  },
  {
    number: "02",
    role: "Software Engineer Trainee",
    period: "AUG 2025 — JUL 2026",
    type: "Full - time",
    description:
      "Developed and enhanced full-stack features for enterprise applications used in customers' daily workflows.",
    highlights: [
      "Developed Search and Proof Reports features using Java, Spring Boot, React and SQL, adopted by over 75% of customers.",
      "Contributed to the migration from Lucene to OpenSearch through search index backup and restore operations.",
      "Integrated Comply document quality checks into Proof Reports.",
      "Resolved a critical production issue within 24 hours of release.",
      "Implemented a configurable footer-logo feature, reducing manual effort by 80%.",
    ],
    technologies: ["Java,", " SpringBoot,", " React,", " Git,", " SQL,", " OpenSearch,", " Junit,", " Mokito."],
  },
  {
    number: "03",
    role: "Software Engineer Intern",
    period: "JAN 2025 — JUL 2025",
    type: "INTERNSHIP",
    description:
      "Built foundational knowledge and practical experience in full-stack development.",
    highlights: [
      "Completed hands-on training in Java, Spring Boot, ReactJS, NodeJS and SQL.",
      "Built applications involving REST API development, frontend implementation and database integration.",
      "Worked on end-to-end feature development.",
    ],
    technologies: ["Java,", " SpringBoot,", " React,", " SQL,", " Node.Js."],
  },
];

function Experience() {
  return (
    <section id="experience" className="content-section">
      <div className="section-heading">
        <span>02 / EXPERIENCE</span>
        <span>WHERE I'VE WORKED</span>
      </div>

      <div className="experience-company">
        <div>
          <span className="orange-label">MY PROFESSIONAL JOURNEY</span>
          <h2>Esko<span>.</span></h2>
          <p>Esko Graphics India Private Limited · Bengaluru, India</p>
        </div>

        <div className="company-count">
          <span>01</span>
          <small>COMPANY</small>
        </div>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.number}>
            <div className="timeline-marker">
              <span>{experience.number}</span>
            </div>

            <div className="experience-item-content">
              <div className="experience-item-top">
                <div>
                  <span className="orange-label">
                    {experience.type}
                  </span>
                  <h3>{experience.role}</h3>
                </div>

                <span className="experience-date">
                  {experience.period}
                </span>
              </div>

              <p className="experience-summary">
                {experience.description}
              </p>

              <ul className="experience-highlights">
                {experience.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <div className="tech-list">
                {experience.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
