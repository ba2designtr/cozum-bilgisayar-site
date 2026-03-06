import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button with pulse */}
      <a
        href="https://wa.me/905347121252?text=Merhaba%2C%20teknik%20servis%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:shadow-green-500/70 transition-all duration-300 hover:scale-110"
        data-testid="whatsapp-float-btn"
        title="WhatsApp ile yazın"
        aria-label="WhatsApp ile iletişime geç"
        style={{ animation: 'whatsappPulse 2.5s ease-in-out infinite' }}
      >
        <MessageCircle size={26} />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-4 z-50 w-12 h-12 bg-slate-700 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        data-testid="scroll-top-btn"
        aria-label="Sayfanın başına git"
      >
        <ArrowUp size={20} />
      </button>

      {/* Mobile Sticky Call Button (bottom left) */}
      <div className="md:hidden fixed bottom-4 left-4 z-50" data-testid="mobile-call-btn">
        <a
          href="tel:05347121252"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg shadow-blue-500/40 transition-all duration-200 font-poppins font-semibold text-sm"
          aria-label="Hemen ara"
        >
          <Phone size={17} />
          Hemen Ara
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
