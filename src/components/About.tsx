
import React from 'react';
import { Award, BookOpen, Briefcase, GraduationCap, Trophy, Code, CloudLightning, Brain } from 'lucide-react';

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
      description: 'CGPA - 9.39',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/BMSIT%26M_Logo.png'
    }
  ];

  const skillCategories = [
    { 
      name: 'Languages', 
      icon: <Code className="text-black" size={24} />,
      skills: ['C', 'C++', 'Java', 'SQL'] 
    },
    { 
      name: 'Cloud Tools', 
      icon: <CloudLightning className="text-black" size={24} />,
      skills: ['AWS (Basic)', 'GCP (Basics)'] 
    },
    { 
      name: 'Core Concepts', 
      icon: <Brain className="text-black" size={24} />,
      skills: ['Data Structures', 'Algorithms', 'OOP'] 
    },
  ];

  const certifications = [
    { 
      name: 'Java from Beginning to Master',
      issuer: 'Udemy',
      icon: '☕',
      color: 'bg-black/90'
    },
    { 
      name: 'Programming Using Java',
      issuer: 'Infosys Springboard',
      icon: '🚀',
      color: 'bg-black/80'
    },
    { 
      name: 'Naukri Campus Young Turks',
      issuer: 'Naukri.com',
      icon: '🏆',
      color: 'bg-black/70'
    }
  ];

  const funFacts = [
    { icon: '🎵', value: '88%', label: 'Carnatic Music Junior Exam' },
    { icon: '🏐', value: 'Runners-up', label: 'Volleyball Captain (U-14)' },
    { icon: '🎓', value: '9.39', label: 'Current CGPA' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-20">
          <div className="glass-card rounded-xl p-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 text-black">Career Objective</h3>
            <p className="text-black/80 leading-relaxed">
              Motivated and innovative Information Science graduate with a strong foundation in computer science, 
              proficiency in programming, and a collaborative mindset. Passionate about optimizing user experiences 
              and delivering impactful technology solutions that contribute to meaningful and sustainable advancements.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-black">Fun Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {funFacts.map((fact, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-black/5 hover:bg-black/10 transition-all">
                  <div className="text-4xl mb-2">{fact.icon}</div>
                  <div className="text-2xl font-bold text-black">{fact.value}</div>
                  <div className="text-sm text-black/70">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education & Experience with visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-black mr-3" size={30} />
              <h3 className="text-2xl font-bold text-black">Education Journey</h3>
            </div>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-all mb-6 relative overflow-hidden group"
              >
                <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-black/5 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution} 
                    className="w-16 h-16 object-contain rounded-md mr-4 mb-3 sm:mb-0"
                  />
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-black">{edu.degree}</h4>
                    <p className="text-black font-medium">{edu.institution}</p>
                    <p className="text-sm text-black/60 mt-1">{edu.period}</p>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center">
                  <Trophy className="text-black mr-2" size={18} />
                  <p className="text-black/90 font-semibold">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-8">
              <Briefcase className="text-black mr-3" size={30} />
              <h3 className="text-2xl font-bold text-black">Work Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
                <h4 className="text-xl font-bold mb-1 text-black">{exp.title}</h4>
                <p className="text-black font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-black/60 mb-4">{exp.period}</p>
                <div className="relative">
                  <p className="text-black/80">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills as cool interactive cards */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Code className="text-black mr-3" size={30} />
            <h3 className="text-2xl font-bold text-black text-center">Technical Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all animate-slideUp"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="ml-3 text-xl font-semibold text-black">{category.name}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="tech-pill transition-transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications as achievement cards */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <Award className="text-black mr-3" size={30} />
            <h3 className="text-2xl font-bold text-black text-center">Achievements & Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`rounded-xl p-6 hover:shadow-lg transition-all animate-slideUp ${cert.color}`}
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-white/80 text-sm">Issued by {cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
