import React from 'react';
import { MapPin, MonitorCheck, Smartphone } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const NationalReach: React.FC = () => {
  return (
    <section className="bg-white py-20 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-graphite rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#800020 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Seu escritório na palma da mão
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Graças ao processo 100% digital, atendemos clientes em todo o território nacional com a mesma eficiência, segurança e proximidade de um atendimento presencial.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MonitorCheck className="text-marsala" />
                  <span>Processos Eletrônicos em todos os Tribunais</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="text-marsala" />
                  <span>Atendimento via WhatsApp e Videoconferência</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 shrink-0 bg-white/10 p-8 rounded-full backdrop-blur-md border border-white/20">
               <MapPin size={64} className="text-gold" />
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default NationalReach;