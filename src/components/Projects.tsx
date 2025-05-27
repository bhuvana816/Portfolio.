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
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0e0e0e]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16" direction="up">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text"
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
