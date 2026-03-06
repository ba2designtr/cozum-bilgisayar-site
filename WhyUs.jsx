import React from 'react';
import { Phone, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Getirin veya Arayın',
    description:
      'Cihazınızı bizzat getirin ya da telefon / WhatsApp ile bize ulaşın. Aynı gün randevu alabilirsiniz.',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    numberColor: 'text-blue-500',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    number: '02',
    icon: Search,
    title: 'Ücretsiz Tanı',
    description:
      'Uzman teknisyenimiz cihazınızı inceler, ücretsiz tanı yapar ve net fiyat teklifi sunar. Onayınız olmadan işlem yapılmaz.',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    numberColor: 'text-cyan-500',
    borderColor: 'hover:border-cyan-500/50',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Hızlı Teslimat',
    description:
      'Onarım tamamlanır, cihazınız garanti belgesiyle teslim edilir. Çoğu işlem aynı gün biter.',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    numberColor: 'text-green-500',
    borderColor: 'hover:border-green-500/50',
  },
];

const StepCard = ({ step, index, isLast }) => {
  const { ref, isVisible } = useInView();
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center">
      <div
        ref={ref}
        className={`group w-full bg-slate-800 border border-slate-700 ${step.borderColor} rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-xl ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        data-testid={`step-card-${index}`}
      >
        <div className={`text-5xl font-montserrat font-black ${step.numberColor} opacity-20 mb-4 leading-none`}>
          {step.number}
        </div>
        <div
          className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={step.iconColor} size={30} />
        </div>
        <h3 className="text-lg font-montserrat font-bold text-white mb-3">{step.title}</h3>
        <p className="text-slate-400 font-poppins text-sm leading-relaxed">{step.description}</p>
      </div>

      {/* Connector arrow */}
      {!isLast && (
        <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-slate-700 rounded-full items-center justify-center">
          <ArrowRight className="text-slate-400" size={16} />
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="nasil-calisir" className="py-20 bg-slate-900" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-400 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
            Nasıl Çalışır?
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-4">
            3 Adımda <span className="text-cyan-400">Hızlı Servis</span>
          </h2>
          <p className="text-slate-400 font-poppins max-w-xl mx-auto text-base">
            Cihazınızı teslim etmekten onarıma kadar tüm süreci şeffaf ve hızlı yönetiyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:05347121252"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-poppins font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:scale-105"
            data-testid="how-it-works-cta"
          >
            <Phone size={18} />
            Hemen Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
