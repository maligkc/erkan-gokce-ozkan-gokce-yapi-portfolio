
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-green-800 font-bold uppercase text-sm mb-2 tracking-widest border-l-4 border-green-800 pl-3">Hakkımızda</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase">Geleceği İnşa Ediyoruz</h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Çekmeköy merkezli faaliyet gösteren ve kentsel dönüşüm ile kat karşılığı inşaat projelerinde uzmanlaşmış profesyonel bir müteahhitlik firmasıyız. Arsa sahiplerine ve yatırımcılara; planlama, projelendirme ve anahtar teslim uygulama süreçlerinin tamamında şeffaf, güvenilir ve çözüm odaklı hizmet sunuyoruz.             </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Her projede mühendislik standartlarına uygunluğu, kaliteli malzeme kullanımını ve zamanında teslim ilkesini ön planda tutuyoruz. Deneyimli teknik kadromuzla birlikte modern, güvenli ve yüksek yaşam standartlarına sahip yapılar inşa ederek bulunduğumuz bölgeye değer katmaya devam ediyoruz.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-700">20+ Yıl</div>
              <div className="text-sm text-gray-600">Sektör Tecrübesi</div>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-700">%100</div>
              <div className="text-sm text-gray-600">Zamanında Teslim</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <img
            src="/images/about-example-image.jpg"
            alt="Erkan & Özkan Gökçe Yapı Şantiye"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-8 border-white"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">Güvenli Tapu</div>
                <div className="text-xs text-gray-500">Şeffaf İşlem Garantisi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
