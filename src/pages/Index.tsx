
import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
import Loader from '../components/Loader';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload any necessary resources here
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      
      <div className={`min-h-screen bg-dark ${loading ? 'hidden' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
