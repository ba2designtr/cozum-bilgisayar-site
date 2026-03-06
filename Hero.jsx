import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const { ref, isVisible } = useInView();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    setError('');
    const text = encodeURIComponent(
      `Merhaba, ben ${form.name}.\nTelefon: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/905347121252?text=${text}`, '_blank');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="iletisim" className="py-24 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-600 text-xs font-poppins font-bold uppercase tracking-widest mb-3">
            İletişim
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-black text-slate-900 mb-4">
            Bizimle <span className="text-blue-600">İletişime Geçin</span>
          </h2>
          <p className="text-slate-500 font-poppins text-base max-w-lg mx-auto">
            Formu doldurun, WhatsApp üzerinden doğrudan bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Info panel */}
          <div
            className={`rounded-3xl p-8 text-white transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-7">Hızlı Ulaşım</h3>

            <a
              href="tel:05347121252"
              className="flex items-center gap-4 p-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-200 hover:scale-[1.02] mb-4 group"
              data-testid="contact-phone-btn"
            >
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-blue-200 font-poppins text-xs mb-0.5">Telefon ile Ara</div>
                <div className="font-montserrat font-bold text-lg">0534 712 12 52</div>
              </div>
            </a>

            <a
              href="https://wa.me/905347121252?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-green-600 hover:bg-green-500 transition-all duration-200 hover:scale-[1.02] mb-8 group"
              data-testid="contact-whatsapp-btn"
            >
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-green-200 font-poppins text-xs mb-0.5">WhatsApp ile Yaz</div>
                <div className="font-montserrat font-bold text-lg">0534 712 12 52</div>
              </div>
            </a>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="font-poppins text-sm leading-relaxed">
                  Taşbaşı Mah. Emin Hamibey Cad. No:22M<br />70400 Ermenek / Karaman
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={17} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="font-poppins text-sm space-y-0.5">
                  <div>Pzt–Cuma: <span className="text-white font-semibold">09:00–18:00</span></div>
                  <div>Cumartesi: <span className="text-white font-semibold">09:00–14:00</span></div>
                  <div>Pazar: <span className="text-red-400 font-semibold">Kapalı</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-700 mb-2">
                  Adınız Soyadınız <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ahmet Yılmaz"
                  className="w-full px-4 py-4 border-2 border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-2xl font-poppins text-slate-900 placeholder-slate-400 focus:outline-none transition-colors duration-200 bg-slate-50 focus:bg-white"
                  data-testid="contact-name-input"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-700 mb-2">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="05XX XXX XX XX"
                  className="w-full px-4 py-4 border-2 border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-2xl font-poppins text-slate-900 placeholder-slate-400 focus:outline-none transition-colors duration-200 bg-slate-50 focus:bg-white"
                  data-testid="contact-phone-input"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-slate-700 mb-2">
                  Mesajınız <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Arızanızı veya talebinizi kısaca açıklayın..."
                  className="w-full px-4 py-4 border-2 border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-2xl font-poppins text-slate-900 placeholder-slate-400 focus:outline-none transition-colors duration-200 bg-slate-50 focus:bg-white resize-none"
                  data-testid="contact-message-input"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm font-poppins bg-red-50 border-2 border-red-100 px-4 py-3 rounded-2xl" data-testid="contact-error">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl font-poppins font-bold text-base flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-green-600/30 hover:shadow-green-500/50 hover:scale-[1.02]"
                data-testid="contact-submit-btn"
              >
                <MessageCircle size={20} />
                WhatsApp ile Gönder
              </button>

              <p className="text-slate-400 text-xs font-poppins text-center leading-relaxed">
                Gönder tuşuna bastıktan sonra WhatsApp açılır. Mesajı onaylayarak iletebilirsiniz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
