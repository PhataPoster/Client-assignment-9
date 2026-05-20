"use client";
import 'animate.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { RiSearchEyeLine } from "react-icons/ri";
import { BsFillCalendar2PlusFill } from "react-icons/bs";

export default function HeroSlider() {
  const slides = [
    {
      "id": 1,
      "image": "https://plus.unsplash.com/premium_photo-1682141268892-3c31617c7eb0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Book Trusted Doctors Anytime",
      "subtitle": "Professional Healthcare Service",
      "description": "Find experienced doctors, explore specialties, and book appointments easily through DocAppoint.",
      "buttonText": "Book Appointment"
    },
    {
      "id": 2,
      "image": "https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Your Health Comes First",
      "subtitle": "Smart Doctor Appointment System",
      "description": "Manage doctor schedules, appointments, and healthcare services with a secure and modern platform.",
      "buttonText": "Explore Doctors"
    },
    {
      "id": 3,
      "image": "https://plus.unsplash.com/premium_photo-1661340645993-24d4342bc39e?q=80&w=1401&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Meet Top Rated Specialists",
      "subtitle": "Fast & Secure Appointment Booking",
      "description": "Connect with cardiologists, neurologists, dentists, and more from leading hospitals in Bangladesh.",
      "buttonText": "Get Started"
    }
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[500px] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.78)_0%,rgba(3,7,18,0.5)_45%,rgba(3,7,18,0.18)_100%)]" />

              <div className= {`relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 animate__animated animate__fadeInUp animate__medium ${index === 2 && "justify-end"}`}>
                <div className="flex max-w-2xl flex-col gap-4 text-left">
                  <span className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 backdrop-blur-sm">
                    {slide.subtitle}
                  </span>

                  <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="max-w-lg text-base leading-7 text-white/85 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-4">
                    <button className="rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-3 font-bold text-white shadow-lg shadow-emerald-700/25 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-700/40 flex justify-center items-center gap-2"> <RiSearchEyeLine />
                      Book Appointment
                    </button>

                    <div className="rounded-full border border-white/20 bg-white/8 p-[1.5px] shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                      <button className="rounded-full bg-transparent px-5 py-3 font-bold text-white cursor-pointer transition-colors duration-300 hover:text-emerald-100 flex justify-center items-center gap-2"><BsFillCalendar2PlusFill />
                        My Bookings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}