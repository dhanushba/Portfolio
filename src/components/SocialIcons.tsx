import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

interface SocialIconsProps {
  iconSize?: number;
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  iconSize = 22,
  className = ''
}) => {
  const socialLinks = [
    { 
      name: 'Github', 
      icon: Github, 
      url: 'https://github.com/dhanushba',
      color: 'hover:text-white' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/contactdhanushba',
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:dhanushba361@gmail.com',
      color: 'hover:text-primary' 
    },
    { 
      name: 'Phone', 
      icon: Phone, 
      url: 'tel:+919902548683',
      color: 'hover:text-green-400' 
    },
    { 
      name: 'Resume', 
      icon: FileText, 
      url: 'https://github.com/dhanushba/certificates/blob/main/Dhanush_Resume.pdf',
      color: 'hover:text-yellow-400'
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-foreground/80 ${social.color} transform transition-all duration-300 hover:scale-110 hover-glow`}
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
