import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import useInView from '../hooks/useInView';

const reviews = [
  {
    name: 'Ahmet Y.',
    rating: 5,
    text: 'Bilgisayarımdaki hatayı 1 saat içinde çözdü. Çok güler yüzlü ve hızlı hizmet. Kesinlikle tavsiye ederim.',
    date: '1 ay önce',
  },
  {
    name: 'Fatma K.',
    rating: 5,
    text: 'Laptopumun ekranını değiştirdiler. Çok profesyonel bir hizmet aldım, fiyatlar da oldukça uygundu.',
    date: '2 ay önce',
  },
  {
    name: 'Mehmet S.',
    rating: 4,
    text: 'Güvenlik kamera sistemimi kurdu. İşini iyi biliyor, hızlı ve temiz bir çalışma sergiledi.',
    date: '3 ay önce',
  },
  {
    name: 'Ayşe D.',
    rating: 5,
    text: 'Format attım, her şey kusursuz çalışıyor. Çok samimi ve dürüst bir yer. Kesinlikle tekrar geleceğim.',
    date: '4 ay önce',
  },
  {
    name: 'Ali R.',
    rating: 5,
    text: 'Xbox konsolumu tamir ettiler, harika iş çıkardılar. Fiyat da makul, tavsiye ederim.',
    date: '5 ay önce',
  },
  {
    name: 'Zeynep T.',
    rating: 5,
    text: 'Ofisimize 8 kameralı güvenlik sistemi kurdu. Hızlı, temiz ve profesyonel. Uzaktan izleme de mükemmel çalışıyor.',
    date: '6 ay önce',
  },
];

const StarRating = ({ rating, size = 16 }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 fill-slate-100'}
      />
    ))}
  </div>
);

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="yorumlar" className="py-20 bg-white" data-testid="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-cyan-600 text-sm font-poppins font-semibold uppercase tracking-widest mb-3">
            Müşteri Yorumları
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-900 mb-8">
            Müşterilerimiz <span className="text-blue-600">Ne Diyor?</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex flex-col items-center bg-slate-50 rounded-2xl px-10 py-6 border border-slate-200">
            <div className="text-6xl font-montserrat font-bold text-slate-900 leading-none mb-2">
              4.3
            </div>
            <StarRating rating={4} size={24} />
            <div className="text-slate-500 font-poppins text-sm mt-2">21 Google yorumuna dayalı</div>
            <div className="flex items-center gap-1.5 mt-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="h-4"
              />
              <span className="text-slate-400 text-xs font-poppins">üzerinde değerlendirmeler</span>
            </div>
          </div>
        </div>

        {/* Review Slider */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="min-w-full px-2">
                  <div
                    className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm"
                    data-testid={`review-card-${i}`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">
                        {review.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="font-montserrat font-semibold text-slate-900">
                          {review.name}
                        </div>
                        <StarRating rating={review.rating} />
                        <div className="text-slate-400 text-xs font-poppins mt-1">{review.date}</div>
                      </div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google"
                        className="h-4 mt-1"
                      />
                    </div>
                    <p className="text-slate-700 font-poppins text-base leading-relaxed italic">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
              data-testid="review-prev-btn"
              aria-label="Önceki yorum"
            >
              <ChevronLeft size={20} />
            </button>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'bg-blue-600 w-7 h-2.5' : 'bg-slate-300 w-2.5 h-2.5'
                }`}
                data-testid={`review-dot-${i}`}
                aria-label={`Yorum ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
              data-testid="review-next-btn"
              aria-label="Sonraki yorum"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Professional response note */}
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-blue-50 border border-blue-200 rounded-2xl text-center">
          <MessageSquare className="text-blue-600 mx-auto mb-3" size={24} />
          <p className="text-slate-700 font-poppins text-sm italic leading-relaxed">
            &quot;Her müşterimizin geri bildirimi bizim için değerlidir. Hizmet kalitemizi sürekli
            geliştirmeye devam ediyoruz. Yaşadığınız herhangi bir sorun için lütfen bizimle
            iletişime geçin.&quot;
          </p>
          <div className="text-slate-500 text-xs mt-3 font-poppins font-semibold">
            — Çözüm Bilgisayar Yönetimi
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
