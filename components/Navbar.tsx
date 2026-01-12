
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 border-b border-brand-blue/10 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer group space-x-3" 
            onClick={() => handleNavClick('home')}
          >
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight text-zinc-900 flex items-center">
              Williams<span className="brand-text-gradient ml-1 font-extrabold">Web Co</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors hover:text-brand-blue ${currentPage === link.id ? 'text-brand-blue' : 'text-zinc-600'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 brand-gradient text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-brand-blue/25 transition-all active:scale-95"
            >
              Start Your Project
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-600 hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-2 text-lg font-bold rounded-lg ${currentPage === link.id ? 'text-brand-blue bg-zinc-50' : 'text-zinc-800'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full px-6 py-4 brand-gradient text-white font-bold rounded-xl hover:opacity-90 transition-all text-center"
          >
            Get Your Website
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
