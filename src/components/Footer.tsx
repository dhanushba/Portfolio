
import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text font-display">
              Dhanush
            </a>
            <p className="text-foreground/60 mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialIcons className="mb-4" />
            <p className="text-foreground/60 text-sm">
              © {currentYear} Dhanush. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
