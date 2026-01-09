import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AudioEngine from './components/AudioEngine';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] selection:bg-blue-500 selection:text-white">
      <Navbar />
      <AudioEngine />
      
      <main>
        <Hero />
        
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Manifesto />
        </div>
        
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
          <Discography />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
          <Gallery />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-400">
          <Newsletter />
        </div>
      </main>

      <Footer />
      
      {/* Background elements */}
      <div className="fixed -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </div>
  );
};

export default App;