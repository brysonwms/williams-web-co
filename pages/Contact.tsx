
import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <div className="brand-text-gradient font-bold uppercase tracking-widest text-sm mb-4">Contact Us</div>
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tight">Let's build your <span className="brand-text-gradient">digital legacy.</span></h1>
            <p className="text-lg text-zinc-600 mb-12 max-w-lg leading-relaxed font-medium">
              We respond to all inquiries within one business day. Ready to level up? Let's talk.
            </p>

            <div className="space-y-10 mb-12">
              {[
                { icon: <Mail />, label: 'Email Us', value: 'brysonwms.business@gmail.com', color: 'text-brand-blue' },
                { icon: <Phone />, label: 'Call Us', value: '(919) 888-0676', color: 'text-brand-purple' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className={`w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <div className="font-black text-zinc-900 uppercase tracking-widest text-[10px] mb-1 opacity-40">{item.label}</div>
                    <div className="text-xl font-bold text-zinc-800 break-all">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 shadow-xl shadow-brand-blue/5 relative">
              <div className="absolute top-4 right-4 text-brand-blue opacity-10 font-black text-6xl uppercase tracking-tighter">Offer</div>
              <h3 className="text-xl font-black text-zinc-900 mb-4">Free Speed & SEO Audit</h3>
              <p className="text-zinc-600 text-sm leading-relaxed font-medium">Include your URL in the message for a custom video breakdown of how we can improve your performance.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[3.5rem] p-10 md:p-16 border border-zinc-100 shadow-2xl shadow-brand-blue/10 relative overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-24 h-24 rounded-full brand-gradient text-white flex items-center justify-center mb-8 shadow-2xl">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-black text-zinc-900 mb-4">Request Sent!</h2>
                <p className="text-zinc-500 max-w-sm mx-auto font-medium">Bryson will be in touch with you shortly, {formData.name}.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 brand-text-gradient font-black text-lg hover:scale-105 transition-transform"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Your Name</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@email.com"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Service Interest</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold appearance-none cursor-pointer"
                  >
                    <option>Custom Web Design</option>
                    <option>Premium Hosting Plan</option>
                    <option>Full Agency Retainer</option>
                    <option>Strategic SEO Audit</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Project Brief</label>
                  <textarea 
                    required
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly describe your business goals..."
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-6 brand-gradient text-white font-black rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center group shadow-2xl shadow-brand-blue/20 text-lg uppercase tracking-widest"
                >
                  Initiate Project
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
