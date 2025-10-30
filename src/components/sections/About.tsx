
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection } from '../../utils/animation';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Zap,
  FileCode,
  Settings,
  Terminal,
  Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', icon: Globe, color: '#E34F26' },          
  { name: 'CSS', icon: Palette, color: '#1572B6' },         
  { name: 'JavaScript', icon: FileCode, color: '#F7DF1E' },
  { name: 'TypeScript', icon: Code, color: '#3178C6' },
  { name: 'React', icon: Globe, color: '#61DAFB' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'C', icon: Code, color: '#A8B9CC' },
  { name: 'C++', icon: Code, color: '#00599C' },
  { name: 'MongoDB', icon: Database, color: '#47A248' },
  { name: 'Docker', icon: Layers, color: '#2496ED' },
  { name: 'Git', icon: GitBranch, color: '#F05032' },
  { name: 'AWS', icon: Settings, color: '#FF9900' }
];

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const skillItems = skillsRef.current.querySelectorAll('.skill-item');
      
      gsap.fromTo(
        skillItems,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="heading-lg mb-4">About Me</h2>
              <div className="h-1 w-20 bg-neon-blue mb-8"></div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                innovative digital experiences. With expertise spanning multiple technologies and frameworks, 
                I bring ideas to life through clean, efficient code.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a constant desire to learn. 
                I enjoy tackling complex problems and finding elegant solutions that not only work 
                but also provide exceptional user experiences.
              </p>
              
              <div className="flex gap-4 pt-4">
                <motion.a 
                  href="#projects"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div className="w-72 h-72 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-teal p-1">
                  <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center">
                    <img 
                      src="/p.jpg" 
                      alt="Profile"
                      className="w-64 h-64 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-neon-teal rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-md text-center mb-12">Skills & Technologies</h3>
            
            <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-item flex flex-col items-center p-4 glass rounded-2xl border border-white/10 hover:border-neon-blue/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-3 p-3 rounded-xl bg-dark-200">
                      <IconComponent 
                        size={32} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
