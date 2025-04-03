
import React, { useEffect } from 'react';
import CursorEffect from '../components/CursorEffect';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Prevent FOUC (Flash of Unstyled Content)
  useEffect(() => {
    document.documentElement.classList.add('visible');
    document.documentElement.classList.remove('no-fouc');
    
    // Add meta tags for SEO
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Dhanush - Full-Stack Developer, AI & Scalable Systems Architect, and Cloud Enthusiast. Building digital experiences that make a difference.';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
