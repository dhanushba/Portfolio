
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const filters = ['All', 'Web', 'Java', 'Mobile', 'AI'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Super Mario College Adventure',
      description: 'A 2D platformer game in Java focused on a college tour, incorporating game mechanics like coin collection, scoring, and level design using basic mathematics.',
      image: '/lovable-uploads/super-mario-game.png', // Replace with your uploaded image URL
      tags: ['Java', 'Basic Mathematics', 'IntelliJ'],
      category: ['Java'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dhanushba/Super-mario-college-adventure'
    },
    {
      id: 2,
      title: 'Recruitment-rail',
      description: 'An AI-powered Applicant Tracking System (ATS) using Python, Google Generative AI, and Streamlit for automated resume evaluations and actionable insights.',
      image: '/lovable-uploads/recruitment-rail.png', // Replace with your uploaded image URL
      tags: ['Python', 'Google Generative AI', 'Streamlit'],
      category: ['AI', 'Web'],
      demoUrl: 'https://recruitment-rail.streamlit.app/',
      githubUrl: 'https://github.com/dhanushba/recruitment-rail'
    },
    {
      id: 3,
      title: 'BuyWiz - E-Commerce Price Tracker',
      description: 'A price tracking website using Next.js, Bright Data, and MongoDB, enabling users to track products, get notified of price changes, and automate data scraping.',
      image: '/lovable-uploads/buywiz.png', // Replace with your uploaded image URL
      tags: ['Next.js', 'Bright Data', 'MongoDB', 'Nodemailer'],
      category: ['Web'],
      demoUrl: 'https://buywiz.vercel.app/',
      githubUrl: 'https://github.com/Gurukiran-M/e_commerce-price-tracker'
    },
    {
      id: 4,
      title: 'Object Detection For Visually Impaired',
      description: 'A real-time object detection app using Android Studio and TensorFlow to assist visually impaired users by providing voice descriptions of nearby objects.',
      image: '/lovable-uploads/object-detection.png', // Replace with your uploaded image URL
      tags: ['Java', 'Android Studio', 'TensorFlow Model'],
      category: ['Mobile', 'AI', 'Java'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dhanushba/object-detection-for-visually-impaired-using-tensorflowmodel'
    },
    {
      id: 5,
      title: 'Portfolio Management System',
      description: 'A Portfolio Management System that allows users to manage their portfolios securely, developed during internship at Parheeksha Business Plugger.',
      image: '/lovable-uploads/portfolio-management.png', // Replace with your uploaded image URL
      tags: ['PHP', 'SQL', 'HTML/CSS'],
      category: ['Web'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dhanushba/portfolio-management'
    }
  ];
  
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));
  
  const nextSlide = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredProjects.length - 1);
    }
  };
  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">My Projects</h2>
        
        <div className="mb-10 flex justify-center space-x-3">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground/80 hover:bg-primary/20'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Project Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="min-w-full px-4">
                  <div className="glass-card rounded-xl overflow-hidden shadow-xl hover-glow">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                              <span key={index} className="tech-pill">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-foreground/80 mb-6">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                          >
                            <Github size={16} />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {filteredProjects.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 rounded-full shadow-lg hover:bg-primary/20 transition-colors duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 rounded-full shadow-lg hover:bg-primary/20 transition-colors duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          {/* Pagination Dots */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary scale-110' : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
