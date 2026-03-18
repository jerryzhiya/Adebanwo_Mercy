// src/components/About.js

import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Award, Clock, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={portfolioData.owner.aboutImage} 
                alt="Adebanwo Mercy Temitope" 
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
            {/* Decorative background blob */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              More Than Just an Assistant, <br/>
              <span className="text-indigo-600">A Strategic Partner.</span>
            </h3>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              {portfolioData.owner.bio}
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              My approach is simple: I believe that effective administration is the invisible engine of a successful business. Whether it's managing complex international travel, organizing high-stakes board meetings, or streamlining digital workflows, I bring a calm, solution-oriented mindset to every challenge.
            </p>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                <Clock className="text-indigo-600 w-8 h-8 mb-2" />
                <h4 className="font-bold text-slate-900">Efficiency</h4>
                <p className="text-xs text-slate-500 mt-1">Saving you hours daily</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                <ShieldCheck className="text-indigo-600 w-8 h-8 mb-2" />
                <h4 className="font-bold text-slate-900">Discretion</h4>
                <p className="text-xs text-slate-500 mt-1">100% Confidential</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                <Award className="text-indigo-600 w-8 h-8 mb-2" />
                <h4 className="font-bold text-slate-900">Excellence</h4>
                <p className="text-xs text-slate-500 mt-1">Detail-oriented</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;