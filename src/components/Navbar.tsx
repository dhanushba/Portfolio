import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume' , href: '/Resume_Dhanush_B_A.pdf'}
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          
          {/* Resume Info (left side) */}
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-primary font-display">Dhanush B A</span>
            <span className="text-sm text-muted-foreground">Software Engineer | Open to Work</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <SocialIcons iconSize={18} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-card shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border">
            <SocialIcons className="justify-center" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
