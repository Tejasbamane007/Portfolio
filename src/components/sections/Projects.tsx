
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, ExternalLink } from 'lucide-react';
import { AnimatedSection, staggerContainer } from '../../utils/animation';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and an admin dashboard.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A creative portfolio website for a photographer showcasing their work with a focus on visual aesthetics and smooth animations.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['Next.js', 'GSAP', 'Framer Motion', 'Sanity CMS'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Here are some of my recent projects. Each project represents my 
            passion for creating beautiful, functional, and user-friendly applications.
          </p>
        </AnimatedSection>
        
        <motion.div 
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <AnimatedSection 
      direction="up" 
      delay={index * 0.1}
      className="glass rounded-2xl overflow-hidden"
    >
      <div className="relative overflow-hidden group">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className={`text-xs px-2 py-1 rounded-full ${
                tagIndex % 3 === 0 
                  ? 'bg-neon-blue/10 text-neon-blue' 
                  : tagIndex % 3 === 1 
                    ? 'bg-neon-purple/10 text-neon-purple' 
                    : 'bg-neon-teal/10 text-neon-teal'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neon-blue hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <ExternalLink size={16} /> View Live
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link size={16} /> Source Code
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
