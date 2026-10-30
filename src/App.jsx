import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function Portfolio() {
  const words = ["Pintu Kumar", "Software Engineer", "Web Developer", "App Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const skillsList = [
    "React", "JavaScript", "Python Flask", "MySQL", 
    "Tailwind CSS", "Bootstrap", "Git & GitHub", "REST APIs"
  ];

  return (
    <div className="bg-dark text-light min-vh-100">
      
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-info fs-4" href="#">Pintu Kumar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="nav-link text-light" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
            <span className="badge bg-info text-dark px-3 py-2 mb-3 fs-6 fw-semibold">
              Full-Stack Developer & Software Engineer
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-info border-end border-info pe-1">{currentText}</span>
            </h1>
            <p className="lead text-secondary mb-4">
              I build high-performance web applications, POS systems, and responsive digital experiences with clean and scalable code.
            </p>
            
            {/* Action Buttons */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
              <a href="#projects" className="btn btn-info px-4 py-2 fw-semibold text-dark shadow">View Projects</a>
              <a href="#contact" className="btn btn-outline-light px-4 py-2 fw-semibold">Contact Me</a>
            </div>

            {/* Social Media & Business Profile Links (Blinking / Pulsing Badges) */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-2 flex-wrap align-items-center">
              <span className="text-secondary small me-2">Profiles:</span>
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info pulse-badge">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info pulse-badge">
                LinkedIn
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info pulse-badge">
                YouTube
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info pulse-badge">
                Instagram
              </a>
              <a href="https://share.google/qtf0gqdMcZQ2M5Beu" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info pulse-badge">
                Google Business
              </a>
            </div>

          </div>
          
          {/* Quick Bio Section with Profile Photo */}
          <div className="col-lg-5 text-center">
            <div className="p-4 bg-secondary bg-opacity-10 border border-secondary rounded-4 shadow-lg">
              
              <div className="mb-3 d-flex justify-content-center">
                <img 
                  src="myphoto.jpeg" 
                  alt="Pintu Kumar" 
                  className="rounded-circle border border-info p-1" 
                  style={{ width: "90px", height: "90px", objectFit: "cover" }}
                />
              </div>

              <h3 className="h4 text-info mb-3">Quick Bio</h3>
              <p className="text-secondary small mb-0">
                Passionate MCA student and Full-Stack Developer specializing in React, Python Flask, and MySQL. Experienced in building real-world web apps, PWA, and business solutions with clean code.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MOVING SKILLS SECTION */}
      <section id="skills" className="py-5 bg-black bg-opacity-50 overflow-hidden">
        <div className="container text-center mb-4">
          <h2 className="fw-bold text-info">My Tech Stack</h2>
          <p className="text-secondary">Technologies and tools I use (Hover to pause)</p>
        </div>

        <div className="marquee-container py-3">
          <div className="marquee-track">
            {skillsList.concat(skillsList).map((skill, index) => (
              <div key={index} className="px-4 py-3 bg-dark border border-secondary rounded-3 shadow-sm text-center" style={{ minWidth: '160px' }}>
                <span className="fw-semibold text-light">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-info">Featured Projects</h2>
            <p className="text-secondary">Some of the core applications I have developed and deployed</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-dark border border-secondary text-light h-100 shadow">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-secondary mb-2">Web App</span>
                    <h3 className="h5 fw-bold text-info">APNA SALON Web App</h3>
                    <p className="small text-secondary">Full-stack web application with live booking and modern user interface.</p>
                  </div>
                  <a href="#" className="btn btn-sm btn-outline-info w-100 mt-3">Live Demo / Code</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-dark border border-secondary text-light h-100 shadow">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-secondary mb-2">Desktop / Web</span>
                    <h3 className="h5 fw-bold text-info">Restaurant POS System</h3>
                    <p className="small text-secondary">Complete billing, inventory management, and business dashboard system.</p>
                  </div>
                  <a href="#" className="btn btn-sm btn-outline-info w-100 mt-3">Live Demo / Code</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-dark border border-secondary text-light h-100 shadow">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-secondary mb-2">PWA / Mobile</span>
                    <h3 className="h5 fw-bold text-info">Tiffin Service PWA</h3>
                    <p className="small text-secondary">Progressive Web App featuring SMS authentication and digital wallet payments.</p>
                  </div>
                  <a href="#" className="btn btn-sm btn-outline-info w-100 mt-3">Live Demo / Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5 bg-black bg-opacity-50">
        <div className="container text-center py-4">
          <div className="row justify-content-center">
            <div className="col-lg-6 bg-dark border border-secondary p-5 rounded-4 shadow-lg">
              <h2 className="fw-bold text-info mb-3">Let's Work Together</h2>
              <p className="text-secondary mb-4">Have a project in mind or want to hire me? Feel free to connect!</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="mailto:pintukumar9534049901@gmail.com" className="btn btn-outline-info px-4">Email Me</a>
                <a href="tel:+919534049901" className="btn btn-info px-4 text-dark fw-semibold">Call / WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 border-top border-secondary text-secondary small">
        <p className="mb-0">© {new Date().getFullYear()} Pintu Kumar. Built with React & Bootstrap.</p>
      </footer>

    </div>
  );
}
