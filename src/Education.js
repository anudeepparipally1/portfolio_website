import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      degree: 'B.Tech - Information Technology',
      institution: 'VNRVJIET',
      score: 'CGPA: 8.92/10',
      period: '2020 - 2024',
      icon: '🎓'
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior College',
      score: 'Score: 970/1000',
      period: '2018 - 2020',
      icon: '📚'
    },
    {
      degree: '10th Grade',
      institution: 'SR Digi School',
      score: 'CGPA: 9.70/10',
      period: '2018',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h1 className="education-title">Education</h1>
        <p className="education-subtitle">My academic journey and achievements</p>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-card">
                <div className="education-icon">
                  <span className="icon-emoji">{edu.icon}</span>
                </div>

                <div className="education-content">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <div className="education-details">
                    <span className="score">{edu.score}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                </div>

                <div className="timeline-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;