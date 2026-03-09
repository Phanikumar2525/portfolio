import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <h2 className="section-title animate-slide-up">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass-panel animate-slide-up delay-200">
                        <p>
                            I am a third-year Computer Science Engineering student at <strong>Sri Vasavi Engineering College</strong>.</p>
                            <p>I am passionate about web development and software engineering, and I enjoy building real-world applications that solve practical problems. I constantly explore new technologies and apply them through projects to strengthen my technical skills. My goal is to develop scalable, user-friendly, and efficient software solutions while gaining valuable industry experience.
                        </p>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
