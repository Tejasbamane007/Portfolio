
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/TejasBamane123' },
  { name: 'Email', icon: Mail, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=tejasbamane64@gmail.com' }
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold">
              &lt;<span className="text-neon-blue"> TB </span>/&gt; 
            </p>
            <p className="text-gray-400 mt-1">Crafting digital experiences</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <social.icon size={20} />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tejas Bamane. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
