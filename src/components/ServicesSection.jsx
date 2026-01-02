"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import serviceImage1 from "../../public/service_section01.webp";
import serviceImage2 from "../../public/service_section02.webp";
import serviceImage3 from "../../public/service_section03.webp";
import serviceImage4 from "../../public/service_section04.webp";

const ServicesSection = () => {
  const sectionRef = useRef();

  const processedServices = [
    {
      id: "1",
      title: "Education Loans",
      subtitle: "For Indian Students",
      description: [
        { text: "Compare rates from top 20+ banks in India instantly." },
        { text: "AI-powered approval in 24 hours with minimal documentation." },
      ],
      fullImageUrl: serviceImage1,
      imageAlt: "Education Loans",
      isEvenRow: true,
      buttonLink: "/pages/contact-us",
      buttonText: "Learn More",
    },
    {
      id: "2",
      title: "Overseas Remittance",
      subtitle: "Zero Hidden Fees",
      description: [
        { text: "Send money abroad at lowest FX rates, RBI compliant." },
        { text: "Real-time tracking and instant delivery to 100+ countries." },
      ],
      fullImageUrl: serviceImage2,
      imageAlt: "Overseas Remittance",
      isEvenRow: true,
      buttonLink: "/pages/contact-us",
      buttonText: "Learn More",
    },
    {
      id: "3",
      title: "KYC Verification",
      subtitle: "AI-Powered OCR",
      description: [
        { text: "Secure document upload and verification in seconds." },
        {
          text: "99% accuracy with multi-document support (Aadhaar, PAN, etc.).",
        },
      ],
      fullImageUrl: serviceImage3,
      imageAlt: "KYC Verification",
      isEvenRow: false,
      buttonLink: "/pages/contact-us",
      buttonText: "Learn More",
    },
    {
      id: "4",
      title: "Loan Disbursement",
      subtitle: "Direct to Account",
      description: [
        { text: "Funds transferred directly to your bank or university." },
        { text: "Flexible repayment options tailored for students." },
      ],
      fullImageUrl: serviceImage4,
      imageAlt: "Loan Disbursement",
      isEvenRow: false,
      buttonLink: "/pages/contact-us",
      buttonText: "Learn More",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Header animation
      gsap.fromTo(
        ".services-header",
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

      // Service cards stagger animation
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      id="services"
      className="bg-white w-full pb-0 md:pb-12 lg:pb-20"
    >
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="services-header opacity-0 text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-[-0.02em] mb-3 sm:mb-4">
            Our <span className="text-[#45267F]">Services</span>
          </h2>
          <p className="text-[#666] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Send money abroad for education, travel, medical, and more — 100%
            RBI-compliant and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {processedServices.map((service) => (
            <div
              key={service.id}
              className="service-card opacity-0 group grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden hover:shadow-xl hover:shadow-[#45267F]/5 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div
                className={`${
                  service.isEvenRow ? "order-1" : "order-1 md:order-2"
                } relative h-[200px] md:h-full min-h-[280px]`}
              >
                <Image
                  src={service.fullImageUrl}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div
                className={`${
                  service.isEvenRow ? "order-2" : "order-2 md:order-1"
                } p-6 md:p-8 flex flex-col justify-center bg-[#FAFAFA]`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#45267F] transition-colors duration-300">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <span className="text-[#FF7A00] text-sm font-medium mb-4">
                    {service.subtitle}
                  </span>
                )}
                <div className="space-y-2 mb-6">
                  {service.description.map((desc, i) => (
                    <p key={i} className="text-[#666] text-sm leading-relaxed">
                      • {desc.text}
                    </p>
                  ))}
                </div>
                <Link
                  href={service.buttonLink}
                  className="inline-flex items-center gap-2 text-[#45267F] font-semibold text-sm hover:text-[#FF7A00] transition-colors duration-300 group/link"
                >
                  {service.buttonText}
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
