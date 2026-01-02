"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaGraduationCap,
  FaPlane,
  FaHandHoldingUsd,
  FaStethoscope,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Loans() {
  const pageRef = useRef();

  const loanTypes = [
    {
      icon: FaGraduationCap,
      title: "Education Loans",
      subtitle: "Study Abroad & India",
      desc: "Compare rates from 20+ banks for your higher education. Get up to ₹1.5 Cr with competitive interest rates starting at 8.5%.",
      features: [
        "24-hour approval",
        "No collateral up to ₹7.5L",
        "Flexible repayment",
      ],
      gradient: "from-[#45267F] to-[#6B4EAB]",
    },
    {
      icon: FaPlane,
      title: "Travel Loans",
      subtitle: "Explore the World",
      desc: "Fund your dream vacation or educational tour. Quick approval with minimal documentation required.",
      features: [
        "Same-day processing",
        "Low interest rates",
        "Up to ₹10 Lakhs",
      ],
      gradient: "from-[#FF7A00] to-[#FFB366]",
    },
    {
      icon: FaHandHoldingUsd,
      title: "Personal Loans",
      subtitle: "For All Your Needs",
      desc: "Unsecured personal loans for education-related expenses, accommodation, or living costs abroad.",
      features: [
        "No collateral needed",
        "Quick disbursement",
        "Flexible tenure",
      ],
      gradient: "from-[#45267F] to-[#6B4EAB]",
    },
    {
      icon: FaStethoscope,
      title: "Medical Education",
      subtitle: "MBBS & Healthcare",
      desc: "Specialized loans for medical students pursuing MBBS, MD, or healthcare courses in India and abroad.",
      features: [
        "Higher loan limits",
        "Extended moratorium",
        "Partner universities",
      ],
      gradient: "from-[#FF7A00] to-[#FFB366]",
    },
  ];

  useGSAP(
    () => {
      if (!pageRef.current) return;

      const tl = gsap.timeline();

      // Badge
      tl.fromTo(
        ".loans-badge",
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
      );

      // Heading
      tl.fromTo(
        ".loans-heading",
        { y: 60, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // Description
      tl.fromTo(
        ".loans-desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Loan cards with 3D effect
      gsap.fromTo(
        ".loan-card",
        {
          y: 80,
          opacity: 0,
          rotateX: 15,
          scale: 0.9,
          transformPerspective: 1000,
          transformOrigin: "center top",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".loans-grid",
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
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#45267F]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF7A00]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="loans-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-8">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">
              Loan Solutions
            </span>
          </div>

          <h1 className="loans-heading opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1] mb-6 max-w-3xl">
            Find the Perfect <span className="text-[#45267F]">Loan</span> for
            Your Journey
          </h1>

          <p className="loans-desc opacity-0 text-[#666] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Compare rates from India's top banks and get approved in 24 hours.
            Whether it's education, travel, or personal needs - we've got you
            covered.
          </p>
        </div>
      </section>

      {/* Loans Grid */}
      <section className="py-8 md:py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="loans-grid grid sm:grid-cols-2 gap-6 md:gap-8">
            {loanTypes.map((loan, idx) => (
              <div
                key={idx}
                className="loan-card opacity-0 group p-6 md:p-8 bg-[#FAFAFA] rounded-3xl border border-[#E8E8E8] hover:border-[#45267F]/20 hover:shadow-2xl hover:shadow-[#45267F]/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 mb-6 rounded-2xl bg-gradient-to-br ${loan.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <loan.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#45267F] transition-colors">
                    {loan.title}
                  </h3>
                  <span className="text-[#FF7A00] text-sm font-medium">
                    {loan.subtitle}
                  </span>
                </div>

                <p className="text-[#666] text-sm md:text-base leading-relaxed mb-6">
                  {loan.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {loan.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white rounded-full text-xs font-medium text-[#45267F] border border-[#E8E8E8]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="/pages/contact-us"
                  className="inline-flex items-center gap-2 text-[#45267F] font-semibold text-sm hover:text-[#FF7A00] transition-colors group/link"
                >
                  Learn More
                  <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#45267F] to-[#6B4EAB] rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-[#45267F]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure Which Loan is Right for You?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Our expert advisors can help you find the perfect loan based on
              your needs and profile.
            </p>
            <Link href="/pages/contact-us">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#45267F] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Talk to an Expert
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
