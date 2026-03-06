import React from 'react';
import { Laptop, Settings, Gamepad2, Camera, Wrench, Wifi } from 'lucide-react';
import useInView from '../hooks/useInView';

const services = [
  {
    icon: Laptop,
    title: 'Laptop & Masaüstü Tamiri',
    description: 'Her marka ve model bilgisayar için profesyonel onarım, bakım ve yükseltme hizmetleri.',
    borderColor: 'hover:border-blue-400',
    shadowColor: 'hover:shadow-blue-500/20',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Settings,
    title: 'Format & Yazılım Kurulumu',
    description: 'İşletim sistemi kurulumu, sürücü yükleme, yazılım konfigürasyonu ve sistem optimizasyonu.',
    borderColor: 'hover:border-cyan-400',
    shadowColor: 'hover:shadow-cyan-500/20',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Gamepad2,
    title: 'Oyun Konsolu Tamiri',
    description: 'PlayStation, Xbox ve diğer oyun konsolları için profesyonel onarım ve bakım hizmetleri.',
    borderColor: 'hover:border-purple-400',
    shadowColor: 'hover:shadow-purple-500/20',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Camera,
    title: 'Güvenlik Kamera Sistemleri',
    description: 'IP kamera, analog CCTV kurulumu, kayıt sistemi ve uzaktan izleme entegrasyonu.',
    borderColor: 'hover:border-green-400',
    shadowColor: 'hover:shadow-green-500/20',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Wrench,
    title: 'Donanım Değişimi',
    description: 'RAM, SSD, HDD, ekran kartı ve diğer donanım parçaları değişimi ve yükseltmesi.',
    borderColor: 'hover:border-orange-400',
    shadowColor: 'hover:shadow-orange-500/20',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Wifi,
    title: 'Ağ ve İnternet Kurulumu',
    description: 'Ev ve ofis ağ altyapısı, router yapılandırması, WiFi optimizasyonu ve network çözümleri.',
    borderColor: 'hover:border-teal-400',
    shadowColor: 'hover:shadow-teal-500/20',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

const ServiceCard = ({ service, index }) => {
  const { ref, isVisible } = useInView();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl border border-slate-200 ${service.borderColor} ${service.shadowColor} p-6 cursor-default transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-testid={`service-card-${index}`}
    >
      <div
        className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className={`${service.iconColor}`} size={28} />
      </div>
      <h3 className="text-lg font-montserrat font-bold text-slate-900 mb-2 leading-tight">
        {service.title}
      </h3>
      <p className="text-slate-600 font-poppins text-sm leading-relaxed">{service.description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="hizmetler" className="py-20 bg-slate-50" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-600 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
            Hizmetlerimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-900 mb-4">
            Tüm Teknik İhtiyaçlarınız{' '}
            <span className="text-blue-600">Tek Çatı Altında</span>
          </h2>
          <p className="text-slate-600 font-poppins max-w-2xl mx-auto text-base">
            Bilgisayardan güvenlik sistemlerine, yazılımdan donanıma kadar kapsamlı teknik çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
