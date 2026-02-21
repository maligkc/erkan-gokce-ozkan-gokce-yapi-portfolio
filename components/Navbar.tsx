
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'projects', label: 'Projeler' },
    { id: 'services', label: 'Hizmetlerimiz' },
    { id: 'contact', label: 'İletişim' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
            <img 
              src="/images/logo.png" 
              alt="Erkan & Özkan Gökçe Yapı Logo" 
              className="h-20 w-auto object-contain"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.src = "/images/logo.png";
              }}
            />
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-semibold transition-colors hover:text-green-800 ${
                  activeSection === item.id ? 'text-green-800' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-[#113b29] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-green-900 transition-all shadow-sm"
            >
              İletişime Geç
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-800 rounded-lg font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <a onClick={() => scrollTo('contact')} className="block w-full text-center bg-green-800 text-white py-3 rounded-lg font-bold">Erkan Gökçe Ara</a>
            <a onClick={() => scrollTo('contact')} className="block w-full text-center bg-gray-100 text-gray-800 py-3 rounded-lg font-bold">Özkan Gökçe Ara</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
