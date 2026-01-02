"use client";
import React, { useRef } from "react";
import {
  FaAward,
  FaRocket,
  FaHeadset,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const WhyRemitoutSection = () => {
  const sectionRef = useRef();

  const features = [
    {
      icon: FaAward,
      title: "Trusted & Secure",
      desc: "Industry-grade security with RBI compliance. Your data is protected with bank-level encryption.",
      gradient: "from-[#45267F] to-[#7C5BB0]",
    },
    {
      icon: FaRocket,
      title: "Lightning Fast",
      desc: "AI-powered processing for instant approvals. Get your loan sanctioned in under 24 hours.",
      gradient: "from-[#FF7A00] to-[#FFB366]",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      desc: "Dedicated advisors available round the clock. Get expert guidance at every step.",
      gradient: "from-[#45267F] to-[#7C5BB0]",
    },
    {
      icon: FaLock,
      title: "Zero Hidden Fees",
      desc: "Complete transparency in pricing. What you see is what you pay, no surprises.",
      gradient: "from-[#FF7A00] to-[#FFB366]",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Header animation
      gsap.fromTo(
        ".why-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Feature cards stagger animation
      gsap.fromTo(
        ".why-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".why-cards-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA card animation
      gsap.fromTo(
        ".why-cta",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-cta",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="why-remitout"
      className="py-20 lg:py-28 px-6 bg-[#FAFAFA] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#45267F]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF7A00]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="why-header opacity-0 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1A1A1A] tracking-[-0.02em] mb-4">
            Why <span className="text-[#45267F]">Remitout</span>?
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Thousands of students trust us for their education financing needs
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="why-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="why-card opacity-0 group p-6 bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#45267F]/20 shadow-sm hover:shadow-xl hover:shadow-[#45267F]/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#45267F] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="why-cta opacity-0 bg-gradient-to-r from-[#45267F] to-[#6B4EAB] rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#45267F]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 text-base md:text-lg">
                Experience fast, secure, and seamless education financing today.
              </p>
            </div>
            <Link href="/pages/contact-us">
              <button className="group flex items-center gap-3 px-8 py-4 bg-white text-[#45267F] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Get Started
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyRemitoutSection.displayName = "WhyRemitoutSection";
export default WhyRemitoutSection;
