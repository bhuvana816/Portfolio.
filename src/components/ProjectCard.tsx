// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover rounded-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 text-left">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-800/20 dark:text-indigo-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Live Demo
            <ExternalLink size={16} className="ml-2" />
          </motion.a>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/30 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              GitHub
              <Github size={16} className="ml-2" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
