"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaExchangeAlt,
  FaGlobe,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Transfers() {
  const pageRef = useRef();

  const features = [
    {
      icon: FaBolt,
      title: "Lightning Fast",
      desc: "Transfers complete in 24-48 hours. Express option available for 4-6 hours delivery.",
    },
    {
      icon: FaGlobe,
      title: "100+ Countries",
      desc: "Send money to universities and accounts in over 100 countries worldwide.",
    },
    {
      icon: FaShieldAlt,
      title: "100% Secure",
      desc: "Bank-grade security with full RBI compliance. All transactions are encrypted.",
    },
    {
      icon: FaExchangeAlt,
      title: "Best Rates",
      desc: "Real-time exchange rates with no hidden markups. Save more on every transfer.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Register",
      desc: "Create your account in 2 minutes with basic KYC",
    },
    {
      step: "02",
      title: "Add Details",
      desc: "Enter university/recipient bank details",
    },
    {
      step: "03",
      title: "Transfer",
      desc: "Make payment and track in real-time",
    },
    {
      step: "04",
      title: "Done!",
      desc: "Funds delivered. Get certificate for records",
    },
  ];

  useGSAP(
    () => {
      if (!pageRef.current) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".transfer-badge",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
      )
        .fromTo(
          ".transfer-heading",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
          "-=0.3"
        )
        .fromTo(
          ".transfer-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );

      // Feature cards
      gsap.fromTo(
        ".transfer-feature",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.3)",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Steps with line drawing effect
      gsap.fromTo(
        ".transfer-step",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".steps-section",
            start: "top 75%",
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#FF7A00]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto text-center">
          <div className="transfer-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-8">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">
              Money Transfers
            </span>
          </div>

          <h1 className="transfer-heading opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1] mb-6 max-w-3xl mx-auto">
            Send Money <span className="text-[#FF7A00]">Abroad</span> with Ease
          </h1>

          <p className="transfer-desc opacity-0 text-[#666] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fast, secure, and RBI-compliant international transfers for tuition
            fees, living expenses, and more.
          </p>

          <div className="transfer-desc opacity-0 flex flex-wrap justify-center gap-4">
            <Link href="/pages/contact-us">
              <button className="group flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Start Transfer
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-[#E8E8E8] text-[#666] font-semibold rounded-xl hover:border-[#45267F] hover:text-[#45267F] transition-all duration-300">
              Check Rates
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            Why Choose <span className="text-[#45267F]">Our Transfers</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="transfer-feature opacity-0 p-6 bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] hover:border-[#45267F]/20 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mb-5 mx-auto rounded-2xl bg-gradient-to-br from-[#45267F] to-[#6B4EAB] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="steps-section py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            How It <span className="text-[#FF7A00]">Works</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="transfer-step opacity-0 relative p-6 bg-white rounded-2xl border border-[#E8E8E8] hover:shadow-lg transition-all duration-300"
              >
                <span className="text-5xl font-black text-[#45267F]/10">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#FF7A00] to-[#FFB366] rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-orange-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Send Money Abroad?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Get the best exchange rates and transfer funds to 100+ countries
              in minutes.
            </p>
            <Link href="/pages/contact-us">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#FF7A00] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Start Transfer Now
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
