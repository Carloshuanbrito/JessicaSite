
import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!parallaxRef.current || window.scrollY > window.innerHeight) return;

      rafId = requestAnimationFrame(() => {
        if (parallaxRef.current) {
          const speed = 0.3;
          const offset = window.scrollY * speed;
          parallaxRef.current.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row bg-porcelain">

      {/* Conteúdo à Esquerda */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-12 z-20">
        <RevealOnScroll>
          <div className="max-w-xl mx-auto md:mx-0">
            <RevealOnScroll delay={100}>
              <span className="inline-block py-1.5 px-4 border border-marsala text-marsala text-xs font-bold tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm shadow-sm animate-float">
                Inscrita na OAB/CE 48.353
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-graphite leading-[1.2] mb-6">
                Soluções Jurídicas com <span className="text-marsala italic relative whitespace-nowrap">
                  Olhar Humano
                  <svg className="absolute w-full h-2 bottom-0 left-0 text-marsala/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> e Estratégia Empresarial.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={500}>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Especialista em Direito das Famílias e Blindagem Jurídica para Empresas. Atendimento ágil, técnico e acolhedor em todo o Brasil.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => window.open('https://wa.me/5585997878827', '_blank')}>
                  Agendar Consulta Online <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>

      {/* Imagem à Direita */}
      <div className="w-full md:w-1/2 h-[65vh] md:h-screen relative overflow-hidden order-first md:order-last bg-white">
        <div className="absolute inset-0 bg-marsala/5 mix-blend-multiply z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-porcelain via-porcelain/85 to-transparent md:hidden z-20"></div>
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-porcelain via-porcelain/60 to-transparent hidden md:block z-20"></div>

        <div ref={parallaxRef} className="w-full h-full transform will-change-transform">
          {!imageError ? (
            <img
              src="/fotos/jessica.jpg"
              alt="Dra. Jéssica Santos"
              className="w-full h-full object-cover object-top transition-all duration-700 scale-105 origin-top contrast-125 saturate-150 brightness-110"
              fetchPriority="high"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Fallback Elegante - Foto Profissional Genérica */
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
              alt="Advocacia Profissional"
              className="w-full h-full object-cover object-top transition-opacity duration-700 scale-110 origin-center grayscale-[20%]"
            />
          )}
        </div>
      </div>

    </section>
  );
};

export default Hero;
