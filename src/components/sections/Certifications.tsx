
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../utils/animation';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    description: 'Demonstrated expertise in designing distributed systems on AWS platform.',
    credentialId: 'AWS-SAA-2023-001',
    verifyUrl: '#'
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    description: 'Certified in building scalable applications on Google Cloud Platform.',
    credentialId: 'GCP-PCD-2023-002',
    verifyUrl: '#'
  },
  {
    title: 'Meta React Developer Professional',
    issuer: 'Meta',
    description: 'Advanced React development skills and modern frontend practices.',
    credentialId: 'META-RD-2022-003',
    verifyUrl: '#'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    description: 'Foundation knowledge of cloud services and Microsoft Azure.',
    credentialId: 'AZ-900-2022-004',
    verifyUrl: '#'
  },
  {
    title: 'Oracle Java SE Programmer',
    issuer: 'Oracle',
    description: 'Comprehensive Java programming and object-oriented principles.',
    credentialId: 'OCA-JP-2021-005',
    verifyUrl: '#'
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    description: 'Container orchestration and Docker ecosystem expertise.',
    credentialId: 'DCA-2021-006',
    verifyUrl: '#'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-neon-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Professional certifications that validate my expertise across various 
            technologies and platforms.
          </p>
        </AnimatedSection>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection 
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <motion.div 
                className={`glass p-6 rounded-2xl border h-full flex flex-col ${
                  index % 3 === 0 
                    ? 'border-neon-blue/20' 
                    : index % 3 === 1 
                      ? 'border-neon-purple/20' 
                      : 'border-neon-teal/20'
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index % 3 === 0 
                        ? 'bg-neon-blue/20 text-neon-blue' 
                        : index % 3 === 1 
                          ? 'bg-neon-purple/20 text-neon-purple' 
                          : 'bg-neon-teal/20 text-neon-teal'
                    }`}
                  >
                    <Award size={20} />
                  </div>
                  <h3 className="text-lg font-bold flex-1">{cert.title}</h3>
                </div>
                
                <h4 className="text-md text-gray-400 mb-3">{cert.issuer}</h4>
                <p className="text-sm text-gray-300 mb-4 flex-grow">{cert.description}</p>
                
                <div className="mt-auto">
                  <div className="text-xs text-gray-400 mb-3">
                    Credential ID: {cert.credentialId}
                  </div>
                  <motion.a 
                    href={cert.verifyUrl} 
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      index % 3 === 0 
                        ? 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20' 
                        : index % 3 === 1 
                          ? 'bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20' 
                          : 'bg-neon-teal/10 text-neon-teal hover:bg-neon-teal/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
