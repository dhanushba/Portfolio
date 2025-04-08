
import React from 'react';

const About = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Parheeksha Business Plugger Private Ltd',
      period: 'October – November 2023',
      description: 'Developed a Portfolio Management System that allows users to manage their portfolios securely, using PHP, SQL, and HTML/CSS.',
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering - Information Science and Engineering',
      institution: 'BMS Institute Of Technology and Management',
      period: 'December 2021 – May 2025',
      description: 'CGPA - 9.39'
    }
  ];

  const skills = [
    { category: 'Languages', items: ['C', 'C++', 'Java (Beginner)', 'SQL'] },
    { category: 'Cloud Tools', items: ['AWS (Basic)', 'GCP (Basics)'] },
    { category: 'Core Concepts', items: ['Data Structures', 'Algorithms', 'OOP'] },
    { category: 'Web Development', items: ['PHP', 'HTML/CSS', 'Next.js', 'Python'] },
  ];

  const funFacts = [
    { icon: '🎵', value: '88%', label: 'Carnatic Music Junior Exam' },
    { icon: '🏐', value: 'Runners-up', label: 'Volleyball Captain (U-14)' },
    { icon: '🎓', value: '9.39', label: 'Current CGPA' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-20">
          <div className="glass-card rounded-xl p-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Career Objective</h3>
            <p className="text-foreground/80 leading-relaxed">
              Motivated and innovative Information Science graduate with a strong foundation in computer science, 
              proficiency in programming, and a collaborative mindset. Passionate about optimizing user experiences 
              and delivering impactful technology solutions that contribute to meaningful and sustainable advancements.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Fun Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {funFacts.map((fact, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-secondary/50 hover-glow">
                  <div className="text-4xl mb-2">{fact.icon}</div>
                  <div className="text-2xl font-bold text-primary">{fact.value}</div>
                  <div className="text-sm text-foreground/70">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Work Experience</h3>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 hover-glow animate-slideUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-foreground/60 mb-4">{exp.period}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Education</h3>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 hover-glow animate-slideUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-foreground/60 mb-4">{edu.period}</p>
                <p className="text-foreground/80">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Technical Skills</h3>
          <div className="glass-card rounded-xl p-6 animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Certifications</h3>
          <div className="glass-card rounded-xl p-6 animate-slideUp">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-foreground/80">Java from Beginning to Master - Udemy</li>
              <li className="text-foreground/80">Programming Using Java - Infosys Springboard</li>
              <li className="text-foreground/80">Naukri Campus Young Turks - Naukri.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
