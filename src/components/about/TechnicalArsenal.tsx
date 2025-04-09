
import React from 'react';
import { Code, CloudLightning, Brain } from 'lucide-react';

const TechnicalArsenal = () => {
  const skillCategories = [
    { 
      name: 'Languages', 
      icon: <Code className="text-red-500" size={24} />,
      skills: ['C', 'C++', 'Java', 'SQL'] 
    },
    { 
      name: 'Cloud Tools', 
      icon: <CloudLightning className="text-red-500" size={24} />,
      skills: ['AWS (Basic)', 'GCP (Basics)'] 
    },
    { 
      name: 'Core Concepts', 
      icon: <Brain className="text-red-500" size={24} />,
      skills: ['Data Structures', 'Algorithms', 'OOPS','Computer Networks','OS','DBMS'] 
    },
  ];

  return (
    <div className="mb-20">
      <div className="flex items-center justify-center mb-12">
        <Code className="text-red-500 mr-3" size={30} />
        <h3 className="text-2xl font-bold gradient-text text-center">Technical Arsenal</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="glass-card p-6 rounded-xl hover-glow animate-slideUp"
            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h4 className="ml-3 text-xl font-semibold text-primary">{category.name}</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="tech-pill transition-transform hover:scale-105 hover:bg-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalArsenal;
