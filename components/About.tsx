
import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Award, BookOpen, Scale } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sobre" className="bg-graphite py-20 lg:py-32 text-porcelain relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-marsala/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <RevealOnScroll>
              <SectionTitle
                title="Sobre a Dra. Jéssica Santos"
                subtitle="Uma trajetória pautada na ética, técnica e na busca incessante pela justiça."
                color="light"
              />

              <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
                <p>
                  Graduada pela Universidade de Fortaleza (UNIFOR) em 2022, a Dra. Jéssica Santos consolidou sua atuação na advocacia moderna, combinando rigor técnico com uma abordagem profundamente humana.
                </p>
                <p>
                  Diferencia-se no mercado por ser <strong className="text-white font-medium">Mediadora certificada pelo CNJ</strong>, o que lhe permite atuar com foco na agilidade e na pacificação de conflitos.
                </p>

                <div className="p-6 border-l-4 border-marsala bg-white/5 mt-8 backdrop-blur-sm rounded-r-lg">
                  <p className="font-serif italic text-xl text-white">
                    "Minha missão é oferecer um atendimento que une a excelência técnica jurídica ao acolhimento humano necessário nos momentos mais delicados."
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                  <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <BookOpen className="text-gold w-8 h-8 mb-2" />
                    <span className="font-bold text-white">UNIFOR 2022</span>
                    <span className="text-sm text-gray-400">Formação Acadêmica</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <Award className="text-gold w-8 h-8 mb-2" />
                    <span className="font-bold text-white">CNJ Certificada</span>
                    <span className="text-sm text-gray-400">Mediadora de Conflitos</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <Scale className="text-gold w-8 h-8 mb-2" />
                    <span className="font-bold text-white">OAB/CE 48.353</span>
                    <span className="text-sm text-gray-400">Registro Profissional</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <RevealOnScroll delay={200} className="w-full max-w-md">
              <div className="relative w-full group">
                <div className="absolute inset-0 border-2 border-gold/30 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>

                {!imgError ? (
                  <img
                    src="/fotos/jessica-sobre.jpg"
                    alt="Dra. Jéssica Santos"
                    className="relative w-full h-[550px] object-cover object-top shadow-2xl grayscale contrast-125 brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-105 hover:saturate-110 transition-all duration-700 rounded-sm z-10"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                    alt="Consultoria Jurídica"
                    className="relative w-full h-[550px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 rounded-sm z-10"
                  />
                )}

                <div className="absolute inset-0 bg-marsala/10 mix-blend-overlay z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
