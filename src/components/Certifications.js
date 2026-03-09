import React from 'react';
import './Certifications.css';
import { FaCertificate, FaTrophy, FaUsers } from 'react-icons/fa';

const Certifications = () => {
    const certs = [
        { title: "AICTE Virtual Internship", desc: "Full Stack Web Development" },
        { title: "NPTEL Certification in IoT", desc: "Score: 98%" },
        { title: "Microsoft Azure Fundamentals", desc: "Cloud computing core concepts" },
        { title: "GitHub Foundations Certification", desc: "Version control & collaboration" }
    ];

    const leadership = [
        { role: "Social Media & Promotion Head", org: "GeeksforGeeks Student Club" },
        { role: "Web & App Associate", org: "Google Developer Student Club" }
    ];

    return (
        <section id="certifications" className="certs-section section-padding">
            <div className="container">

                <div className="certs-grid">
                    {/* Certifications Block */}
                    <div className="cert-block animate-slide-up delay-100">
                        <div className="block-header">
                            <FaCertificate className="block-icon" />
                            <h2 className="block-title">Certifications</h2>
                        </div>
                        <div className="badge-container">
                            {certs.map((cert, i) => (
                                <div key={i} className="cert-badge glass-panel">
                                    <h4>{cert.title}</h4>
                                    <p>{cert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-blocks">
                        {/* Leadership Block */}
                        <div className="cert-block animate-slide-up delay-200">
                            <div className="block-header">
                                <FaUsers className="block-icon" />
                                <h2 className="block-title">Leadership</h2>
                            </div>
                            <div className="leadership-list">
                                {leadership.map((item, i) => (
                                    <div key={i} className="leadership-item glass-panel">
                                        <h4>{item.role}</h4>
                                        <p>{item.org}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Block */}
                        <div className="cert-block animate-slide-up delay-300">
                            <div className="block-header">
                                <FaTrophy className="block-icon text-gold" />
                                <h2 className="block-title">Achievements</h2>
                            </div>
                            <div className="achievement-item glass-panel">
                                <div className="achievement-medal">🥇</div>
                                <div className="achievement-info">
                                    <h4>First Place</h4>
                                    <p>Cognibuild Technical Event (Engineers’ Day 2025)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
