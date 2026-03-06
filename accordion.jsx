import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import useInView from '../hooks/useInView';

const MapSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="konum" className="py-20 bg-slate-50" data-testid="map-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-600 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
            Konum
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-900">
            Bizi <span className="text-blue-600">Ziyaret Edin</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-slate-900 mb-1">Adres</h3>
                  <p className="text-slate-600 font-poppins text-sm leading-relaxed">
                    Taşbaşı Mahallesi Emin Hamibey Caddesi No:22M
                    <br />
                    70400 Ermenek / Karaman
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-slate-900 mb-1">Telefon</h3>
                  <a
                    href="tel:05347121252"
                    className="text-blue-600 hover:text-blue-700 font-poppins font-semibold text-base transition-colors"
                    data-testid="map-phone-link"
                  >
                    0534 712 12 52
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-slate-900 mb-2">
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-1.5">
                    {[
                      ['Pazartesi – Cuma', '09:00 – 18:00', false],
                      ['Cumartesi', '09:00 – 14:00', false],
                      ['Pazar', 'Kapalı', true],
                    ].map(([day, hours, closed]) => (
                      <div key={day} className="flex justify-between text-sm font-poppins">
                        <span className="text-slate-500">{day}</span>
                        <span className={closed ? 'text-red-500 font-medium' : 'text-slate-900 font-semibold'}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Taşbaşı+Mahallesi+Emin+Hamibey+Caddesi+No+22M+Ermenek+Karaman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-poppins font-semibold text-sm transition-all duration-200 shadow-md hover:scale-[1.02]"
              data-testid="get-directions-btn"
            >
              <Navigation size={16} />
              Google Maps'ta Aç
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Ermenek+Karaman+Turkey&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Çözüm Bilgisayar ve Güvenlik Sistemleri Konum - Ermenek Karaman"
                data-testid="google-map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
