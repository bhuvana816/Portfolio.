import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-sm bg-white dark:bg-[#1f1f1f] rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col"
    >
      <div className="h-40 w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 py-2 px-3 text-sm rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            whileHover={{ scale: 1.03 }}
          >
            <Github size={16} />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 py-2 px-3 text-sm rounded-md bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition"
            whileHover={{ scale: 1.03 }}
          >
            <ExternalLink size={16} />
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
