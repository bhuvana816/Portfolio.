// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white overflow-hidden"
    >
      <ParticleBackground />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <AnimatedSection>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="block text-slate-300">Hello, I'm</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
              Amajala Bhuvana Sree Sahithi
            </span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Web Designer',
              2000,
              'React & Django Enthusiast',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl font-medium text-slate-400 mb-6"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-slate-300 mb-8 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            I craft beautiful, functional web applications with a focus on user experience and performance. Passionate about creating intuitive interfaces and solving complex problems with clean, efficient code.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-800/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href="#projects"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white border border-white/20 shadow-md hover:shadow-lg transition-all"
          aria-label="Scroll to projects"
        >
          <ChevronDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
