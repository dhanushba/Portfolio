
import React from 'react';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Parheeksha Business Plugger Private Ltd',
      period: 'October – November 2023',
      description: 'Developed a Portfolio Management System that allows users to manage their portfolios securely, using PHP, SQL, and HTML/CSS.',
    }
  ];

  return (
    <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center mb-8">
        <Briefcase className="text-red-500 mr-3" size={30} />
        <h3 className="text-2xl font-bold gradient-text">Work Experience</h3>
      </div>
      
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl p-6 hover-glow relative overflow-hidden group"
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
          <p className="text-primary font-medium mb-2">{exp.company}</p>
          <p className="text-sm text-foreground/60 mb-4">{exp.period}</p>
          <div className="relative">
            <p className="text-foreground/80">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
