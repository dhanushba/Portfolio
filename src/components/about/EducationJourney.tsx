
import React from 'react';
import { GraduationCap, Trophy } from 'lucide-react';

const EducationJourney = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering - Information Science and Engineering',
      institution: 'BMS Institute Of Technology and Management',
      period: 'December 2021 – May 2025',
      description: 'CGPA - 9.39',
      logo: '/lovable-uploads/ccec1933-360f-460a-bad3-1accd6f9bc6b.png'
    }
  ];

  return (
    <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center mb-8">
        <GraduationCap className="text-red-500 mr-3" size={30} />
        <h3 className="text-2xl font-bold gradient-text">Education Journey</h3>
      </div>
      
      {education.map((edu, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl p-6 hover-glow mb-6 relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-primary/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
            <div className="w-16 h-16 flex-shrink-0 mr-4 mb-3 sm:mb-0 overflow-hidden rounded-md">
              <img 
                src={edu.logo} 
                alt={edu.institution}
                className="w-full h-full object-contain bg-white p-1"
                onError={(e) => {
                  console.error('Image failed to load:', edu.logo);
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
              <p className="text-primary font-medium">{edu.institution}</p>
              <p className="text-sm text-foreground/60 mt-1">{edu.period}</p>
            </div>
          </div>
          
          <div className="mt-2 flex items-center">
            <Trophy className="text-red-500 mr-2" size={18} />
            <p className="text-foreground/90 font-semibold">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationJourney;
