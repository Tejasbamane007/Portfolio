
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, ExternalLink } from 'lucide-react';
import { AnimatedSection, staggerContainer } from '../../utils/animation';
import { Description } from '@radix-ui/react-toast';

const projects = [
  
  {
    title: 'LearnNova AI Powered Learning Platform',
    description: 'LearnNova is an AI-powered learning platform that personalizes education through smart content recommendations and interactive features. It enhances student engagement with a user-friendly interface and adaptive learning tools.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c', // person coding on laptop
    tags: ['React', 'Typescript', 'Gsap', 'Tailwind CSS', 'Gemeni API', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Tejasbamane007/LearnNova-AI-Powered-Learning-Platform.git'
  },
  {
    title: 'Algorithm Simulation',
    description: 'An interactive platform with real-time visualizations for search algorithm simulations. Integrated user login and modular content for algorithm learning. Emphasized visual learning with animations and responsive design.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', // developer coding in dark mode
    tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Gsap'],
    githubUrl: 'https://github.com/Tejasbamane007/Algorithm-Simulation-Platform.git'
  },
  {
    title: 'DevOps',
    description: 'The goal of this project is to showcase a complete DevOps workflow, where code is collaboratively developed, continuously integrated, and automatically deployed to a live server with zero manual intervention.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c', // multiple screens, DevOps setup
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'AWS', 'Docker', 'GitHub-Actions'],
    githubUrl: 'https://github.com/Tejasbamane007/DevOps'
  },
  {
    title: 'Pest Classification and Recommendation System',
    description: 'Trained ML model to classify pest species from user inputs. Recommended pest control strategies based on model output. Applied data preprocessing and training using scikit-learn and pandas.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb', // data scientist working with ML
    tags: ['Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/Tejasbamane007/Pest-Classification-and-Recommendation-System.git'
  },
  {
    title: 'ARIA - Advanced AI Assistant',
    description: 'A futuristic AI assistant with voice recognition, smart chat, music control, file operations, and web navigation. Built using React, Gemini API, and Web Speech API with a cyberpunk UI.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Web Speech API'],
    githubUrl: 'https://github.com/Tejasbamane007/Aria-AI-Assistant.git'
  },
  {
    title: 'Basic Calculator',
    description: 'A simple web-based calculator built using HTML, CSS, and JavaScript that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean user interface and real-time calculation display.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Tejasbamane007/Basic-Calculator'
  },
  {
    title: 'Interactive Quiz',
    description: 'An AI-powered interactive quiz web app that dynamically generates fresh, random questions using the Gemini API. Built with HTML, CSS, and JavaScript, it features a smooth interface with a timer, score tracking, and instant feedback. Every session offers a unique quiz experience, making learning fun and unpredictable.',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d', // coding in progress
    tags: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
    githubUrl: 'https://github.com/Tejasbamane007/Interactive-Quiz'
  },
  {
    title: 'Expense Tracker',
    description: 'A simple, responsive expense tracker web app that lets users add, filter, and visualize their income and expenses. It supports CSV/JSON export, monthly reports, and interactive charts for clear financial insights.',
    image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4', // laptop with charts and code
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Tejasbamane007/Expense-Tracker'
  },
  {
    title: 'Frontend Chat Application',
    description: 'This is a frontend-only real-time chat app UI built using HTML, CSS, and JavaScript. It features a sleek, responsive layout with room-based chatting, dark/light themes, and message bubbles — all designed to mimic a modern messaging experience without any backend.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Tejasbamane007/Frontend-chat-Application'
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
