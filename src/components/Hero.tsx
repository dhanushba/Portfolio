
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SocialIcons from './SocialIcons';

const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  
  const typingTexts = [
    "🚀 Information Science Engineer", 
    "💡 Full Stack Developer", 
    "☁️ Java & Cloud Enthusiast"
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        {/* Avatar Card */}
        <div 
          className={`relative mx-auto w-40 h-40 mb-8 cursor-pointer perspective-1000 transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className={`absolute inset-0 w-full h-full rounded-full transition-all duration-500 backface-hidden ${!flipped ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/80 to-accent/80 p-1 animate-pulse-soft shadow-xl">
              <div className="w-full h-full rounded-full bg-background/90 p-2 flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/400x400" 
                  alt="Dhanush B A" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          {/* Back of card */}
          <div className={`absolute inset-0 w-full h-full rounded-full glass-card flex items-center justify-center transition-all duration-500 backface-hidden rotate-y-180 ${flipped ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center">
              <span className="text-lg font-medium">Hello, I'm</span>
              <h3 className="text-xl font-bold gradient-text">Dhanush B A!</h3>
              <span className="text-sm animate-wave inline-block">👋</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
          <span className="gradient-text">Dhanush B A</span><br /> 
          <span className="text-2xl md:text-3xl lg:text-4xl">Information Science Engineering Student</span>
        </h1>
        
        <div className="h-8 mb-6">
          <AnimatedText 
            texts={typingTexts}
            className="text-lg md:text-xl text-foreground/90"
          />
        </div>
        
        <div className="flex flex-col items-center justify-center mt-8 space-y-8">
          <SocialIcons iconSize={24} className="animate-fadeIn" />
          
          <a 
            href="#projects" 
            className="hover-glow animate-float flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
          >
            <span>🚀 Explore My Work</span>
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
