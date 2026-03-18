// src/components/Testimonials.js
import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioData.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioData.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioData.testimonials.length) % portfolioData.testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={portfolioData.testimonials[currentIndex].image} 
                  alt={portfolioData.testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 mb-6"
                />
                <p className="text-xl md:text-2xl italic font-light mb-6 text-slate-300">
                  "{portfolioData.testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-bold text-lg">{portfolioData.testimonials[currentIndex].name}</h4>
                  <p className="text-indigo-400 text-sm">{portfolioData.testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {portfolioData.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-indigo-500 w-8' : 'bg-slate-600'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;