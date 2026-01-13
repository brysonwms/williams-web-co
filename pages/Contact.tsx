import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Website Design & Hosting",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataEncoded = new URLSearchParams({
      "form-name": "contact",
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
    }).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataEncoded,
      });

      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Williams Web Co</title>
        <meta
          name="description"
          content="Contact Williams Web Co to start your custom website project. We respond within one business day."
        />
      </Helmet>

      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div>
              <div className="brand-text-gradient font-bold uppercase tracking-widest text-sm mb-4">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tight">
                Let's build your{" "}
                <span className="brand-text-gradient">digital legacy.</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-12 max-w-lg leading-relaxed font-medium">
                We respond to all inquiries within one business day. Ready to
                level up? Let's talk.
              </p>

              <div className="space-y-10">
                {[
                  {
                    icon: <Mail />,
                    label: "Email Us",
                    value: "brysonwms.business@gmail.com",
                    color: "text-brand-blue",
                  },
                  {
                    icon: <Phone />,
                    label: "Call Us",
                    value: "(919) 888-0676",
                    color: "text-brand-purple",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-6 group"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${item.color}`}
                    >
                      {React.cloneElement(item.icon as React.ReactElement, {
                        size: 24,
                      })}
                    </div>
                    <div>
                      <div className="font-black text-zinc-900 uppercase tracking-widest text-[10px] mb-1 opacity-40">
                        {item.label}
                      </div>
                      <div className="text-xl font-bold text-zinc-800 break-all">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-[3.5rem] p-10 md:p-16 border border-zinc-100 shadow-2xl shadow-brand-blue/10 relative overflow-hidden">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-24 h-24 rounded-full brand-gradient text-white flex items-center justify-center mb-8 shadow-2xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-zinc-900 mb-4">
                    Request Sent!
                  </h2>
                  <p className="text-zinc-500 max-w-sm mx-auto font-medium">
                    Bryson will be in touch with you shortly, {formData.name}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-10 brand-text-gradient font-black text-lg hover:scale-105 transition-transform"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
                        Your Name
                      </label>
                      <input
                        name="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
                        Email Address
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold"
                    >
                      <option>Custom Website Design & Hosting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">
                      Project Brief
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all outline-none font-bold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-6 brand-gradient text-white font-black rounded-2xl transition-all flex items-center justify-center group shadow-2xl shadow-brand-blue/20 text-lg uppercase tracking-widest"
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
    </>
  );
};

export default Contact;
