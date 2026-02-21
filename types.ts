
// Added React import to resolve React namespace for React.ReactNode type
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Konut' | 'Ticari' | 'Endüstriyel';
  location: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
