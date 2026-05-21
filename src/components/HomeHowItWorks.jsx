"use client";

import "animate.css";

const steps = [
  {
    number: "01",
    title: "Search a specialist",
    description: "Find doctors by name or specialty using quick search.",
    delay: "0.05s",
  },
  {
    number: "02",
    title: "Pick a time",
    description: "Choose an available slot that fits your schedule.",
    delay: "0.15s",
  },
  {
    number: "03",
    title: "Confirm booking",
    description: "Submit details and get your appointment confirmed.",
    delay: "0.25s",
  },
];

const HomeHowItWorks = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
          <div className="animate__animated animate__fadeInLeft">
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">HOW IT WORKS</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-emerald-900">Book a visit in minutes</h2>
            <p className="mt-3 text-slate-600 max-w-xl">A simple flow that keeps you in control, from searching to confirming your appointment.</p>
          </div>
          <div className="rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-4 text-white shadow-lg animate__animated animate__fadeInRight">
            <p className="text-sm uppercase tracking-[0.2em]">Average booking time</p>
            <p className="text-3xl font-bold">Under 3 minutes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md animate__animated animate__fadeInUp"
              style={{ animationDelay: step.delay }}
            >
              <div className="flex items-center gap-3">
                <span className="text-emerald-600 text-xl font-bold">{step.number}</span>
                <div className="h-px flex-1 bg-emerald-100" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
