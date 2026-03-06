import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Clock, Instagram, Globe, X } from 'lucide-react';

const LOGO = 'https://customer-assets.emergentagent.com/job_cozum-ermenek/artifacts/qr4u4ph0_image.png';

const Footer = () => {
  const [adOpen, setAdOpen] = useState(true);

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const quickLinks = [
    ['#hakkimizda', 'Hakkımızda'],
    ['#hizmetler', 'Hizmetler'],
    ['#nasil-calisir', 'Nasıl Çalışır?'],
    ['#neden-biz', 'Neden Biz?'],
    ['#sss', 'SSS'],
    ['#iletisim', 'İletişim'],
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="inline-block bg-white rounded-2xl px-3 py-2 shadow-lg mb-4" data-testid="footer-logo">
                <img src={LOGO} alt="Çözüm Bilgisayar" className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="text-white font-montserrat font-bold text-base">
                Çözüm Bilgisayar ve Güvenlik Sistemleri
              </div>
            </div>
            <p className="text-slate-400 font-poppins text-sm leading-relaxed mb-6 max-w-xs">
              Ermenek'te bilgisayar tamiri, güvenlik sistemleri ve teknik servis alanında güvenilir çözüm ortağınız.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:05347121252"
                className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200"
                data-testid="footer-phone-icon"
                title="Ara"
              >
                <Phone size={17} className="text-blue-400" />
              </a>
              <a
                href="https://wa.me/905347121252"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600/20 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-200"
                data-testid="footer-whatsapp-icon"
                title="WhatsApp"
              >
                <MessageCircle size={17} className="text-green-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Sayfalar
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(([href, label]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-cyan-400 text-sm font-poppins transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-5 text-sm uppercase tracking-wider">
              İletişim
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm font-poppins leading-relaxed">
                  Taşbaşı Mah. Emin Hamibey Cad. No:22M<br />Ermenek / Karaman
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-cyan-400 flex-shrink-0" />
                <a href="tel:05347121252" className="text-slate-400 hover:text-white text-sm font-poppins transition-colors">
                  0534 712 12 52
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm font-poppins">Pzt–Cuma: 09:00–18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-slate-500 text-sm font-poppins text-center sm:text-left">
            © {new Date().getFullYear()} Çözüm Bilgisayar ve Güvenlik Sistemleri. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-600 font-poppins">
            <span>Ermenek Bilgisayar Tamiri</span>
            <span>•</span>
            <span>Karaman Güvenlik Kamera</span>
          </div>
        </div>

        {/* ba2design Ad Banner */}
        {adOpen && (
          <div
            className="relative overflow-hidden rounded-2xl border border-purple-500/25 p-4"
            style={{ background: 'linear-gradient(135deg, rgba(88,28,135,0.25) 0%, rgba(15,23,42,0.8) 60%, rgba(131,24,67,0.2) 100%)' }}
            data-testid="ba2design-ad-banner"
          >
            <button
              onClick={() => setAdOpen(false)}
              className="absolute top-3 right-3 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
              data-testid="ad-close-btn"
            >
              <X size={12} className="text-slate-300" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-4 pr-8">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>
                  <span className="text-white font-montserrat font-black text-sm">b2</span>
                </div>
                <div>
                  <div className="text-white font-montserrat font-bold text-sm">ba2design</div>
                  <div className="text-purple-300 text-xs font-poppins">Web Tasarım & Dijital Ajans</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-700" />
              <p className="text-slate-300 font-poppins text-xs text-center sm:text-left flex-1">
                Bu web sitesi <span className="text-purple-300 font-semibold">ba2design</span> tarafından tasarlanmıştır. Profesyonel web sitesi için bize ulaşın!
              </p>
              <div className="flex gap-2 flex-shrink-0">
                <a
                  href="https://www.instagram.com/ba2designtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white px-3 py-2 rounded-xl text-xs font-poppins font-semibold transition-all duration-200 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                  data-testid="ad-instagram-btn"
                >
                  <Instagram size={13} />
                  Instagram
                </a>
                <a
                  href="https://www.ba2design.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-xl text-xs font-poppins font-semibold transition-all duration-200 hover:scale-105 border border-slate-600"
                  data-testid="ad-website-btn"
                >
                  <Globe size={13} />
                  ba2design.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
