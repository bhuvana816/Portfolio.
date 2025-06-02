// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16" direction="up">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A selection of recent projects showcasing practical problem-solving, creativity,
            and clean coding principles.
          </p>
        </AnimatedSection>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
