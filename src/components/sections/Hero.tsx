
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Typed from 'typed.js';
import { useGSAPAnimation } from '../../utils/animation';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation(heroRef, (element) => {
    const particles = Array.from({ length: 20 }).map((_, i) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.background = i % 3 === 0 
        ? '#00f0ff' 
        : i % 3 === 1 
          ? '#9d4edd' 
          : '#06d6a0';
      particle.style.opacity = '0.6';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      
      element.appendChild(particle);
      
      return particle;
    });
    
    const tl = gsap.timeline();
    
    particles.forEach((particle) => {
      tl.to(
        particle,
        {
          x: `${(Math.random() - 0.5) * 200}`,
          y: `${(Math.random() - 0.5) * 200}`,
          duration: 10 + Math.random() * 20,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
        0
      );
    });
    
    return tl;
  }, []);

  useEffect(() => {
    if (headlineRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(
        headlineRef.current.querySelectorAll('.word'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.2'
      );
    }

    // Initialize Typed.js
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Fullstack Developer', 'Designer', 'Creative Coder'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  // Split headline text into spans for animation
  const splitText = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.25em]">
        {word}
      </span>
    ));
  };

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-block"
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-neon-blue/10 text-neon-blue">
              Portfolio
            </span>
          </motion.div>
          
          <h1 
            ref={headlineRef}
            className="heading-xl mb-6"
          >
            {splitText("Hi, I'm TB. I build beautiful things.")}
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            <span ref={typedRef} className="text-neon-blue"></span>
          </p>
          
          <div ref={ctaRef}>
            <motion.a 
              href="#projects"
              className="btn-primary inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.2
          }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white">
            <span className="text-sm mb-2">Scroll down</span>
            <svg 
              width="16" 
              height="24" 
              viewBox="0 0 16 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2"/>
              <circle className="animate-pulse" cx="8" cy="8" r="3" fill="currentColor"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
