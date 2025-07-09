import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full sm:max-w-sm bg-[#1c1c2b] rounded-xl shadow-md border border-white/10 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-t-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-purple-800/30 text-purple-300 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4">
          {project.description.length > 100
            ? `${project.description.slice(0, 100)}...`
            : project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-3 py-1.5 text-xs font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
            >
              Live Demo <ExternalLink size={14} className="ml-1" />
            </motion.a>
          )}

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-3 py-1.5 text-xs font-medium text-gray-200 border border-gray-500 rounded-md hover:bg-white/10 transition"
            >
              GitHub <Github size={14} className="ml-1" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
