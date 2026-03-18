// src/components/Contact.js

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Work Together</h2>
            <p className="text-slate-600 mb-8">
              Ready to reclaim your time? Fill out the form or reach out directly. I am currently accepting new executive clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600"><Mail size={20} /></div>
                <span>mercyadebanwo001@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600"><Phone size={20} /></div>
                <span>+234 (8132) 102-624</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600"><MapPin size={20} /></div>
                <span>Lagos, Nigeria (Remote Available)</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            {/* REPLACE 'YOUR_FORMSPREE_ID' with your actual ID from formspree.io */}
            <form action="https://formspree.io/f/mojkykrd" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition transform active:scale-95">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;