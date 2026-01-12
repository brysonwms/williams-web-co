
import React from 'react';
import { Page } from '../types';
import { PORTFOLIO } from '../constants';

interface PortfolioProps {
  setCurrentPage: (page: Page) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ setCurrentPage }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Recent Work</h1>
          <p className="text-lg text-zinc-600">A showcase of clean, effective websites we've built for businesses like yours. Every site is unique, responsive, and ready for growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-100 border border-zinc-100 mb-6 shadow-sm transition-all duration-500">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-zinc-900">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-500 mt-6 max-w-[200px] text-right hidden sm:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-zinc-50 rounded-[3rem] border border-zinc-100 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">Ready to see your business here?</h3>
          <p className="text-zinc-600 mb-10 max-w-xl mx-auto">We typically complete custom small business websites in 2-4 weeks. Let's get started on your design today.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-10 py-4 brand-gradient text-white font-bold rounded-full hover:shadow-xl hover:shadow-brand-blue/20 transition-all shadow-lg active:scale-95"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
