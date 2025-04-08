
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { 
      name: 'Java from Beginning to Master',
      issuer: 'Udemy',
      icon: '☕',
      color: 'bg-red-900/60'
    },
    { 
      name: 'Programming Using Java',
      issuer: 'Infosys Springboard',
      icon: '🚀',
      color: 'bg-red-800/60'
    },
    { 
      name: 'Naukri Campus Young Turks',
      issuer: 'Naukri.com',
      icon: '🏆',
      color: 'bg-red-700/60'
    }
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-12">
        <Award className="text-red-500 mr-3" size={30} />
        <h3 className="text-2xl font-bold gradient-text text-center">Achievements & Certifications</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className={`rounded-xl p-6 hover-glow animate-slideUp ${cert.color} transition-all`}
            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
          >
            <div className="text-4xl mb-3">{cert.icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
            <p className="text-white/80 text-sm">Issued by {cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
