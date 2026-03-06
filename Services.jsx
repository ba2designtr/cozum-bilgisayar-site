import React, { useEffect, useState } from 'react';
import { Phone, MapPin, ChevronDown, Star, Shield, Clock, Award } from 'lucide-react';

const AnimatedStat = ({ end, suffix = '', label, delay = 0, icon: Icon }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let start = null;
      const run = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1800, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setCount(Math.floor(e * end));
        if (p < 1) requestAnimationFrame(run);
        else setCount(end);
      };
      requestAnimationFrame(run);
    }, delay);
    return () => clearTimeout(t);
  }, [end, delay]);

  return (
    <div className="text-center" data-testid={`hero-stat`}>
      <div className="text-3xl sm:text-4xl font-montserrat font-black text-white mb-1">
        {count}{suffix}
        {label === 'Google Puanı' && <Star className="inline text-yellow-400 fill-yellow-400 ml-1 mb-1" size={22} />}
      </div>
      <div className="text-slate-400 text-xs font-poppins uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="ana-sayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 20% 60%, #172554 0%, #0f172a 50%, #09111e 100%)' }}
      data-testid="hero-section"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Glow left */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] opacity-[0.15] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
      {/* Glow right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.08] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-3xl">

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8 hero-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-cyan-300 text-xs font-poppins px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              Ermenek'in Güvenilir Teknik Servisi
            </div>
            <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-poppins px-4 py-2 rounded-full">
              <Star size={12} className="fill-yellow-400" />
              4.3 Google Puanı
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-black text-white leading-[1.1] mb-6 hero-slide-up">
            Ermenek'in{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #06b6d4)' }}
            >
              En Güvenilir
            </span>
            <br />
            Bilgisayar &{' '}
            <span className="text-blue-400">Güvenlik Uzmanı</span>
          </h1>

          <p className="text-lg text-slate-400 font-poppins mb-10 max-w-xl leading-relaxed hero-slide-up-delay">
            Laptop tamiri, güvenlik kameraları, format ve teknik servis alanında uzman kadro.
            Aynı gün çözüm garantisi.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 hero-slide-up-delay2">
            <a
              href="tel:05347121252"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-base font-poppins font-bold transition-all duration-300 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-105"
              data-testid="hero-call-btn"
            >
              <Phone size={20} />
              Hemen Ara — 0534 712 12 52
            </a>
            <a
              href="https://maps.google.com/?q=Ermenek+Karaman+Turkey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-2xl text-base font-poppins font-semibold transition-all duration-300 hover:bg-cyan-500/5"
              data-testid="hero-directions-btn"
            >
              <MapPin size={20} />
              Yol Tarifi Al
            </a>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 hero-slide-up-delay3">
            {[
              { end: 43, suffix: '/5', label: 'Google Puanı', delay: 800 },
              { end: 21, suffix: '+', label: 'Müşteri Yorumu', delay: 1000 },
              { end: 500, suffix: '+', label: 'Servis Sayısı', delay: 1200 },
              { end: 8, suffix: '+', label: 'Yıllık Deneyim', delay: 1400 },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-5">
                <AnimatedStat {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#hakkimizda')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors duration-200 animate-bounce"
        data-testid="scroll-indicator"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
