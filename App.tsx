import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import NationalReach from './components/NationalReach';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-porcelain selection:bg-marsala selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <NationalReach />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5585999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-message-circle"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;