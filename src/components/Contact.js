import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Replace with actual keys via environment variables later
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'dummy_service';
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'dummy_template';
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'dummy_key';

        if (serviceID === 'dummy_service' || templateID === 'dummy_template' || publicKey === 'dummy_key') {
            setStatus('Email not configured. Please set up EmailJS keys in .env.local file.');
            setTimeout(() => setStatus(''), 5000);
            setFormData({ name: '', email: '', message: '' });
            return;
        }

        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then((result) => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('Failed to send message. Please try again.');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <h2 className="section-title animate-slide-up">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info animate-slide-up delay-100">
                        <h3>Let's talk about everything!</h3>
                        <p className="contact-desc">
                            Don't like forms? Send me an email directly or hit me up on LinkedIn.
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="info-items">
                            <div className="info-item glass-panel">
                                <div className="info-icon"><FiMail /></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:bathinaphanikumar25@gmail.com">bathinaphanikumar25@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item glass-panel">
                                <div className="info-icon"><FiMapPin /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Eluru, Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-panel animate-slide-up delay-200">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hello, I'd like to talk about..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                <FiSend /> Send Message
                            </button>

                            {status && <div className={`form-status ${status.includes('success') ? 'success' : ''}`}>{status}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
