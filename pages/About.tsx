
import React from 'react';
import { Page } from '../types';
import { Globe, Heart, ShieldCheck, Zap } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">The Story</div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">Small agency focus. <br/>Large agency results.</h1>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Hi, I'm Bryson, the founder of Williams Web Co. I started this agency because I noticed too many small business owners struggling with "do-it-yourself" website builders or getting ignored by large, expensive agencies.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              I believe every local service provider deserves a premium, high-speed digital presence that accurately reflects their hard work. We keep things small and personal so we can focus on one thing: getting you results.
            </p>
            <div className="flex items-center space-x-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                <img src="https://lh3.googleusercontent.com/pw/AP1GczM_PwSxEZHaohkUavo7mWHUzVE99NPCgz2V-MsZcOaBPhA3AlMhbR3GFN3R5hcpwKFu_qXZ8YyEoeCICZ-U2UOZeUTZ6RRcMpGTZVmutAhgH0PHgAhZdsEJ5O6Oa3bwJEV2UGD1WibkdKaRZ2aHul8Ecg=w400-h400-s-no-gm?authuser=0" alt="Bryson Williams" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-zinc-900">Bryson Williams</div>
                <div className="text-sm text-zinc-500 italic">Founder</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 mt-12">
              <img src="https://picsum.photos/id/2/400/600" alt="Work space" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100">
              <img src="https://picsum.photos/id/3/400/600" alt="Coffee" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-white">
          <h2 className="text-3xl font-bold mb-16 text-center">The values that drive us.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap />, title: 'Simplicity First', text: 'We cut the fluff. No buzzwords, no confusing technical jargon. Just clear communication and direct results.' },
              { icon: <ShieldCheck />, title: 'Built to Last', text: 'We use modern, stable technology that ensures your site remains fast and secure for years to come.' },
              { icon: <Heart />, title: 'Client Centric', text: 'Your success is ours. We take pride in helping local businesses grow their footprint through better design.' },
            ].map((v, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Ready to work together?</h2>
          <p className="text-zinc-600 mb-10 text-lg">Whether you need a brand new site or a refresh of an old one, let's talk about how we can help your business shine online.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-10 py-5 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition-all text-lg shadow-xl shadow-zinc-200"
          >
            Start the Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
