
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Erkan & Özkan Gökçe Yapı Logo" 
                className="h-24 w-auto object-contain -ml-2"
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm border-b-2 border-green-800 pb-2 inline-block">İletişim</h4>
            <ul className="space-y-3 text-sm text-gray-600 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-green-800 font-bold">Adres:</span>
                <span>Cumhuriyet Mah. 23 Nisan Cd. No:7-9A 34788 Çekmeköy/İstanbul</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-800 font-bold">Erkan Gökçe:</span>
                <a className="hover:text-green-800 transition-colors">0537 978 31 47</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-800 font-bold">Özkan Gökçe:</span>
                <a className="hover:text-green-800 transition-colors">0536 323 03 38</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm border-b-2 border-green-800 pb-2 inline-block">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-800 rounded-full"></span>
                Kentsel Dönüşüm Danışmanlığı
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-800 rounded-full"></span>
                Kat Karşılığı İnşaat Projeleri
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-800 rounded-full"></span>
                Gayrimenkul Alım & Satım
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-xs text-center md:text-left">
          <p>© 2026 ERKAN GÖKÇE & ÖZKAN GÖKÇE YAPI TÜM HAKLARI SAKLIDIR</p>
          
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">GELECEĞİ BİRLİKTE İNŞA EDİYORUZ</div>
      </div>
    </footer>
  );
};

export default Footer;
