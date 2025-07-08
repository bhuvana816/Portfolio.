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
      className="relative min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white overflow-hidden font-sans"
    >
      <ParticleBackground />

      {/* Subtle Diamond Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 animate-pulse-slow">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 20 10 L 10 20 L 0 10 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center justify-center gap-10">
        {/* Content */}
        <div className="max-w-2xl text-left">
          <AnimatedSection>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
                Amajala Bhuvana Sree Sahithi
              </span>
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <TypeAnimation
              sequence={['Frontend Developer', 2000, 'React Enthusiast', 2000, 'UI/UX Explorer', 2000]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-semibold text-purple-300 mb-5"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              I'm a B.Tech student in Computer Science and Engineering at Vignan's Institute of Information Technology, Visakhapatnam, Andhra Pradesh. Driven by curiosity and a love for innovation, I specialize in transforming ideas into impactful digital experiences.
              <br className="hidden sm:block" /> From concept to deployment, I build web solutions that blend aesthetic appeal with seamless functionality. I’m passionate about writing clean, scalable code and crafting user-centric applications that deliver real value.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.a
              href="#resume"
              className="inline-block px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Resume
            </motion.a>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
