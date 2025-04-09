import React, { useState } from 'react';
import { GraduationCap, Calculator, BarChart2 } from 'lucide-react';

const EducationJourney = () => {
  const [imageError, setImageError] = useState({});

  const education = [
    {
      degree: 'B.E - Information Science and Engineering',
      institution: 'BMS Institute Of Technology and Management',
      location: 'Bengaluru',
      period: '2021 – 2025',
      description: 'CGPA - 9.39',
      type: 'cgpa',
      logo: '/bms-logo.jpeg',
    },
    {
      degree: '12th - PCMB',
      institution: 'Sri Satya Sai Loka Seva Pre-University College, Alike',
      location: 'Alike, Bantwal Dist',
      period: '2019 – 2020',
      description: '95.83 %',
      type: 'percentage',
      logo: '/alike.jpeg',
    },
    {
      degree: '10th',
      institution: 'Sri Satya Sai Loka Seva Vidya Kendra, Alike',
      location: 'Alike, Bantwal Dist',
      period: '2018 – 2019',
      description: '86.40 %',
      type: 'percentage',
      logo: '/alike.jpeg',
    },
  ];

  const placeholderImage = '/placeholder.svg';

  const getIcon = (type) => {
    if (type === 'cgpa') return <Calculator className="text-red-500 mr-2" size={18} />;
    if (type === 'percentage') return <BarChart2 className="text-red-500 mr-2" size={18} />;
    return null;
  };

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
            <div className="w-16 h-16 flex-shrink-0 mr-4 mb-3 sm:mb-0 overflow-hidden rounded-md bg-white p-1">
              <img
                src={imageError[index] ? placeholderImage : edu.logo}
                alt={edu.institution}
                className="w-full h-full object-contain"
                onError={() => {
                  setImageError((prev) => ({ ...prev, [index]: true }));
                }}
              />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
              <p className="text-primary font-medium">{edu.institution}</p>
              <p className="text-sm text-foreground/60 mt-1">{edu.period} — {edu.location}</p>
            </div>
          </div>

          <div className="mt-2 flex items-center">
            {getIcon(edu.type)}
            <p className="text-foreground/90 font-semibold">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationJourney;
