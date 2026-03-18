// src/App.js

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* Simple About Section placeholder - You can create a component for this */}
        <section id="about" className="py-20 bg-white">
           <div className="max-w-3xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold mb-6">About Me</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               I am a dedicated Executive Assistant with a passion for organization and efficiency. 
               My goal is to provide seamless support that allows executives to focus on strategic growth.
             </p>
           </div>
        </section>
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;