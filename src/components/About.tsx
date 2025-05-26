import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Code2, GraduationCap, Briefcase, Database, PenTool as Tool, Binary } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    'Programming Languages': {
      icon: Binary,
      items: ['C++', 'Python', 'Javascript']
    },
    'Technologies': {
      icon: Code2,
      items: ['React.js', 'Javascript', 'Next.js', 'Redux']
    },
    'Tools': {
      icon: Tool,
      items: ['Git', 'VS-Code', 'TypeScript', 'Render', 'Vercel']
    },
    'Database': {
      icon: Database,
      items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore']
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
            About Me
          </h2>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection className="mb-16" delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-indigo-600 dark:text-indigo-400" size={24} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend Developer & Web Designer</h4>
              <span className="text-indigo-600 dark:text-indigo-400">April 2025-Present</span>
            </div>
            <h5 className="text-lg text-gray-700 dark:text-gray-300 mb-4">Engiversee</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Developed and launched the Engiversee website using React.js to enhance online presence.</li>
              <li>Created a responsive and user-friendly interface with Tailwind CSS.</li>
              <li>Added key features like mentorship booking, learning modules, and testimonials.</li>
              <li>Improved website speed and SEO for better performance and visibility.</li>
              <li>Handled version control and deployment using Git and GitHub.</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mb-16" delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science and Engineering</h4>
              <span className="text-indigo-600 dark:text-indigo-400">Expected May 2026</span>
            </div>
            <h5 className="text-lg text-gray-700 dark:text-gray-300 mb-2">Vignan's Institute of Information Technology</h5>
            <p className="text-gray-600 dark:text-gray-400">Visakhapatnam, India • CGPA: 9/10</p>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.4}>
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-indigo-600 dark:text-indigo-400" size={24} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
              <motion.div
                key={category}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-indigo-600 dark:text-indigo-400" size={20} />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;