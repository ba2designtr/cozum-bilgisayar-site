import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import useInView from '../hooks/useInView';

const CtaBanner = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`py-14 bg-blue-600 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      data-testid="cta-banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-white">
                Bilgisayarınız mı arızalı?
              </h2>
              <p className="text-blue-100 font-poppins text-sm mt-1">
                Hemen arayın, aynı gün çözüm bulalım!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:05347121252"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-full font-poppins font-bold text-base transition-all duration-200 shadow-lg hover:scale-105"
              data-testid="cta-banner-call-btn"
            >
              <Phone size={18} />
              Hemen Arayın: 0534 712 12 52
            </a>
            <a
              href="https://wa.me/905347121252?text=Merhaba%2C%20bilgisayarım%20arızalı.%20Yardım%20alabilir%20miyim?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3.5 rounded-full font-poppins font-semibold text-base transition-all duration-200 hover:scale-105"
              data-testid="cta-banner-whatsapp-btn"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
