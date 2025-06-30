
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedSection } from '../../utils/animation';
import { Award, Calendar, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    description: 'Demonstrated expertise in designing distributed systems on AWS platform.',
    credentialId: 'AWS-SAA-2023-001',
    verifyUrl: '#'
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023',
    description: 'Certified in building scalable applications on Google Cloud Platform.',
    credentialId: 'GCP-PCD-2023-002',
    verifyUrl: '#'
  },
  {
    title: 'Meta React Developer Professional',
    issuer: 'Meta',
    date: '2022',
    description: 'Advanced React development skills and modern frontend practices.',
    credentialId: 'META-RD-2022-003',
    verifyUrl: '#'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    description: 'Foundation knowledge of cloud services and Microsoft Azure.',
    credentialId: 'AZ-900-2022-004',
    verifyUrl: '#'
  },
  {
    title: 'Oracle Java SE Programmer',
    issuer: 'Oracle',
    date: '2021',
    description: 'Comprehensive Java programming and object-oriented principles.',
    credentialId: 'OCA-JP-2021-005',
    verifyUrl: '#'
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2021',
    description: 'Container orchestration and Docker ecosystem expertise.',
    credentialId: 'DCA-2021-006',
    verifyUrl: '#'
  }
];

const Certifications = () => {
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
    <section id="certifications" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-neon-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Professional certifications that validate my expertise across various 
            technologies and platforms.
          </p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-dark-300 timeline-line"></div>
          
          {certifications.map((cert, index) => (
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
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      index % 3 === 0 
                        ? 'bg-neon-blue' 
                        : index % 3 === 1 
                          ? 'bg-neon-purple' 
                          : 'bg-neon-teal'
                    } md:absolute md:top-6 md:${index % 2 === 0 ? 'right' : 'left'}-0 md:transform md:${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`}
                  >
                    <Award size={12} className="text-dark" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-gray-400" />
                  <span className={`text-sm font-medium ${
                    index % 3 === 0 
                      ? 'text-neon-blue' 
                      : index % 3 === 1 
                        ? 'text-neon-purple' 
                        : 'text-neon-teal'
                  }`}>
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <h4 className="text-lg text-gray-400 mb-3">{cert.issuer}</h4>
                <p className="text-sm text-gray-300 mb-4">{cert.description}</p>
                
                <div className="flex flex-col gap-2 text-xs text-gray-400">
                  <div>Credential ID: {cert.credentialId}</div>
                  <a 
                    href={cert.verifyUrl} 
                    className="inline-flex items-center gap-1 text-neon-blue hover:text-neon-blue/80 transition-colors"
                  >
                    <ExternalLink size={12} />
                    Verify Credential
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
