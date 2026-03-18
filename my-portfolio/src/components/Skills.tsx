// src/components/Skills.js

import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Core Competencies</h2>
          <p className="mt-4 text-slate-600">Tools and skills I use to drive efficiency.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors border border-slate-100"
            >
              <CheckCircle className="text-indigo-600 w-5 h-5" />
              <span className="font-medium text-slate-700 text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;