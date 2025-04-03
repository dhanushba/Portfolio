
import React from 'react';

const About = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2020 - Present',
      description: 'Led the development of cloud-native applications using microservices architecture. Implemented CI/CD pipelines and mentored junior developers.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2018 - 2020',
      description: 'Developed responsive web applications using React and Node.js. Collaborated with design teams to implement UI/UX improvements.',
    },
    {
      title: 'Software Developer Intern',
      company: 'StartUp Innovations',
      period: '2017 - 2018',
      description: 'Assisted in developing mobile applications. Participated in agile development processes and code reviews.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2018',
      description: 'Focused on Advanced Algorithms and Artificial Intelligence.'
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Engineering College',
      period: '2012 - 2016',
      description: 'Graduated with First Class Honours. Led the college tech club.'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Java', 'Spring Boot'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Langchain'] },
  ];

  const funFacts = [
    { icon: '👨‍💻', value: '1000+', label: 'Hours of Coding' },
    { icon: '🚀', value: '5+', label: 'Projects Deployed' },
    { icon: '🎵', value: '∞', label: 'Passion for Carnatic Music' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-20">
          <div className="glass-card rounded-xl p-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a passionate Full-Stack Developer and Systems Architect with a deep love for building scalable, 
              efficient applications. With expertise spanning from frontend design to backend systems and cloud infrastructure,
              I bring a holistic approach to software development.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              My journey in tech has been driven by curiosity and the desire to create meaningful digital experiences.
              I believe in writing clean, maintainable code and constantly expanding my skillset to stay at the 
              forefront of technological innovation.
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
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Professional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default About;
