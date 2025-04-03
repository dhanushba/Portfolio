
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
  
  const filters = ['All', 'Web', 'AI', 'Cloud', 'Mobile'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application that uses AI to prioritize and categorize tasks based on user behavior and deadlines.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB'],
      category: ['Web', 'AI'],
      demoUrl: 'https://demo-url.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Dashboard',
      description: 'A comprehensive dashboard for monitoring and managing cloud resources across multiple providers with real-time alerts and cost optimization.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Vue.js', 'AWS', 'Docker', 'GraphQL'],
      category: ['Web', 'Cloud'],
      demoUrl: 'https://demo-url.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: 3,
      title: 'E-Commerce Mobile App',
      description: 'A feature-rich e-commerce application with AR product visualization, personalized recommendations, and seamless payment integration.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      category: ['Mobile'],
      demoUrl: 'https://demo-url.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: 4,
      title: 'NLP Document Analyzer',
      description: 'An advanced document analysis tool that uses natural language processing to extract insights, summarize content, and identify key entities.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Python', 'spaCy', 'FastAPI', 'ElasticSearch'],
      category: ['AI', 'Web'],
      demoUrl: 'https://demo-url.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: 5,
      title: 'Serverless Microservice Architecture',
      description: 'A highly scalable microservice architecture using serverless technologies for efficient resource utilization and automatic scaling.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Terraform'],
      category: ['Cloud'],
      demoUrl: 'https://demo-url.com',
      githubUrl: 'https://github.com/yourusername/project'
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
