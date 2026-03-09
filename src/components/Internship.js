import React from 'react';
import './Internship.css';
import { FaLaptopCode } from 'react-icons/fa';

const Internship = () => {
    return (
        <section id="internship" className="internship-section section-padding">
            <div className="container">
                <h2 className="section-title animate-slide-up">Internship</h2>

                <div className="internship-content glass-panel animate-slide-up delay-200">
                    <div className="internship-icon">
                        <FaLaptopCode />
                    </div>
                    <div className="internship-details">
                        <div className="internship-header">
                            <h3>Python Virtual Intern</h3>
                            <span className="internship-period">Dec 2025 – Jan 2026</span>
                        </div>
                        <h4 className="company-name">Infosys Springboard</h4>
                        <p className="internship-desc">
                                Successfully completed a Python Virtual Internship at Infosys Springboard, where I developed a log processing system using PySpark for efficient large-scale log data analysis. This project enhanced my skills in Python, distributed data processing, and real-world data handling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Internship;
