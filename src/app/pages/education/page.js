"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaGraduationCap,
  FaUniversity,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const pageRef = useRef();

  const services = [
    {
      icon: FaUniversity,
      title: "University Selection",
      desc: "Expert guidance on choosing the right university based on your profile, budget, and career goals.",
    },
    {
      icon: FaFileAlt,
      title: "Application Support",
      desc: "Complete assistance with SOP, LORs, and application documents to maximize your chances.",
    },
    {
      icon: FaGraduationCap,
      title: "Scholarship Guidance",
      desc: "Find and apply for scholarships that can significantly reduce your education costs.",
    },
    {
      icon: FaCheckCircle,
      title: "Visa Assistance",
      desc: "End-to-end visa support including documentation, interview prep, and filing.",
    },
  ];

  const countries = [
    { name: "USA", flag: "🇺🇸", universities: "3000+" },
    { name: "UK", flag: "🇬🇧", universities: "150+" },
    { name: "Canada", flag: "🇨🇦", universities: "100+" },
    { name: "Australia", flag: "🇦🇺", universities: "40+" },
    { name: "Germany", flag: "🇩🇪", universities: "400+" },
    { name: "Ireland", flag: "🇮🇪", universities: "30+" },
  ];

  useGSAP(
    () => {
      if (!pageRef.current) return;

      const tl = gsap.timeline();
      tl.fromTo(
        ".edu-badge",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
      )
        .fromTo(
          ".edu-heading",
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power4.out" },
          "-=0.3"
        )
        .fromTo(
          ".edu-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );

      gsap.fromTo(
        ".edu-service",
        { y: 60, opacity: 0, rotateY: -10, transformPerspective: 800 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".country-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".countries-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#45267F]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="edu-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-8">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">
              Education Services
            </span>
          </div>

          <h1 className="edu-heading opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1] mb-6 max-w-3xl">
            Your Dream <span className="text-[#45267F]">University</span> Awaits
          </h1>

          <p className="edu-desc opacity-0 text-[#666] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            From university selection to visa approval, we guide you through
            every step of your study abroad journey.
          </p>

          <div className="edu-desc opacity-0">
            <Link href="/pages/contact-us">
              <button className="group flex items-center gap-3 px-8 py-4 bg-[#45267F] text-white font-semibold rounded-xl shadow-lg shadow-[#45267F]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Get Free Counseling
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            Our <span className="text-[#FF7A00]">Services</span>
          </h2>
          <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="edu-service opacity-0 p-6 bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] hover:border-[#45267F]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-[#45267F] to-[#6B4EAB] flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-4">
            Study <span className="text-[#45267F]">Destinations</span>
          </h2>
          <p className="text-[#666] text-center mb-12 max-w-xl mx-auto">
            We partner with top universities across the globe
          </p>
          <div className="countries-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="country-card opacity-0 p-5 bg-white rounded-2xl border border-[#E8E8E8] text-center hover:shadow-lg hover:border-[#45267F]/20 transition-all duration-300 cursor-pointer"
              >
                <span className="text-4xl mb-3 block">{country.flag}</span>
                <h3 className="font-bold text-[#1A1A1A] mb-1">
                  {country.name}
                </h3>
                <p className="text-xs text-[#666]">
                  {country.universities} Universities
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#45267F] to-[#6B4EAB] rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-[#45267F]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Book a free counseling session with our education experts today.
            </p>
            <Link href="/pages/contact-us">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#45267F] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Book Free Session
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
