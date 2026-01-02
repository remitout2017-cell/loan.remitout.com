"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import trustimage1 from "../../public/trust-us-1.png";
import trustimage2 from "../../public/trust-us-2.jpg";

gsap.registerPlugin(ScrollTrigger);

const StudentTrustSection = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Left content animation
      gsap.fromTo(
        ".trust-content",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Right images stagger
      gsap.fromTo(
        ".trust-image",
        { scale: 0.9, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trust-images",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats card animation
      gsap.fromTo(
        ".trust-stat-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".trust-stat-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const features = [
    "Instant Rate Comparison",
    "24-Hour Approval",
    "Zero Processing Fees",
    "Dedicated Support",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-gradient-to-b from-[#F8F7FC] to-white pb-20 md:pb-28 pt-20 md:pt-28 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="trust-content opacity-0 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[28px] md:text-[38px] font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.02em]">
                Why Choose <span className="text-[#45267F]">Remitout</span> for
                Your Education Loan?
              </h2>
              <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-lg">
                We make getting education loans simple, fast, and transparent.
                From comparison to disbursement, our AI-powered platform handles
                everything seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-sm">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#45267F]/10 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-[#45267F]" />
                  </div>
                  <span className="text-[#1A1A1A] text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/pages/contact-us">
              <button className="group flex items-center gap-3 px-8 py-4 bg-[#FF7A00] text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1">
                Contact to Know More
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Right - Images */}
          <div className="trust-images relative h-[420px] md:h-[500px]">
            {/* Top Right Image */}
            <div className="trust-image opacity-0 absolute top-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 z-10">
              <Image
                src={trustimage1}
                alt="Students studying abroad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 320px"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="trust-image opacity-0 absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src={trustimage2}
                alt="Student with education loan approval"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 384px"
              />
            </div>

            {/* Stats Card */}
            <div className="trust-stat-card opacity-0 absolute top-[15%] left-[20%] bg-white rounded-2xl shadow-xl shadow-black/10 p-5 z-20 border border-[#F0F0F0]">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E8E8E8"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#45267F"
                      strokeWidth="3"
                      strokeDasharray="95 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-[#1A1A1A]">
                      95%
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#666]">
                  Customer
                  <br />
                  Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTrustSection;
