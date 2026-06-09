import React, { useEffect, useRef, useState } from "react";
import profileImg from "./assets/images/profile.jpeg";
import salesforceLogo from "./assets/images/salesforce.png";
import zscalerLogo from "./assets/images/zscaler.png";
import bosscoderLogo from "./assets/images/bosscoder.png";
import visitHealthLogo from "./assets/images/visithealth.jpg";
import nitLogo from "./assets/images/nitdelhilogo.png";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ApplePortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const experiences = [
    {
      role: "Associate Member of Technical Staff",
      company: "Salesforce",
      logo: salesforceLogo,
      period: "Jan 2025 - Present",
      location: "Hyderabad, India",
      highlights: [
        "Onboarded 10+ Retail Banking features in Financial Services Cloud — Transaction Dispute Management with real-time Visa/Mastercard integration, Card Lock/Unlock, Address Update, Report/Replace Card.",
        "Productized the Banking Service Assistance Agent on Agentforce + Slack, lifting customer self-service rates by 40-60% at Tier-1 banks.",
        "Building Client 360 for Next-Gen Wealth Advisor App — unified workspace with AI-driven Account Pulse summaries and proactive risk/opportunity alerts.",
        "Reduced product onboarding time by 90% with automated deployment engine handling 250+ configuration components.",
        "Designed secure JWT-based Identity Bridge for third-party portal integration using certificate-based authentication.",
        "Built Enterprise Licensing Foundation (SKU) enabling scalable global deployment of 5+ AI agents across Agentforce."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Zscaler",
      logo: zscalerLogo,
      period: "Mar 2024 - Jan 2025",
      location: "Pune, India",
      highlights: [
        "Bootstrapped 'Executive Insights' mobile app from scratch — MVVM + Jetpack Compose for CISO-level security posture dashboards.",
        "Designed data-prefetching engine reducing application latency by 80%.",
        "Implemented centralized exception handling for network failures, reducing crash rates and improving MTTR.",
        "Served as 'Release Guru' — built real-time observability suite using Firebase + Crashlytics.",
        "Scaled Kotlin unit test coverage to 80%+."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bosscoder Academy",
      logo: bosscoderLogo,
      period: "Jan 2024 - Feb 2024",
      location: "Noida, India",
      highlights: [
        "Built mentorship platform using clean architecture with ReactJS, TypeScript, and TailwindCSS.",
        "Implemented CRUD operations with Firebase, Python, and Flask backend."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Visit Health",
      logo: visitHealthLogo,
      period: "Jul 2022 - Aug 2022",
      location: "Remote",
      highlights: [
        "Created client dashboard for seamless report tracking using Node.js, Express, and MySQL.",
        "Designed optimized database schema and implemented efficient backend APIs."
      ]
    }
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "Apex", "C++"] },
    { category: "Backend", items: ["Spring Boot", "Node.js", "Flask", "REST APIs", "Microservices"] },
    { category: "Frontend", items: ["LWC", "React", "Jetpack Compose", "HTML/CSS", "TailwindCSS"] },
    { category: "Platforms", items: ["Salesforce", "Agentforce", "Android", "Firebase", "Docker"] },
    { category: "Data", items: ["MySQL", "MongoDB", "SOQL", "Redis"] },
    { category: "Tools", items: ["Git", "Bazel", "Selenium", "CI/CD", "Crashlytics"] }
  ];

  return (
    <div className="apple-portfolio">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">SK</a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#publications">Research</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-content">
          <AnimatedSection>
            <div className="hero-image-wrapper">
              <img src={profileImg} alt="Sanskar Kumar" className="hero-image" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1 className="hero-title">Sanskar Kumar</h1>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <p className="hero-subtitle">Software Engineer at Salesforce</p>
          </AnimatedSection>
          <AnimatedSection delay={600}>
            <p className="hero-description">
              Building enterprise-scale Financial Services Cloud products, AI-powered
              agents on Agentforce, and Next-Gen Wealth Advisory experiences.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={800}>
            <div className="hero-cta">
              <a href="#experience" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </AnimatedSection>
        </div>
        <div className="hero-scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <AnimatedSection>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Where I've made an impact</p>
        </AnimatedSection>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="exp-card">
                <div className="exp-card-header">
                  <div className="exp-logo-wrapper">
                    <img src={exp.logo} alt={exp.company} className="exp-logo" />
                  </div>
                  <div className="exp-meta">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-period">{exp.period} &middot; {exp.location}</p>
                  </div>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section section-alt" id="skills">
        <AnimatedSection>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical toolkit</p>
        </AnimatedSection>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="skill-group">
                <h3 className="skill-category">{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item, j) => (
                    <span key={j} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <AnimatedSection>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Where it all started</p>
        </AnimatedSection>

        <div className="edu-timeline">
          <AnimatedSection delay={100}>
            <div className="edu-card edu-featured">
              <div className="edu-glow"></div>
              <div className="edu-card-inner">
                <img src={nitLogo} alt="NIT Delhi" className="edu-logo" />
                <div className="edu-details">
                  <h3>National Institute of Technology Delhi</h3>
                  <p className="edu-degree">B.Tech in Computer Science</p>
                  <p className="edu-period">2020 - 2024</p>
                  <p className="edu-rank">Department Rank #1</p>
                  <div className="edu-activities">
                    <span>General Secretary, Alumni Cell</span>
                    <span>Senior Coordinator, T&P Cell</span>
                    <span>Programming Society Head</span>
                    <span>All India Inter NIT Kabaddi</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="edu-card">
              <div className="edu-card-inner">
                <div className="edu-icon">XII</div>
                <div className="edu-details">
                  <h3>Navyug Convent Senior Secondary School</h3>
                  <p className="edu-degree">Senior Secondary Education &middot; New Delhi</p>
                  <p className="edu-period">2018 - 2020</p>
                  <p className="edu-rank">88.2%</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="edu-card">
              <div className="edu-card-inner">
                <div className="edu-icon">X</div>
                <div className="edu-details">
                  <h3>Creane Memorial High School</h3>
                  <p className="edu-degree">Secondary Education &middot; Gaya</p>
                  <p className="edu-period">2008 - 2018</p>
                  <p className="edu-rank">96.2%</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section section-alt" id="publications">
        <AnimatedSection>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">Published in IEEE</p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="pub-card">
            <div className="pub-badge">IEEE</div>
            <h3 className="pub-title">
              Integrated Violence and Weapon Detection Using Deep Learning
            </h3>
            <p className="pub-description">
              Proposed an innovative approach combining CNNs for spatial feature extraction and
              LSTM networks for temporal relation learning, integrated with Vision Transformer.
              Achieved <strong>98% accuracy</strong> and <strong>131 frames/sec</strong> processing speed.
            </p>
            <a
              href="https://ieeexplore.ieee.org/document/10696591"
              target="_blank"
              rel="noopener noreferrer"
              className="pub-link"
            >
              View Publication
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Hobbies Section */}
      <section className="section" id="hobbies">
        <AnimatedSection>
          <h2 className="section-title">Beyond Code</h2>
          <p className="section-subtitle">What keeps me energized</p>
        </AnimatedSection>

        <div className="hobbies-grid">
          {[
            { emoji: "🏸", name: "Badminton", desc: "College team player" },
            { emoji: "🏓", name: "Table Tennis", desc: "Competitive since school" },
            { emoji: "🚴", name: "Cycling", desc: "Weekend trail explorer" },
            { emoji: "🤼", name: "Kabaddi", desc: "All India Inter NIT" },
            { emoji: "📚", name: "Reading", desc: "Tech & non-fiction" }
          ].map((hobby, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="hobby-card">
                <span className="hobby-emoji">{hobby.emoji}</span>
                <h4 className="hobby-name">{hobby.name}</h4>
                <p className="hobby-desc">{hobby.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-dark" id="contact">
        <AnimatedSection>
          <h2 className="section-title section-title-light">Let's Connect</h2>
          <p className="section-subtitle section-subtitle-light">
            Open to opportunities and collaboration
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="contact-grid">
            <a href="mailto:sanskarkumar0106@gmail.com" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 6L2 7"/>
              </svg>
              <span>sanskarkumar0106@gmail.com</span>
            </a>
            <a href="tel:+919667650530" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>+91-9667650530</span>
            </a>
            <a href="https://www.linkedin.com/in/sanskarkumar/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/sanskar-kumar/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="contact-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Hyderabad, India</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Designed & Built by Sanskar Kumar</p>
      </footer>
    </div>
  );
}
