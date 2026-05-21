"use client";

import "animate.css";
import { CalendarCheck, Headset, ShieldCheck, Stethoscope } from "lucide-react";

const features = [
  {
    title: "Verified Doctors",
    description: "Choose from trusted specialists with verified credentials and experience.",
    icon: Stethoscope,
    delay: "0.05s",
  },
  {
    title: "Smart Scheduling",
    description: "Find the best time slot quickly with real-time availability.",
    icon: CalendarCheck,
    delay: "0.15s",
  },
  {
    title: "Secure Records",
    description: "Your booking details stay protected with secure data handling.",
    icon: ShieldCheck,
    delay: "0.25s",
  },
  {
    title: "Helpful Support",
    description: "Get quick answers from our support team whenever you need.",
    icon: Headset,
    delay: "0.35s",
  },
];

const HomeWhyChoose = () => {
  return (
    <section className="bg-emerald-50/40 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate__animated animate__fadeIn">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">WHY DOCCAPPOINT</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-emerald-900">Comfortable care, every step</h2>
          <p className="mt-3 text-slate-600">Everything you need for smooth, reliable doctor appointments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white/90 border border-emerald-100 p-6 shadow-md hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
                style={{ animationDelay: item.delay }}
              >
                <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-emerald-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChoose;
