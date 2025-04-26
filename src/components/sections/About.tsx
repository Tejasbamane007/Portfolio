
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPAnimation, AnimatedSection } from '../../utils/animation';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'UI/UX Design', level: 70 },
  { name: 'Three.js', level: 65 },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useGSAPAnimation(skillsRef, (element) => {
    const skillBars = element.querySelectorAll('.skill-bar');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    
    tl.fromTo(
      skillBars,
      { width: 0 },
      {
        width: (i, target) => {
          const level = target.getAttribute('data-level');
          return `${level}%`;
        },
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.1,
      }
    );
    
    return tl;
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with a strong focus on creating engaging, 
            interactive web applications. With a background in both design and development,
            I bring a unique perspective to every project. I love experimenting with new 
            technologies and pushing the boundaries of what's possible on the web.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-teal/20 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Developer profile" 
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-blue/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-neon-purple/10 rounded-2xl -z-10"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.4}>
            <div>
              <h3 className="heading-md mb-6 text-white">My Skills</h3>
              <div ref={skillsRef} className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-dark-300 rounded-full overflow-hidden">
                      <div 
                        className={`skill-bar h-full rounded-full ${
                          index % 3 === 0 
                            ? 'bg-neon-blue' 
                            : index % 3 === 1 
                              ? 'bg-neon-purple' 
                              : 'bg-neon-teal'
                        }`}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
