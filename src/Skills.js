import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = {
    languages: ['Java', 'Python', 'C++'],
    frameworks: ['Spring Boot', 'Spring Data JPA', 'GraphQL', 'REST APIs'],
    frontend: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    databases: ['PostgreSQL', 'MySQL', 'Oracle'],
    cloudTools: ['AWS (EC2, S3, Lambda)', 'Redis', 'Git', 'Maven', 'Gradle'],
    coreConcepts: ['Data Structures & Algorithms', 'OOP', 'System Design', 'Microservices Architecture']
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">Technologies and expertise I bring to the table</p>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
              </h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;