
import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, MapPin, ArrowUpRight, Scale } from 'lucide-react';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer id="contato" className="bg-graphite-dark text-white pt-20 pb-10 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16 items-start">
          
          <div className="space-y-6">
            <h5 className="font-serif text-xl text-porcelain border-b border-marsala pb-3 inline-block pr-10">Onde Estamos</h5>
            
            <div className="flex items-start gap-4 text-gray-300 group">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-gold/30 transition-colors">
                <MapPin className="shrink-0 text-gold" size={20} />
              </div>
              <p className="text-sm leading-relaxed">
                Rua República da Armênia, nº 660<br />
                Parque Manibura, Fortaleza/CE<br />
                <span className="text-xs text-gold/90 mt-1 block font-medium uppercase tracking-wider">Próximo ao Cartório Martins</span>
              </p>
            </div>

            <div className="w-full h-52 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Rua%20Rep%C3%BAblica%20da%20Arm%C3%AAnia%2C%20660%20-%20Parque%20Manibura%2C%20Fortaleza%2FCE&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Localização do Escritório"
                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-serif text-xl text-porcelain border-b border-marsala pb-3 inline-block pr-10">Fale Conosco</h5>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5585999999999" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/20 transition-all group"
              >
                <div className="p-3 bg-marsala/20 rounded-lg text-marsala group-hover:bg-marsala group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">WhatsApp</span>
                  <span className="font-medium text-porcelain tracking-wide">(85) 9.9999-9999</span>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-gray-500 group-hover:text-gold transition-colors" />
              </a>

              <a 
                href="mailto:contato@jessicasantos.adv.br" 
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/20 transition-all group"
              >
                <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-graphite transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">E-mail Profissional</span>
                  <span className="font-medium text-porcelain tracking-wide">contato@jessicasantos.adv.br</span>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-gray-500 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-serif text-xl text-porcelain border-b border-marsala pb-3 inline-block pr-10">Siga-nos</h5>
            
            <a 
              href="#" 
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 border border-white/10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent hover:border-gold/40 hover:from-white/[0.07] transition-all duration-500 shadow-lg"
            >
              <div className="p-4 bg-gradient-to-tr from-marsala to-gold rounded-xl shadow-lg shadow-marsala/20 group-hover:scale-110 transition-transform duration-500">
                <Instagram className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1 group-hover:text-gold transition-colors">Acompanhe no Instagram</span>
                <span className="font-serif italic text-xl text-porcelain font-medium">@jessicasantos.adv</span>
              </div>
            </a>

            <div className="pt-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/5 blur-2xl rounded-full"></div>
                {!logoError ? (
                  <img 
                    src="/fotos/jessica-logo.png" 
                    alt="Jéssica Santos Advocacia" 
                    className="relative h-28 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out cursor-default"
                    loading="lazy"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity select-none">
                     <div className="p-3 rounded-full border border-gold/30 text-gold bg-white/5">
                        <Scale size={32} />
                     </div>
                     <div className="flex flex-col">
                        <span className="font-serif text-xl font-bold text-porcelain tracking-wide">JÉSSICA SANTOS</span>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-marsala font-medium">Advocacia</span>
                     </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-400 font-medium tracking-[0.15em] uppercase">
          <p>&copy; {new Date().getFullYear()} Jéssica Santos Advocacia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              Inscrita na OAB/CE 48.353
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
