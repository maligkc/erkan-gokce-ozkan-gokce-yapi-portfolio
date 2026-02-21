
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=2070" 
          alt="Boutique Construction Project" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-4 rounded-full bg-[#113b29] text-white text-xs font-bold uppercase tracking-wider mb-6">
            Güvenle İnşa, Kaliteyle Teslim
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 uppercase">
            YILLARIN TECRÜBESİYLE <br/><span className="text-green-400 text-3xl md:text-4xl">Geleceğinizi İnşa Ediyoruz</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
            Kentsel dönüşümde şeffaf süreç, kat karşılığı inşaatta adil paylaşım ve güvenilir daire alım satımında doğru adres. Yılların tecrübesiyle yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#113b29] text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition-all shadow-lg shadow-green-900/20"
            >
              Teklif Alın
            </button>
            <a 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all text-center border-2 border-white cursor-pointer"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
