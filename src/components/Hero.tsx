import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ppp from '../data/ppp.jpg'; 

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden
                bg-gradient-to-br from-white to-sky-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <AnimatedSection className="md:w-1/2">
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-200 dark:border-indigo-800 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={ppp}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
          
          <div className="md:w-1/2">
            <AnimatedSection delay={0.1}>
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Hello, I'm
                </span>
                <div className="mt-2">Amajala Bhuvana Sree Sahithi</div>
              </motion.h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
                Full Stack Developer & Web Designer
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I craft beautiful, functional web applications with a focus on user experience and performance.
                Passionate about creating intuitive interfaces and solving complex problems with clean, efficient code.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
        }}
      >
        <a 
          href="#projects" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md hover:shadow-lg transition-all text-indigo-600 dark:text-indigo-400"
          aria-label="Scroll to projects"
        >
          <ChevronDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;