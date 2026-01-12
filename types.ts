
// Added React import to fix "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export type Page = 'home' | 'services' | 'about' | 'portfolio' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  company: string;
}