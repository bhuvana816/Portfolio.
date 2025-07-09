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
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16" direction="up">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my projects.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
