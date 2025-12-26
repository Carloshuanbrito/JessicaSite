
import React, { useState } from 'react';
import { Users, Heart, Gavel, FileSignature, Briefcase, ShieldCheck, FileText, Landmark } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import RevealOnScroll from './ui/RevealOnScroll';

const Services: React.FC = () => {
  const familyServices = [
    { title: "Divórcio", desc: "Consensual e Litigioso, com foco na proteção patrimonial.", icon: Users },
    { title: "Guarda e Pensão", desc: "Defesa dos interesses do menor e equilíbrio familiar.", icon: Heart },
    { title: "Inventários", desc: "Agilidade na partilha de bens judicial e extrajudicial.", icon: FileSignature },
    { title: "Mediação Familiar", desc: "Resolução pacífica de conflitos intrafamiliares.", icon: Gavel },
  ];

  const businessServices = [
    { title: "Consultoria Preventiva", desc: "Análise de riscos e compliance para sua empresa.", icon: ShieldCheck },
    { title: "Defesa Trabalhista", desc: "Atuação estratégica em contencioso trabalhista patronal.", icon: Briefcase },
    { title: "Contratos Comerciais", desc: "Elaboração e revisão para segurança jurídica do negócio.", icon: FileText },
    { title: "Defesas Administrativas", desc: "Atuação especializada junto a órgãos como ANTT.", icon: Landmark },
  ];

  return (
    <section id="atuacao" className="py-20 lg:py-24 bg-porcelain">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle 
            title="Áreas de Atuação" 
            subtitle="Expertise jurídica dividida em dois pilares fundamentais para atender você e seu negócio."
            align="center"
          />
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 mt-16">
          
          {/* Family Law Column */}
          <RevealOnScroll delay={100} className="group h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-marsala/30"></div>
              <h3 className="font-serif text-2xl font-bold text-graphite text-center whitespace-nowrap">Para sua Família</h3>
              <div className="h-px flex-1 bg-marsala/30"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {familyServices.map((service, index) => (
                <div key={index} className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-marsala flex flex-col sm:flex-row items-start gap-4 group-hover:translate-x-1 h-full">
                  <div className="p-3 bg-porcelain rounded-full text-marsala shrink-0">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-graphite mb-1">{service.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Business Law Column */}
          <RevealOnScroll delay={300} className="group mt-8 lg:mt-0 h-full">
             <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-graphite/20"></div>
              <h3 className="font-serif text-2xl font-bold text-graphite text-center whitespace-nowrap">Para sua Empresa</h3>
              <div className="h-px flex-1 bg-graphite/20"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {businessServices.map((service, index) => (
                <div key={index} className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-graphite flex flex-col sm:flex-row items-start gap-4 group-hover:translate-x-1 h-full">
                   <div className="p-3 bg-porcelain rounded-full text-graphite shrink-0">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-graphite mb-1">{service.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Services;
