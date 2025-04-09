import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { 
      name: 'Java from Beginning to Master',
      issuer: 'Udemy',
      icon: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      color: 'bg-red-900/60',
      link: 'https://github.com/dhanushba/certificates/blob/main/Udemy.pdf'
    },
    { 
      name: 'Programming Using Java',
      issuer: 'Infosys Springboard',
      icon: '/is.png',
      color: 'bg-red-800/60',
      link: 'https://github.com/dhanushba/certificates/blob/main/Programming_using_java.pdf'
    },
    { 
      name: 'Naukri Campus Young Turks',
      issuer: 'Naukri.com',
      icon: '/naukri.png',
      color: 'bg-red-700/60',
      link: 'https://github.com/dhanushba/certificates/blob/main/Naukri-Infotech.pdf'
    }
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-12">
        <Award className="text-red-500 mr-3" size={30} />
        <h3 className="text-2xl font-bold gradient-text text-center">Achievements & Certifications</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-xl p-6 hover-glow animate-slideUp ${cert.color} transition-all block`}
            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
          >
            <div className="flex items-center space-x-4 mb-3">
              <img 
                src={cert.icon} 
                alt={cert.name} 
                className="w-10 h-10 object-contain bg-white rounded-md p-1"
              />
              <div>
                <h4 className="text-base font-bold text-white">{cert.name}</h4>
                <p className="text-white/80 text-sm">Issued by {cert.issuer}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
