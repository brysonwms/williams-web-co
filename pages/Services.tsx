import React from "react";
import { Helmet } from "react-helmet-async";
import { Page } from "../types";
import { SERVICES } from "../constants";
import { Check, ArrowRight } from "lucide-react";

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  return (
    <>
      <Helmet>
        <title>Our Services | Williams Web Co</title>
        <meta
          name="description"
          content="Explore professional web design, hosting, and website management services tailored for small businesses by Williams Web Co."
        />
      </Helmet>

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Services tailored for small business success.
            </h1>
            <p className="text-lg text-zinc-600">
              We don't just build websites. We build digital assets that help
              you save time, look professional, and make more money.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row items-center gap-12 p-8 md:p-16 rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-zinc-600 mb-10 text-lg leading-relaxed">
                    {service.description} Our approach is centered around your
                    business goals, ensuring every pixel serves a purpose.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-zinc-800 font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3">
                          <Check size={12} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors group"
                  >
                    Inquire about {service.title}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex-1 w-full aspect-video md:aspect-[4/3] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 shadow-inner">
                  <img
                    src={`https://picsum.photos/id/${idx + 50}/800/600`}
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-32 pt-20 border-t border-zinc-100">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                Our Simple 4-Step Process
              </h2>
              <p className="text-zinc-500">
                How we take your idea from concept to launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We chat about your goals, audience, and style preferences.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "We create a custom design mockup for your approval.",
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "We turn the design into a lightning-fast, secure website.",
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "We handle hosting setup and push your new site live.",
                },
              ].map((p, i) => (
                <div key={i} className="relative p-6">
                  <div className="text-5xl font-black text-indigo-50 mb-4">
                    {p.step}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">
                    {p.title}
                  </h4>
                  <p className="text-sm text-zinc-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
