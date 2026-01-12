
import React from 'react';
import { Mail, Instagram, Linkedin, Twitter, Phone } from 'lucide-react';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
                <Logo className="w-8 h-8" />
                <div className="text-white text-2xl font-black tracking-tight">
                Williams<span className="brand-text-gradient ml-1">Web Co</span>
                </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-zinc-400 font-medium">
              Modern digital infrastructure for modern small businesses. We design, host, and optimize your online presence so you can scale.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-zinc-900 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-blue transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-brand-blue transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-brand-blue transition-colors">Portfolio</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-blue transition-colors">Our Story</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-white transition-colors cursor-default">High-End Web Design</li>
              <li className="hover:text-white transition-colors cursor-default">Cloud Hosting 99.9%</li>
              <li className="hover:text-white transition-colors cursor-default">Technical Maintenance</li>
              <li className="hover:text-white transition-colors cursor-default">Local SEO Growth</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Get in Touch</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all"><Mail size={16} /></div>
                <span className="group-hover:text-white transition-colors break-all text-[13px]">brysonwms.business@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all"><Phone size={16} /></div>
                <span className="group-hover:text-white transition-colors text-[13px]">(919) 888-0676</span>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="w-full mt-2 py-4 brand-gradient text-white rounded-xl font-bold hover:shadow-lg hover:shadow-brand-blue/20 transition-all text-xs uppercase tracking-widest"
                >
                  Book a Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <p>&copy; {currentYear} Williams Web Co</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
