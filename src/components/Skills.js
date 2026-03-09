import React from 'react';
import './Skills.css';
import {
    FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaDatabase
} from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            skills: [
                { name: "Java", icon: <FaJava color="#f89820" /> },
                { name: "Python", icon: <FaPython color="#3776ab" /> }
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "React", icon: <FaReact color="#61dafb" /> },
                { name: "JavaScript", icon: <IoLogoJavascript color="#f7df1e" /> },
                { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
                { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> }
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "SQL", icon: <FaDatabase color="#f29111" /> },
                { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
            ]
        },
        /*
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGithub /> },
                { name: "PowerBI", icon: <FaChartBar color="#F2C811" /> }
            ]
        }*/
    ];

    return (
        <section id="skills" className="skills-section section-padding">
            <div className="container">
                <h2 className="section-title animate-slide-up">Technical Skills</h2>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`skill-category glass-panel animate-slide-up delay-${(index + 1) * 100}`}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <div className={`skills-grid ${category.title === 'Tools' ? 'tools-centered' : ''}`}>
                                {category.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="skill-card">
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
