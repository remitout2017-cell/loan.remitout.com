"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  FaChartSimple,
  FaClock,
  FaShieldHalved,
  FaArrowRightArrowLeft,
} from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../context/LoadingContext";
import Link from "next/link";
import Navbar from "./common/Navbar";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const container = useRef();
  const featuresRef = useRef();
  const { isFinished } = useLoading();

  useGSAP(
    () => {
      if (!isFinished) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.out",
          duration: 1,
        },
      });

      // Smooth staggered entrance for hero content
      tl.fromTo(
        ".hero-badge",
        { y: 40, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 }
      )
        .fromTo(
          ".hero-title-line",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta-group",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-stats-item",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        );

      // Hero image with smooth scale
      tl.fromTo(
        ".hero-image-container",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=1.2"
      );

      // Static floating elements entrance (no continuous animation)
      tl.fromTo(
        ".floating-element",
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.8"
      );
    },
    { scope: container, dependencies: [isFinished] }
  );

  // Scroll-triggered animation for features
  useGSAP(
    () => {
      if (!featuresRef.current) return;

      gsap.fromTo(
        ".feature-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: featuresRef }
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-[#FAFAFA] relative overflow-hidden"
    >
      <Navbar />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#45267F]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF7A00]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <section className="relative px-6 pt-8 pb-16 md:pt-16 md:pb-24 lg:px-[100px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-[1400px] mx-auto">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Badge */}
            <div className="hero-badge opacity-0 inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm">
              <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-[#666] text-sm font-medium">
                Trusted by 10,000+ Students
              </span>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1]">
                <span className="hero-title-line block opacity-0">
                  Education Loans
                </span>
                <span className="hero-title-line block opacity-0">
                  Made <span className="text-[#45267F]">Simple</span>
                </span>
              </h1>
              <p className="hero-title-line opacity-0 text-[18px] md:text-[20px] font-medium text-[#FF7A00]/90">
                Compare rates from India's top banks
              </p>
            </div>

            {/* Description */}
            <p className="hero-desc opacity-0 text-[#666] text-base md:text-lg max-w-[480px] leading-relaxed">
              Get the best education loan in minutes. Fast approval, transparent
              rates, and dedicated support for your study abroad journey.
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group opacity-0 flex flex-wrap gap-4 items-center">
              <Link href="/pages/contact-us">
                <button className="group relative px-8 py-4 bg-[#1A1A1A] text-white text-base font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-[#45267F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
              <Link
                href="/pages/about-us"
                className="text-[#666] font-medium hover:text-[#45267F] transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-[#E8E8E8]">
              {[
                { value: "₹500Cr+", label: "Loans Processed" },
                { value: "24 hrs", label: "Avg. Approval" },
                { value: "4.9★", label: "User Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="hero-stats-item opacity-0">
                  <p className="text-[24px] md:text-[28px] font-bold text-[#1A1A1A]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#999] font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image & Floating Elements */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Main Image Container */}
            <div className="hero-image-container opacity-0 relative w-full max-w-[500px] aspect-[4/5]">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#45267F]/20 via-[#FF7A00]/10 to-transparent rounded-[48px] blur-2xl opacity-60" />

              {/* Image */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/hero_section_banner.webp"
                  alt="Students celebrating education loan approval"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Card - Top Right */}
            <div className="floating-element hidden md:flex absolute top-[10%] right-[-5%] lg:right-[5%] items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg shadow-black/5 border border-[#F0F0F0] opacity-0">
              <div className="w-10 h-10 bg-gradient-to-br from-[#45267F] to-[#6B4EAB] rounded-xl flex items-center justify-center">
                <FaChartSimple className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  Compare 20+ Banks
                </p>
                <p className="text-xs text-[#999]">Best rates guaranteed</p>
              </div>
            </div>

            {/* Floating Card - Bottom Left */}
            <div className="floating-element hidden md:block absolute bottom-[15%] left-[-8%] lg:left-[0%] max-w-[240px] p-4 bg-white rounded-2xl shadow-lg shadow-black/5 border border-[#F0F0F0] opacity-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00] to-[#FFB366] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  PS
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    Priya S.
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3 h-3 text-[#FFB800]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                "Got approved in just 24 hours. Amazing experience!"
              </p>
            </div>

            {/* Floating Badge - Mid Right */}
            <div className="floating-element hidden lg:flex absolute top-[45%] right-[-10%] items-center gap-2 px-4 py-2.5 bg-[#45267F] text-white rounded-full shadow-lg opacity-0">
              <span className="text-sm font-semibold">Quick Approval</span>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <FaClock className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with improved styling */}
      <section
        ref={featuresRef}
        className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-[#F8F7FC]"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#45267F]/3 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaChartSimple,
                title: "Smart Comparison",
                desc: "Compare rates from 20+ banks instantly to find your best match.",
                gradient: "from-[#45267F] to-[#6B4EAB]",
              },
              {
                icon: FaClock,
                title: "Fast Approval",
                desc: "AI-powered processing gets you approved in under 24 hours.",
                gradient: "from-[#FF7A00] to-[#FFB366]",
              },
              {
                icon: FaShieldHalved,
                title: "Secure Process",
                desc: "Bank-grade security for all your documents and personal data.",
                gradient: "from-[#45267F] to-[#6B4EAB]",
              },
              {
                icon: FaArrowRightArrowLeft,
                title: "Easy Remittance",
                desc: "Seamless international transfers at the lowest exchange rates.",
                gradient: "from-[#FF7A00] to-[#FFB366]",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card opacity-0 group p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#45267F]/20 shadow-sm hover:shadow-xl hover:shadow-[#45267F]/5 transition-all duration-500 cursor-default hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 mb-5 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="w-5 h-5 text-white" />
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
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
