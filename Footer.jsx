import React from 'react';
import { CheckCircle, Star, Award } from 'lucide-react';
import useInView from '../hooks/useInView';

const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="hakkimizda" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?w=600&q=75"
                alt="Teknik servis çalışması - Çözüm Bilgisayar Ermenek"
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating rating badge */}
            <div className="absolute -bottom-5 -right-3 bg-blue-600 text-white rounded-2xl px-5 py-4 shadow-2xl shadow-blue-500/40">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={22} />
                <div>
                  <div className="text-2xl font-montserrat font-bold leading-none">4.3/5</div>
                  <div className="text-blue-200 font-poppins text-xs mt-0.5">Google Puanı</div>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -left-3 bg-white text-slate-900 rounded-xl px-4 py-3 shadow-lg border border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="text-cyan-500" size={20} />
                <div>
                  <div className="font-montserrat font-bold text-sm">Ermenek'in</div>
                  <div className="text-slate-500 font-poppins text-xs">#1 Teknik Servis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 md:order-2">
            <div className="text-cyan-600 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
              Hakkımızda
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-900 mb-6 leading-tight">
              Ermenek'te{' '}
              <span className="text-blue-600">Güvenilir Teknik Servis</span>
            </h2>
            <p className="text-slate-600 font-poppins text-base leading-relaxed mb-5">
              Çözüm Bilgisayar ve Güvenlik Sistemleri olarak, Ermenek ve çevresinde bireysel
              ve kurumsal müşterilerimize kaliteli teknik servis hizmeti sunmaktayız.
              Deneyimli kadromuzla bilgisayar tamirinden güvenlik sistemlerine kadar geniş
              bir hizmet yelpazesi sunuyoruz.
            </p>
            <p className="text-slate-600 font-poppins text-base leading-relaxed mb-8">
              Her müşterimizin ihtiyacına özel çözümler üretiyor, hızlı ve şeffaf bir servis
              deneyimi yaşatıyoruz. 21 Google yorumunda aldığımız{' '}
              <strong className="text-slate-800">4.3 puan</strong>, müşteri memnuniyetine
              verdiğimiz önemin kanıtıdır.
            </p>

            <div className="space-y-3">
              {[
                'Deneyimli ve Uzman Teknik Kadro',
                'Hızlı Tanı ve Çözüm Garantisi',
                'Şeffaf ve Uygun Fiyatlandırma',
                'Ermenek Merkez Konum – Kolay Ulaşım',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-cyan-500 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-poppins text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="tel:05347121252"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/30 hover:scale-105"
                data-testid="about-call-btn"
              >
                Hemen Ara: 0534 712 12 52
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
