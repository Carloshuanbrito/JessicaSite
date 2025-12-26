import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-porcelain/95 backdrop-blur-md shadow-md py-4' : 'bg-porcelain/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 md:py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0 relative z-50">
          <div className={`p-2 rounded-full border border-gold text-gold transition-colors shadow-sm bg-white/80 backdrop-blur-md`}>
            <Scale size={24} />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className={`font-serif text-xl font-bold tracking-wide text-graphite`}>
              JÉSSICA SANTOS
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-marsala font-medium">
              Advocacia
            </span>
          </div>
        </a>

        {/* Desktop Nav - Changed to hidden on md, visible on lg to prevent overlap */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest text-graphite hover:text-marsala transition-colors font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-marsala after:left-0 after:-bottom-1 after:transition-all hover:after:w-full whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5585997878827"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-marsala text-white text-sm font-medium hover:bg-marsala-dark transition-colors border border-transparent hover:border-marsala-light whitespace-nowrap shadow-lg shadow-marsala/20"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile/Tablet Toggle - Visible up to lg */}
        <button
          className="lg:hidden text-graphite p-2 z-50 focus:outline-none bg-white/50 rounded-md backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-porcelain/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-serif text-graphite hover:text-marsala font-bold tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5585997878827"
            target="_blank"
            rel="noreferrer"
            className="mt-8 px-8 py-4 bg-marsala text-white font-medium hover:bg-marsala-dark transition-colors text-lg rounded-sm shadow-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;