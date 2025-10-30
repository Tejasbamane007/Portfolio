
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../utils/animation';

const certificateFiles = [
  'exebition-cert.pdf',
  'tejas-bamane-23faff81-de59-4b32-ab5f-2408cbee95e6-certificate.pdf',
  'tejas-bamane-63551b1b-88d9-4b8f-af20-c3fa2d221d26-certificate.pdf',
  'ai-1st-software-eng.pdf',
  'AWS for DevOps.pdf',
  'docker.pdf',
  'Ansible.pdf',
  'Applied Generative AI Certification.pdf',
  'tejas-bamane-97f635e6-1671-41a1-9bb1-912e134e6fd9-certificate.pdf',
  'tejas-bamane-9e108da1-4af2-47cb-b46b-2f09550062d3-certificate.pdf',
  'tejas-bamane-aedaca63-bae2-458b-86f6-1f995cd84c97-certificate.pdf',
  'tejas-bamane-eee21b1b-bfea-4389-af48-e1440e6d299c-certificate.pdf',
  'Generative models for developers.pdf',
  'Introduction to OpenAI GPT Models.pdf',
  'jenkins.pdf',
  'linus-Devops.pdf',
  'linux-Devops-Udemy.pdf',
  'MongoDB for SQL Professionals.pdf',
  'Pre-trained Transformer 3 (GPT-3).pdf',
  'Principles of Generative AI Certification.pdf',
  'prompt-eng.pdf',
  
];

const Certifications = () => {
  const certificateSources = useMemo(
    () =>
      certificateFiles.map((file) => ({
        src: `/certificates/${encodeURIComponent(file)}`,
        alt: file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      })),
    []
  );
  return (
    <section id="certifications" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-neon-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            A gallery showcasing my certified achievements.
          </p>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ['0%', '-500%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {[...certificateSources, ...certificateSources].map((certificate, index) => (
                <div
                  key={`${certificate.src}-${index}`}
                  className="min-w-[280px] md:min-w-[360px] lg:min-w-[420px]"
                >
                  <div className="glass rounded-2xl overflow-hidden border border-white/10">
                    <iframe
    src={certificate.src}
    title={certificate.alt}
    className="w-full h-64 bg-dark-200"
  ></iframe>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Certifications;
