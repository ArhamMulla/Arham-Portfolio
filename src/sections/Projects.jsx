
import { useState } from "react";
import "./Sections.css";

const projects = [
  {
    id: "01",
    name: "BotanyBliss",
    category: "FULL STACK PROJECT",
    type: "PERSONAL PROJECT",
    year: "2026",
    description:
      "A plant information and contribution platform where users can explore plants and submit information for review and approval by administrators.",
    features: [
      "JWT-based authentication",
      "Plant information and details",
      "User contributions and submissions",
      "Admin approval and plant management",
    ],
    technologies: ["REACT", "SPRING BOOT", "MYSQL", "JWT"],
    github: "YOUR_BOTANYBLISS_REPO_URL",
  },

  // Add more projects here
  {
  id: "02",
  name: "Placed",
  category: "FULL STACK PROJECT",
  type: "COLLEGE PROJECT",
  year: "2026",
  description: "A full-stack web application designed to help students prepare for campus placements through an organized platform, featuring secure authentication and efficient data management.",
  features: [
    "JWT-based user authentication",
    "Dynamic frontend with React",
    "Backend APIs built using Django",
    "Efficient data fetching and caching using Axios and TanStack Query",
    "Responsive UI using Tailwind CSS"
  ],
  technologies: [
    "REACT",
    "DJANGO",
    "PYTHON",
    "SQLITE",
    "JWT",
    "AXIOS",
    "TANSTACK QUERY",
    "TAILWIND CSS",
    "VERCEL",
    "PYTHONANYWHERE"
  ],
  github: "https://github.com/ArhamMulla/mini_frontend",
},
{
  id: "03",
  name: "ShelfDetectionSystem",
  category: "AI / COMPUTER VISION",
  type: "COLLEGE PROJECT",
  year: "2025",
  description: "An automated shelf monitoring system that uses computer vision to detect products on retail shelves and identify low-stock situations, sending alerts when product counts fall below a predefined threshold.",
  features: [
    "Real-time product detection using a custom YOLO model",
    "Automated product counting and threshold-based monitoring",
    "Camera integration for continuous shelf monitoring",
    "Dashboard to manage cameras and configure detection thresholds",
    "Automated alerts with captured images when stock levels are low",
    "User authentication and camera management"
  ],
  technologies: [
    "PYTHON",
    "YOLO",
    "OPENCV",
    "FLASK",
    "SQLITE",
    "FLASK-SQLALCHEMY",
    "HTML",
    "CSS",
    "JAVASCRIPT"
  ],
  github: "https://github.com/ArhamMulla/Empety-shelf-detection-system",
},
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <span>03 / SELECTED WORK</span>
        <span>THINGS I'VE BUILT</span>
      </div>

      <div className="project-explorer">
        <div className="explorer-top">
          <span>PROJECT ARCHIVE</span>
          <span>{String(projects.length).padStart(2, "0")} ITEMS</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <button
              key={project.id}
              className="project-folder"
              onClick={() => setSelectedProject(project)}
              aria-label={`Open ${project.name} project details`}
            >
              <div className="folder-icon">
                <div className="folder-tab"></div>
                <div className="folder-body">
                  <span>{project.id}</span>
                </div>
              </div>

              <div className="folder-info">
                <h3>{project.name}</h3>
                <span>{project.category}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="explorer-bottom">
          <span>CLICK TO EXPLORE</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              <span>PROJECT FILE / {selectedProject.id}</span>
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>
            </div>

            <span className="orange-label">{selectedProject.type}</span>

            <h2 id="project-title">
              {selectedProject.name}<span>.</span>
            </h2>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-details">
              <div>
                <h4>KEY FEATURES</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>TECH STACK</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-modal-footer">
              <span>{selectedProject.year}</span>

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  VIEW ON GITHUB <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;