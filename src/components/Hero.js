import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Building scalable web applications.";

    // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className="hero-section section-padding">
            <div className="hero-background"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-subtitle animate-slide-up delay-100">Hello, I'm</p>
                    <h1 className="hero-title animate-slide-up delay-200">
                        Phani Kumar <span className="highlight">Bathina</span>
                    </h1>
                    <h2 className="hero-role animate-slide-up delay-300">
                        Computer Science Engineering Student <br /> 
                    </h2>

                    <div>
                        <p className="sub-tagline">
                            Turning ideas into real-world software solutions using modern technologies.
                            </p>
                    </div>
                    

                    <div className="hero-actions animate-slide-up delay-500">
                        <a href="/Phanikumar.pdf" download className="btn btn-primary">Download Resume</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

                    <div className="hero-socials animate-fade-in delay-500">
                        <a href="https://github.com/Phanikumar2525" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FiGithub />
                        </a>
                        <a href="https://linkedin.com/in/phanikumarbathina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FiLinkedin />
                        </a>
                        <a href="mailto:bathinaphanikumar25@gmail.com" aria-label="Email">
                            <FiMail />
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in delay-300">
                    <div className="hero-image glass-panel">
                        {/* Placeholder for professional profile image */}
                        <div className="image-placeholder">
                            <img src="/pka3p4m4jkuzt09asdg4.png" alt="Phani Kumar Bathina - Profile" />
                        </div>

                        <div className="floating-badge badge-1">Full Stack</div>
                        <div className="floating-badge badge-2">Web Developer</div>
                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator animate-fade-in delay-500">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </a>
        </section>
    );
};

export default Hero;
