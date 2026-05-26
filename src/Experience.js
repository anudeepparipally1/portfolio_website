import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Associate 2',
      company: 'State Street Corporation',
      location: 'Hyderabad, India',
      period: 'July 2024 – Present',
      achievements: [
        'Developed and optimized microservices for Limits Management System (LMS) using Spring Boot, AWS, PostgreSQL, and GraphQL',
        'Reduced API response time by 25% through GraphQL field-level optimization middleware',
        'Introduced Redis caching strategies, enhancing high-frequency API performance',
        'Integrated Inbox Tab APIs and collaborated with teams for cloud-ready, scalable backend solutions'
      ]
    },
    {
      title: 'Technology Intern',
      company: 'State Street Corporation',
      location: 'Bangalore, India',
      period: 'Jan 2024 – July 2024',
      achievements: [
        'Designed and deployed RESTful APIs using Spring Boot and Spring Data JPA',
        'Implemented advanced caching (Redis) and query-level tuning, reducing database latency by 30%',
        'Created proofs-of-concept comparing Apache Ignite vs. Redis for caching performance',
        'Improved test coverage with JUnit test cases and participated in code review cycles'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h1 className="experience-title">Professional Experience</h1>
        <p className="experience-subtitle">My journey and key achievements in software development</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-meta">
                  <h3 className="experience-role">{exp.title}</h3>
                  <p className="experience-company">{exp.company}, {exp.location}</p>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <div className="experience-icon">
                  <div className="icon-circle"></div>
                </div>
              </div>

              <div className="experience-content">
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;