import React from 'react';
import { Zap, MapPin, DollarSign, Heart } from 'lucide-react';
import useInView from '../hooks/useInView';

const features = [
  {
    icon: Zap,
    title: 'Hızlı Teknik Müdahale',
    description: 'Çoğu arıza aynı gün çözülür. Hızlı tanı ve hızlı çözüm bizim önceliğimizdir.',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-400/10',
    borderColor: 'hover:border-yellow-500/40',
  },
  {
    icon: MapPin,
    title: 'Ermenek Merkez Konum',
    description: 'Şehir merkezinde kolayca ulaşabileceğiniz konumumuzla her zaman hizmetinizdeyiz.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    icon: DollarSign,
    title: 'Şeffaf Fiyatlandırma',
    description: 'Gizli ücret yok. İşlem öncesinde net fiyat bilgisi ve onay alıyoruz.',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-400/10',
    borderColor: 'hover:border-green-500/40',
  },
  {
    icon: Heart,
    title: 'Müşteri Odaklı Hizmet',
    description: 'Her müşterimize özel ilgi ve çözüm sunuyoruz. Memnuniyetiniz önceliğimiz.',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-400/10',
    borderColor: 'hover:border-red-500/40',
  },
];

const FeatureCard = ({ feature, index }) => {
  const { ref, isVisible } = useInView();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`group bg-slate-800 border border-slate-700 ${feature.borderColor} rounded-2xl p-7 transition-all duration-300 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      data-testid={`why-us-card-${index}`}
    >
      <div
        className={`w-13 h-13 w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className={feature.iconColor} size={26} />
      </div>
      <h3 className="text-lg font-montserrat font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-slate-400 font-poppins text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
};

const WhyUs = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="neden-biz" className="py-20 bg-slate-900" data-testid="why-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-400 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
            Neden Biz?
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-4">
            Bizi Tercih Etmeniz İçin{' '}
            <span className="text-cyan-400">4 Güçlü Neden</span>
          </h2>
          <p className="text-slate-400 font-poppins max-w-2xl mx-auto text-base">
            Müşterilerimizin güvenini kazanmak için çalışıyor, her adımda şeffaflık ve
            kaliteyi ön planda tutuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
