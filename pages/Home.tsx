
import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { SERVICES, STATS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-40 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] bg-brand-cyan/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-40 -left-20 w-[25rem] h-[25rem] bg-brand-purple/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-40 w-[20rem] h-[20rem] bg-brand-blue/20 rounded-full blur-[100px] animate-bounce duration-[10000ms]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span>Accepting New Clients for 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto">
            Websites that work as <span className="brand-text-gradient">hard as you do.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional design, premium hosting, and effortless maintenance for local small businesses. Built for speed, branded for trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
  to="/contact"
  className="w-full sm:w-auto px-10 py-4 brand-gradient text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-brand-blue/30 transition-all flex items-center justify-center group"
>
  Start Your Project
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>
            <Link
  to="/portfolio"
  className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-900 font-bold rounded-full border border-zinc-200 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm text-center"
>
  View Recent Work
</Link>
          </div>

          <div className="mt-24 pt-10 border-t border-zinc-200/60 grid grid-cols-2 md:grid-cols-3 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-extrabold text-zinc-900 mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4">Complete Digital Presence</h2>
            <p className="text-zinc-500 text-lg">We handle the technical heavy lifting, you handle the business growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-10 rounded-[2.5rem] border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform"></div>
                <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center text-white mb-8 group-hover:rotate-3 transition-transform brand-shadow">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-600 mb-8 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center mr-3 shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="brand-text-gradient font-bold uppercase tracking-widest text-sm mb-4">Unmatched Quality</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">Built with the same care you put into your business.</h2>
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                We believe that small businesses deserve high-end technology. Our stack is optimized for speed, security, and conversion—giving you a competitive edge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Zap />, title: 'Peak Performance', text: 'Google loves fast sites. So do your customers.' },
                  { icon: <ShieldCheck />, title: 'Enterprise Security', text: 'Managed updates and SSL included in every plan.' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-blue flex items-center justify-center shadow-sm border border-zinc-100">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <h4 className="font-bold text-zinc-900">{item.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
               <div className="absolute -inset-4 brand-gradient opacity-20 blur-3xl rounded-[3rem] group-hover:opacity-30 transition-opacity"></div>
               <div className="relative aspect-video bg-white rounded-[3rem] border border-zinc-200 overflow-hidden shadow-2xl p-4">
                  <img 
                    src="https://lh3.googleusercontent.com/pw/AP1GczMcCTf1fBsb7jxRLrlkTxdysXffJVn3ZeIdksXcpLoMs4siZvB7Ocz_etyCmTqU9gNZ4WQt7BjrouR_C-hXXVsXKrdFBIy7kuYWtwirUwoRtCCIH6wgr1pVywJ5s5m0-sz_4lYz2ZPBwb_61M3ne7KZSQ=w760-h490-s-no-gm?authuser=0" 
                    alt="Williams Web Co hosting infrastructure" 
                    className="w-full h-full object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-10 right-10 p-8 brand-gradient text-white rounded-[2rem] shadow-2xl max-w-xs transform group-hover:-translate-y-2 transition-transform">
                    <div className="text-3xl font-black mb-1">99.9%</div>
                    <div className="text-sm font-bold opacity-90 uppercase tracking-widest">Server Uptime</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-16">Trusted by local entrepreneurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-12 rounded-[3rem] border border-zinc-100 bg-zinc-50/50 text-left hover:border-brand-blue/30 transition-colors">
                    <div className="text-brand-blue mb-6">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                    </div>
                    <p className="text-lg text-zinc-800 italic mb-10 leading-relaxed font-medium">"{t.content}"</p>
                    <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center text-white font-black text-xl shadow-lg">
                        {t.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-zinc-900 text-lg">{t.name}</div>
                        <div className="text-xs font-bold text-brand-blue uppercase tracking-widest">{t.company}</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brand-gradient rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Stop losing leads to a <span className="text-brand-cyan">slow website.</span></h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join the dozens of businesses scaling their growth with Williams Web Co.
            </p>
            <Link
  to="/contact"
  className="px-12 py-5 bg-white text-brand-deep font-black rounded-full hover:scale-105 transition-all text-xl shadow-2xl active:scale-95 inline-block"
>
  Claim Your Free Consultation
</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
