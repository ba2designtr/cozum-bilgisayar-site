import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_cozum-ermenek/artifacts/qr4u4ph0_image.png';

const navLinks = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#nasil-calisir', label: 'Nasıl Çalışır?' },
  { href: '#neden-biz', label: 'Neden Biz?' },
  { href: '#sss', label: 'SSS' },
  { href: '#iletisim', label: 'İletişim' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3" data-testid="logo-placeholder">
            <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-lg shadow-black/20 flex items-center justify-center">
              <img
                src={LOGO}
                alt="Çözüm Bilgisayar Logo"
                className="h-8 w-auto"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-white font-montserrat font-semibold text-sm">Bilgisayar & Güvenlik</div>
              <div className="text-cyan-400 font-poppins text-xs">Ermenek / Karaman</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-slate-300 hover:text-cyan-400 text-sm font-poppins transition-colors duration-200 relative group"
                data-testid={`nav-${l.href.replace('#', '')}`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="tel:05347121252"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-poppins font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
              data-testid="nav-call-btn"
            >
              <Phone size={14} />
              Hemen Ara
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-3 mt-1 space-y-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-4 py-3 text-sm font-poppins rounded-xl transition-all duration-200"
                data-testid={`mobile-nav-${l.href.replace('#', '')}`}
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:05347121252"
              className="flex items-center justify-center gap-2 mt-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-poppins font-semibold text-sm"
              data-testid="mobile-nav-call-btn"
            >
              <Phone size={16} />
              0534 712 12 52
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
