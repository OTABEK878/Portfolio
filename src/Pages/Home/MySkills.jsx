import React from 'react';

const skills = [
  { name: "HTML", percentage: 80, color: "#e34c26" },
  { name: "CSS", percentage: 85, color: "#2965f1" },
  { name: "JavaScript", percentage: 70, color: "#f7df1e" },
  { name: "React", percentage: 75, color: "#61dafb" },
  { name: "Node.js", percentage: 70, color: "#68a063" },
];

const SkillCard = ({ name, percentage, color }) => {
  return (
    <div className="skill-card">
      <div className="circle">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring__circle"
            stroke={color}
            strokeWidth="10"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
            style={{
              strokeDasharray: "314",
              strokeDashoffset: 314 - (314 * percentage) / 100,
            }}
          />
        </svg>
        <div className="percentage">{percentage}%</div>
      </div>
      <h3>{name}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skill" className="skills-page">
      <header>
        <h1>My Skills</h1>
      </header>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
