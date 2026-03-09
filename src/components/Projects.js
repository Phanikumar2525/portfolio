import React, { useState } from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "SVEC College Website",
            description: "Contributed to college website development including About Us and Campus Life pages. Improved overall structural flow and accessibility.",
            image: "/SVEC.jpeg",
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            github: "https://github.com/Phanikumar2525/Red_Letter_Mission"
        },
        {
            id: 2,
            title: "Python-Based Distributed Log Processing System",
            description: "Developed a distributed log processing system using Python and PySpark to efficiently analyze large-scale log data. The system processes and extracts meaningful insights from logs to improve monitoring and debugging.",
image: "/screenshot-712.png",
            tech: ["Python", "PySpark", "Streamlit"],
            github: "https://github.com/Phanikumar2525/Python-Based-Distributed-Log-Processing-System-With-Pyspark-"
        },
        {
            id: 3,
            title: "Role-Based Digital Gate Pass System with Machine Learning-Based Priority Prediction",
            description: "Developed a Role-Based Digital Gate Pass System using the MERN stack to manage and automate student exit requests within an institution. Integrated a machine learning model to classify exit reasons and predict request priority levels.",
            image: "/Gatepass.jpeg",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Python"],
            github: "https://github.com/Phanikumar2525"
        },
        {
            id: 4,
            title: "Heart Stroke Risk Prediction Web Application",
            description: "Used Machine Learning to analyze patient health parameters such as age, BMI, glucose level, hypertension, and smoking status.",
            image: "/heartprediction.jpeg",
            tech: ["Python", "Streamlit"],
            github: "https://github.com/Phanikumar2525/Todo-list"
        },
        {
            id: 5,
            title: "To-Do Application",
            description: "A task management application that allows users to add, edit, and delete tasks efficiently. Designed with a simple and intuitive interface to help users organize and track daily activities.",
            image: "/Screenshot (711).png",
            tech: ["HTML", "CSS"],
            github: "https://github.com/Phanikumar2525/Todo-list"
        },
        {
            id: 6,
            title: "AndhraStore",
            description: "Built an online store platform for showcasing and selling Andhra specialty products. Implemented features such as product listing, cart functionality, and responsive design for better user experience.",
            image: "/Screenshot (521).png",
            tech: ["React.js", "CSS"],
            github: "https://andhrastore.onrender.com/"
        }
    ];

    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <section id="projects" className="projects-section section-padding">
            <div className="container">
                <h2 className="section-title animate-slide-up">Projects</h2>

                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div
                            className={`project-card glass-panel animate-fade-in`}
                            key={project.id}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source">
                                        <FiGithub />
                                    </a>
                                    <a href="#" className="project-link-btn" title="Live Preview">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((techItem, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{techItem}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projectsData.length > 3 && (
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "See Less" : "See More Projects"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
