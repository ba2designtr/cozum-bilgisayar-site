import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'Bilgisayar tamiri ne kadar sürer?',
    a: 'Çoğu arıza aynı gün çözülür. Format ve yazılım işlemleri 1–3 saat, donanım değişimleri parça temine göre 1–3 gün içinde tamamlanır.',
  },
  {
    q: 'Fiyat teklifi ve tanı ücreti var mı?',
    a: 'Hayır. Cihazınıza bakış ve tanı tamamen ücretsizdir. İşlem öncesinde net fiyat sunulur; onayınız olmadan hiçbir işlem yapılmaz.',
  },
  {
    q: 'Hangi marka bilgisayarlara bakıyorsunuz?',
    a: 'HP, Dell, Lenovo, Asus, Acer, Apple MacBook, Toshiba, Samsung ve diğer tüm marka laptop ile masaüstü bilgisayarlar için servis hizmeti sunuyoruz.',
  },
  {
    q: 'Güvenlik kamera sistemi kurulumu ne kadar sürer?',
    a: 'Standart 4 kameralı bir ev sistemi genellikle 1 günde tamamlanır. Büyük kurumsal sistemler için 2–3 gün gerekebilir.',
  },
  {
    q: 'Tamir edilen cihazlar için garanti veriyor musunuz?',
    a: 'Evet. Yaptığımız tüm onarımlar ve değişen parçalar için garanti belgesi sunuyoruz. Garanti süresi işlem türüne göre belirlenir.',
  },
  {
    q: 'Randevu almak gerekiyor mu?',
    a: 'Randevu gerekmez, doğrudan uğrayabilirsiniz. Ancak WhatsApp veya telefonla önceden bilgi verirseniz daha hızlı hizmet alırsınız.',
  },
  {
    q: 'Veri kaybı riski var mı?',
    a: 'İşlem öncesinde sizi bilgilendiriyor ve gerekirse veri yedekleme yapıyoruz. Veri güvenliğiniz bizim için önceliklidir.',
  },
  {
    q: 'Oyun konsolu tamiri yapıyor musunuz?',
    a: 'Evet. PlayStation 4/5, Xbox ve diğer konsol onarımları için servis veriyoruz. HDMI arızası, güç sorunları ve disk okuma problemleri başlıca tamirler arasındadır.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open ? 'border-blue-500/40 shadow-lg shadow-blue-500/5' : 'border-slate-200'
      }`}
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 pr-4">
          <span className="text-blue-600 font-montserrat font-bold text-sm flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-montserrat font-semibold text-slate-900 text-sm sm:text-base">
            {faq.q}
          </span>
        </div>
        <ChevronDown
          className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="px-5 sm:px-6 pb-5 pt-1 bg-slate-50 border-t border-slate-100">
          <p className="text-slate-600 font-poppins text-sm leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="sss" className="py-20 bg-white" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-600 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
            SSS
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-900 mb-4">
            Sıkça Sorulan <span className="text-blue-600">Sorular</span>
          </h2>
          <p className="text-slate-600 font-poppins text-base max-w-xl mx-auto">
            Merak ettiğiniz her şey burada. Cevap bulamazsanız bizi arayın!
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
          <HelpCircle className="text-blue-600 mx-auto mb-3" size={28} />
          <p className="text-slate-700 font-poppins text-sm mb-4">
            Sorunuzu burada bulamadınız mı? Hemen bize ulaşın!
          </p>
          <a
            href="tel:05347121252"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm transition-all duration-200 shadow-md hover:scale-105"
            data-testid="faq-call-btn"
          >
            0534 712 12 52
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
