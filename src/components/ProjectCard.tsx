import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="hover"
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between gap-4 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 flex-1"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
          
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-indigo-600 text-white font-medium transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 flex-1"
            variants={buttonVariants}
            whileHover="hover"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;