import React from 'react';
import './Education.css';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            id: 1,
            title: "B.Tech – Computer Science and Engineering",
            institution: "Sri Vasavi Engineering College",
            score: "CGPA: 8.6",
            period: "2024–2027",
            icon: <FaUniversity />
        },
        {
            id: 2,
            title: "Diploma – Computer Engineering",
            institution: "Sir C R Reddy Polytechnic College",
            score: "Percentage: 91.08%",
            period: "2021–2024",
            icon: <FaGraduationCap />
        },
        {
            id: 3,
            title: "SSC",
            institution: "KPR JL Siddhartha High School",
            score: "Marks: 554",
            period: "2020–2021",
            icon: <FaSchool />
        }
    ];

    return (
        <section id="education" className="education-section section-padding">
            <div className="container">
                <h2 className="section-title animate-slide-up">Education</h2>

                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <div
                            className={`timeline-item animate-slide-up delay-${(index + 2) * 100}`}
                            key={edu.id}
                        >
                            <div className="timeline-dot">
                                <span className="timeline-icon">{edu.icon}</span>
                            </div>
                            <div className="timeline-content glass-panel">
                                <div className="timeline-header">
                                    <h3>{edu.title}</h3>
                                    <span className="timeline-period">{edu.period}</span>
                                </div>
                                <h4 className="institution">{edu.institution}</h4>
                                <div className="score-badge">
                                    {edu.score}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
