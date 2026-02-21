
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Kentsel Dönüşüm',
      desc: 'Eski ve dayanıksız binanızı, devlet destekli kentsel dönüşüm projeleriyle modern ve güvenli bir yapıya dönüştürüyoruz.',
      icon: '🏢'
    },
    {
      title: 'Kat Karşılığı İnşaat',
      desc: 'Arsanız veya eski binanız için en adil paylaşım oranlarıyla, kaliteli malzeme ve işçilik garantili inşaat yapıyoruz.',
      icon: '🤝'
    },
    {
      title: 'Daire Alım - Satım',
      desc: 'Bölgemizdeki en iyi yatırım fırsatlarını sunuyor, dairenizi değerinde satmanız veya yeni bir yuva almanız için aracılık ediyoruz.',
      icon: '🔑'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-green-800 font-bold uppercase text-sm mb-2">Neler Yapıyoruz?</h2>
        <h3 className="text-3xl font-bold text-gray-900 uppercase">Hizmet Alanlarımız</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-800 hover:shadow-md transition-all group">
            {/* Grayscale efekti kaldırıldı */}
            <div className="text-5xl mb-6 transition-all">{s.icon}</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors">{s.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
