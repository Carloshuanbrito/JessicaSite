import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import RevealOnScroll from './ui/RevealOnScroll';

const testimonials = [
  {
    id: 1,
    name: "Wanessa Dutra",
    role: "Cliente",
    text: "Sei nem como agradecer, muito profissionalismo e dedicada ao caso. Sabe ouvir, explica tudo com paciência e clareza, e não enrola, fala o que precisa ser dito e me deu segurança. Me senti representada de verdade, com muita competência e atenção nos mínimos detalhes. Se você quer alguém que resolve, é ela. Indico de olhos fechados!"
  },
  {
    id: 2,
    name: "Katrinna Sousa",
    role: "Cliente",
    text: "Profissional incrível, dedicada e muito competente! Sempre muito atenciosa, transmite segurança e clareza em cada orientação. Recomendo de olhos fechados! Minha advogada da vida!"
  },
  {
    id: 3,
    name: "Paula",
    role: "Cliente",
    text: "Profissional extremamente competente, atenciosa e comprometida com o cliente. Explica tudo com clareza e busca sempre a melhor solução jurídica."
  },
  {
    id: 4,
    name: "Conceito Loja",
    role: "Cliente Empresarial",
    text: "A Jéssica Santos é uma excelente advogada! Desde o primeiro atendimento, ela demonstrou conhecimento e dedicação. Fui muito bem orientada e me senti segura em todas as etapas. Agradeço muito pelo suporte e recomendo a todos que precisam de assistência jurídica."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play paused on hover could be added, but keeping simple auto-play for now
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-porcelain relative overflow-hidden">
      {/* Decorative Background Quote */}
      <div className="absolute top-20 left-10 text-marsala/5 select-none pointer-events-none">
        <Quote size={300} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <SectionTitle
            title="O que dizem nossos clientes"
            subtitle="Histórias reais de quem confiou na nossa expertise jurídica."
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="max-w-5xl mx-auto mt-12 px-4 md:px-12">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">

              {/* Desktop Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute top-1/2 -left-6 lg:-left-10 -translate-y-1/2 w-16 h-16 bg-graphite text-gold border border-gold/30 rounded-full items-center justify-center hover:bg-marsala hover:text-white hover:border-marsala transition-all duration-300 shadow-2xl z-20 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-marsala/20"
                aria-label="Anterior"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </button>
              <button
                onClick={handleNext}
                className="hidden md:flex absolute top-1/2 -right-6 lg:-right-10 -translate-y-1/2 w-16 h-16 bg-graphite text-gold border border-gold/30 rounded-full items-center justify-center hover:bg-marsala hover:text-white hover:border-marsala transition-all duration-300 shadow-2xl z-20 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-marsala/20"
                aria-label="Próximo"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </button>

              <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                  {/* Image Area */}
                  <div className="shrink-0 relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-marsala to-gold shadow-lg flex items-center justify-center bg-white">
                      <div className="w-full h-full rounded-full border-4 border-white bg-porcelain flex items-center justify-center text-marsala">
                        <span className="font-serif text-5xl md:text-6xl font-bold">
                          {currentTestimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white p-2.5 rounded-full shadow-lg text-gold border border-gray-100">
                      <Quote size={20} fill="currentColor" />
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-gold text-gold" />
                      ))}
                    </div>

                    <blockquote className="font-serif text-xl md:text-2xl text-graphite italic leading-relaxed mb-6">
                      "{currentTestimonial.text}"
                    </blockquote>

                    <div>
                      <h4 className="font-bold text-lg text-graphite">{currentTestimonial.name}</h4>
                      <p className="text-marsala text-sm font-medium uppercase tracking-wider">{currentTestimonial.role}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Mobile Navigation Controls */}
              <div className="flex items-center justify-between mt-10 md:hidden px-2">
                <button
                  onClick={handlePrev}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-graphite text-gold border border-gold/20 shadow-lg hover:bg-marsala hover:text-white active:scale-95 transition-all"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Mobile Indicators */}
                <div className="flex gap-2.5 items-center">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`rounded-full transition-all duration-500 ease-out ${idx === currentIndex
                        ? 'bg-gold w-12 h-2 shadow-sm'
                        : 'bg-gray-400 w-2 h-2 hover:bg-marsala/50'
                        }`}
                      aria-label={`Ir para depoimento ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-graphite text-gold border border-gold/20 shadow-lg hover:bg-marsala hover:text-white active:scale-95 transition-all"
                  aria-label="Próximo"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

            </div>

            {/* Desktop Indicators */}
            <div className="hidden md:flex justify-center items-center gap-3 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all duration-500 ease-out ${idx === currentIndex
                    ? 'bg-gold w-12 h-2 shadow-sm'
                    : 'bg-gray-400 w-2 h-2 hover:bg-marsala/50'
                    }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
