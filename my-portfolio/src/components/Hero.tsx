// src/components/Hero.js

import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-2">
            Executive Assistant
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Streamlining Success for <span className="text-indigo-600">Visionary Leaders</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
            I handle the logistics so you can handle the leadership. Efficient, discreet, and proactive support tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
              Hire Me
            </a>
            <a href="#about" className="px-8 py-3 bg-white text-slate-700 border border-slate-300 rounded-full font-semibold hover:bg-slate-50 transition">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-indigo-200 rounded-full filter blur-2xl opacity-50 animate-pulse"></div>
            <img 
              src={portfolioData.owner.image} 
              alt={portfolioData.owner.name} 
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;