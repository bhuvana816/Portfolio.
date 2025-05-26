import React from 'react';
import { motion } from 'framer-motion';
import socialLinks from '../data/social';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.1,
      y: -5, 
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-3">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-md">
              Creating beautiful, functional digital experiences that bring ideas to life.
            </p>
          </div>
          
          <motion.div
            className="flex gap-4"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map(social => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors duration-300"
                variants={itemVariants}
                whileHover="hover"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Bhuvana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;