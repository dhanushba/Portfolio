
import React from 'react';
import CareerObjective from './CareerObjective';
import FunFacts from './FunFacts';
import EducationJourney from './EducationJourney';
import WorkExperience from './WorkExperience';
import TechnicalArsenal from './TechnicalArsenal';
import Certifications from './Certifications';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-20">
          <CareerObjective />
          <FunFacts />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <EducationJourney />
          <WorkExperience />
        </div>
        
        <TechnicalArsenal />
        
        <Certifications />
      </div>
    </section>
  );
};

export default AboutSection;
