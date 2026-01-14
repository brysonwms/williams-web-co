import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import { SERVICES, STATS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Apple-style slow zoom & fade
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <>
      <Helmet>
        <title>Williams Web Co | Web Design & Hosting</title>
        <meta
          name="description"
          content="Professional web design, hosting, and maintenance for small businesses. Fast, secure, conversion-focused websites by Williams Web Co."
        />
        <link rel="canonical" href="https://williamsweb.co/" />
      </Helmet>

      <div className="flex flex-col">
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-32 md:pt-48 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-12rem] left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-brand-blue/10 rounded-full blur-[160px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span>Accepting New Clients for 2026</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-4xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto"
            >
              Websites that work as{' '}
              <span className="brand-text-gradient">hard as you do.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Professional design, premium hosting, and effortless maintenance
              for local small businesses. Built for speed, branded for trust.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 brand-gradient text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center group shadow-2xl shadow-brand-blue/30"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-900 font-bold rounded-full border border-zinc-200 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm"
              >
                View Recent Work
              </Link>
            </motion.div>

            {/* Hero visual (Apple-style scroll animation) */}
            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="mt-24 mx-auto max-w-5xl"
            >
              <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white">
                <img
                  src="/hero-mockup.png"
                  alt="Website preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <div className="mt-24 pt-10 border-t border-zinc-200/60 grid grid-cols-2 md:grid-cols-3 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-extrabold text-zinc-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="p-10 rounded-[2.5rem] border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center text-white mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-600 mb-8 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-blue mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
              Trusted by local entrepreneurs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-12 rounded-[3rem] border border-zinc-100 bg-zinc-50 text-left"
                >
                  <p className="text-lg italic mb-10">"{t.content}"</p>
                  <div className="font-bold">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
