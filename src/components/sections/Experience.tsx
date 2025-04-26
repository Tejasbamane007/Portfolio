
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection } from '../../utils/animation';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Led the development of the company's flagship product, improving performance by 40%. Managed a team of 5 developers and implemented modern frontend practices.'
  },
  {
    company: 'Creative Solutions',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using React, Node.js, and MongoDB. Implemented responsive designs and ensured cross-browser compatibility.'
  },
  {
    company: 'Digital Agency',
    role: 'UI/UX Designer & Developer',
    period: '2018 - 2020',
    description: 'Created user interfaces for web and mobile applications. Collaborated with clients to understand requirements and delivered projects on time and within budget.'
  },
  {
    company: 'Tech Startup',
    role: 'Junior Developer',
    period: '2017 - 2018',
    description: 'Assisted in developing and maintaining web applications. Collaborated with senior developers to implement new features and fix bugs.'
  }
];

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!timelineRef.current) return;
    
    const line = timelineRef.current.querySelector('.timeline-line');
    
    gsap.fromTo(
      line,
      { height: 0 },
      {
        height: '100%',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        }
      }
    );
  }, []);
  
  return (
    <section id="experience" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-neon-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            My professional journey has provided me with diverse experiences 
            across various roles and technologies.
          </p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-dark-300 timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 
                  ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' 
                  : 'md:pl-12 md:ml-auto md:mr-0'
              } md:w-1/2 pl-10 md:pl-0`}
            >
              <div 
                className={`glass p-6 rounded-2xl border ${
                  index % 3 === 0 
                    ? 'border-neon-blue/20' 
                    : index % 3 === 1 
                      ? 'border-neon-purple/20' 
                      : 'border-neon-teal/20'
                }`}
              >
                <div className="absolute top-3 -left-3 md:top-0 md:left-auto md:right-auto z-10 flex items-center justify-center">
                  <div 
                    className={`w-6 h-6 rounded-full ${
                      index % 3 === 0 
                        ? 'bg-neon-blue' 
                        : index % 3 === 1 
                          ? 'bg-neon-purple' 
                          : 'bg-neon-teal'
                    } md:absolute md:top-6 md:${index % 2 === 0 ? 'right' : 'left'}-0 md:transform md:${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`}
                  ></div>
                </div>
                
                <span 
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    index % 3 === 0 
                      ? 'bg-neon-blue/10 text-neon-blue' 
                      : index % 3 === 1 
                        ? 'bg-neon-purple/10 text-neon-purple' 
                        : 'bg-neon-teal/10 text-neon-teal'
                  }`}
                >
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-sm text-gray-300">{exp.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
