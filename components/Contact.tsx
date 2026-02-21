
import React from 'react';

const Contact: React.FC = () => {
  // Updated map URL with user-provided precise coordinates: 41.023030, 29.222336
  const mapUrl = "https://www.google.com/maps?q=41.023030,29.222336&z=17&output=embed";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-green-600 font-bold uppercase text-sm mb-4 tracking-widest">İletişim Bilgileri</h2>
          <h3 className="text-4xl font-extrabold mb-8 text-white uppercase tracking-tight">Ofisimize Bekliyoruz</h3>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Çekmeköy'deki ofisimizde projelerimizi konuşalım, dairelerinizi değerlendirelim.
          </p>
          
          <div className="space-y-6">
            <div onClick={() => window.open(mapUrl, '_blank')} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 shadow-lg cursor-pointer">
              <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 uppercase tracking-tight">Ofis Adresi</h4>
                <p className="text-gray-300 font-medium">Cumhuriyet Mah. 23 Nisan Cd. No:7-9A 34788 <br/>Çekmeköy / İstanbul</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 shadow-lg">
              <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Telefon Numaralarımız</h4>
                <div className="space-y-3">
                  <a className="group flex flex-col">
                    <span className="text-xs text-green-500 font-bold uppercase mb-0.5">Erkan Gökçe</span>
                    <span className="text-gray-200 text-lg group-hover:text-green-400 transition-colors">0537 978 31 47</span>
                  </a>
                  <a className="group flex flex-col">
                    <span className="text-xs text-green-500 font-bold uppercase mb-0.5">Özkan Gökçe</span>
                    <span className="text-gray-200 text-lg group-hover:text-green-400 transition-colors">0536 323 03 38</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 inline-flex items-center gap-2">
             <div className="w-2 h-6 bg-green-800 rounded-full"></div>
             <h4 className="text-xl font-bold text-white uppercase tracking-wider">Ofis Konumumuz</h4>
          </div>
          <div className="relative h-[450px] lg:h-full min-h-[400px] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ERKAN & ÖZKAN GÖKÇE YAPI Ofis Konumu"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
