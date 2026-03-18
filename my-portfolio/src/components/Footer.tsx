// src/components/Footer.js
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">AS.</h3>
            <p className="text-sm leading-relaxed">
              Providing executive-level support with discretion, efficiency, and a proactive mindset.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mercy-adebanwo-8a488a34a" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:mercyadebanwo001@gmail.com" className="hover:text-indigo-400 transition" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Adebanwo Mercy Temitope. All rights reserved.</p>
          <p className="mt-2 text-slate-600">Designed by GlitterTech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;