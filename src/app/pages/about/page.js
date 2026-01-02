"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaGlobe,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef();
  const contentRef = useRef();

  const stats = [
    { icon: FaUsers, value: "10,000+", label: "Students Helped" },
    { icon: FaGlobe, value: "50+", label: "Countries Served" },
    { icon: FaAward, value: "₹500Cr+", label: "Loans Processed" },
    { icon: FaRocket, value: "24hrs", label: "Avg. Approval" },
  ];

  const features = [
    "Fast and transparent application process",
    "Competitive interest rates from 20+ banks",
    "No hidden fees or charges",
    "Expert guidance throughout the process",
    "100% RBI compliant remittances",
    "Dedicated support team available 24/7",
  ];

  useGSAP(
    () => {
      if (!heroRef.current) return;

      const tl = gsap.timeline();

      // Hero badge
      tl.fromTo(
        ".about-badge",
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
      );

      // Hero heading with split reveal
      tl.fromTo(
        ".about-hero-line",
        {
          y: 80,
          opacity: 0,
          rotateX: -45,
          transformOrigin: "bottom center",
          transformPerspective: 1000,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // Description
      tl.fromTo(
        ".about-hero-desc",
        { y: 30, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Stats with 3D entry
      tl.fromTo(
        ".about-stat",
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotateY: -20,
          transformPerspective: 800,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      if (!contentRef.current) return;

      // Mission section
      gsap.fromTo(
        ".mission-content",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mission-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Features with stagger
      gsap.fromTo(
        ".about-feature",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA section
      gsap.fromTo(
        ".about-cta",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cta",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: contentRef }
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#45267F]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF7A00]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="about-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-8">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">About Us</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-8">
            <div className="overflow-hidden">
              <h1 className="about-hero-line text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1]">
                Making Education
              </h1>
            </div>
            <div className="overflow-hidden mt-2">
              <h1 className="about-hero-line text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1]">
                Financing <span className="text-[#45267F]">Simple</span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="about-hero-desc opacity-0 text-[#666] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Remitout is a leading fintech platform dedicated to making education
            loans and remittances accessible to every student dreaming of
            studying abroad or pursuing higher education.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="about-stat opacity-0 p-5 md:p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-sm hover:shadow-lg hover:border-[#45267F]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#45267F] to-[#6B4EAB] flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-[#666]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        ref={contentRef}
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Mission */}
          <div className="mission-section grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="mission-content opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Our <span className="text-[#FF7A00]">Mission</span>
              </h2>
              <p className="text-[#666] text-lg leading-relaxed mb-6">
                We aim to simplify the process of securing education loans for
                students aspiring to study abroad or pursue higher education in
                India. Our AI-powered platform connects you with 20+ top banks,
                ensuring you get the best rates with minimal hassle.
              </p>
              <p className="text-[#666] text-lg leading-relaxed">
                From document verification to loan disbursement, we handle
                everything seamlessly so you can focus on what matters most -
                your education.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Students graduating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#45267F]/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8 text-center">
              Why Choose <span className="text-[#45267F]">Remitout</span>?
            </h2>
            <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="about-feature opacity-0 flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-xl border border-[#E8E8E8] hover:border-[#45267F]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-[#45267F]/10 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3.5 h-3.5 text-[#45267F]" />
                  </div>
                  <span className="text-[#1A1A1A] text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="about-cta opacity-0 bg-gradient-to-r from-[#45267F] to-[#6B4EAB] rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-[#45267F]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of students who have successfully funded their
              education dreams with Remitout.
            </p>
            <Link href="/pages/contact-us">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#45267F] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Get Started Today
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
