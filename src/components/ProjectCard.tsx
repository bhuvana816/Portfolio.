// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-[#1c1c2b] rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-white/10"
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover object-top"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="min-w-[70px] text-center px-3 py-1 text-xs font-medium bg-purple-800/30 text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          {project.description.length > 120
            ? `${project.description.slice(0, 120)}...`
            : project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-1.5 text-xs font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
          >
            Live Demo <ExternalLink size={14} className="ml-2" />
          </motion.a>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-1.5 text-xs font-medium text-gray-200 border border-gray-500 rounded-md hover:bg-white/10 transition"
            >
              GitHub <Github size={14} className="ml-2" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
