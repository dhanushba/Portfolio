
import React from 'react';

const FunFacts = () => {
  const funFacts = [
    { icon: '🎵', value: '88%', label: 'Carnatic Music Junior Exam' },
    { icon: '🏐', value: 'Runners-up', label: 'Volleyball Captain (U-14)' },
    { icon: '🎓', value: '9.39', label: 'Current CGPA' },
  ];

  return (
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
  );
};

export default FunFacts;
