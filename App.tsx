
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Import the AI Assistant component for interactive user support

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About />
        </section>
        
        <section id="projects" className="py-20 bg-gray-50">
          <Projects />
        </section>
        
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>
        
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <Contact />
        </section>
      </main>

      <Footer />
      {/* Render the AI Assistant component as a floating button/window */}
      
    </div>
  );
};

export default App;
