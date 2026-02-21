
import React from 'react';
import { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: '2+1 seçeneğiyle 18 Bağımsız Bölümlü Projemiz',
    category: 'Konut',
    location: 'Cumhuriyet Mah.',
    imageUrl: '/images/projects/1.jpg',
    description: '2+1 daire tiplerinden oluşan, 6 katlı ve toplam 18 bağımsız bölümlü konut projesi.'
  },
  {
    id: '2',
    title: '2+1 seçeneğiyle 16 Bağımsız Bölümlü Projemiz',
    category: 'Konut',
    location: 'Cumhuriyet Mah.',
    imageUrl: '/images/projects/3.jpg',
    description: '2+1 daire tiplerinden oluşan, 8 katlı ve toplam 16 bağımsız bölümlü konut projesi.'
  },
  {
    id: '3',
    title: '2+1 seçeneğiyle 10 Bağımsız Bölümlü Projemiz',
    category: 'Konut',
    location: 'Aydınlar Mah.',
    imageUrl: '/images/projects/2.jpg',
    description: '2+1 daire tiplerinden oluşan, 5 katlı ve toplam 10 bağımsız bölümlü konut projesi.'
  },
  {
    id: '4',
    title: '2+1 ve 3+1 seçeneğiyle 14 Bağımsız Bölümlü Projemiz',
    category: 'Konut',
    location: 'Aydınlar Mah.',
    imageUrl: '/images/projects/4.jpg',
    description: '2+1 ve 3+1 daire tiplerinden oluşan, 7 katlı ve toplam 14 bağımsız bölümlü konut projesi.'
  },
  {
    id: '5',
    title: '2+1 seçeneğiyle 10 Bağımsız Bölümlü Projemiz',
    category: 'Konut',
    location: 'Cumhuriyet Mah.',
    imageUrl: '/images/projects/5.jpg',
    description: '2+1 daire tiplerinden oluşan, 5 katlı ve toplam 10 bağımsız bölümlü konut projesi.'
  },
  {
    id: '6',
    title: '2+1 seçeneğiyle 12 Bağımsız Bölümlü Projemiz',
    category: 'Konut',
    location: 'Aydınlar Mah.',
    imageUrl: '/images/projects/6.jpg',
    description: '2+1 daire tiplerinden oluşan, 6 katlı ve toplam 12 bağımsız bölümlü konut projesi.'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 className="text-green-800 font-bold uppercase text-sm mb-2 tracking-widest border-l-4 border-green-800 pl-3">Neler Yaptık?</h2>
          <h3 className="text-3xl font-bold text-gray-900 uppercase">Projelerimiz</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-green-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg">{project.id == '1' ? "Devam Ediyor" : "Tamamlandı"}</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{project.location}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">{project.title}</h4>
              <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
