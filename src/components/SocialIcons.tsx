
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

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
      url: 'https://github.com/yourusername',
      color: 'hover:text-white' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-400' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:your.email@example.com',
      color: 'hover:text-pink-400' 
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
