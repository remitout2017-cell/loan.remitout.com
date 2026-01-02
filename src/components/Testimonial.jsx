"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TestimonialCarousel = () => {
  const sectionRef = useRef();

  const testimonials = [
    {
      id: "1",
      text: "Remitout made my education loan process seamless. Compared rates from multiple banks and got the best deal in just 24 hours!",
      name: "Priya Sharma",
      role: "MS Student, USA",
      rating: 5,
      avatar: "/avatar.webp",
    },
    {
      id: "2",
      text: "The KYC verification was super fast with their AI OCR. No more waiting weeks for document checks—approved instantly!",
      name: "Rahul Patel",
      role: "MBA Student, UK",
      rating: 5,
      avatar: "/avatar1.jpg",
    },
    {
      id: "3",
      text: "Perfect for sending money abroad for my UK tuition. Lowest fees and real-time tracking—highly recommend!",
      name: "Anita Desai",
      role: "Engineering Student, Canada",
      rating: 5,
      avatar: "/StudentTrust01.webp",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Create a timeline for complex animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Heading with character split effect simulation
      tl.fromTo(
        ".testimonial-heading-line",
        {
          y: 100,
          opacity: 0,
          rotateX: -90,
          transformOrigin: "top center",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
        }
      ).fromTo(
        ".testimonial-subtitle",
        { y: 30, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Cards with 3D rotation entry
      gsap.fromTo(
        ".testimonial-card",
        {
          y: 80,
          opacity: 0,
          rotateY: -15,
          rotateX: 10,
          scale: 0.9,
          transformPerspective: 1000,
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.15,
            from: "center",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect on background
      gsap.to(".testimonial-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-base sm:text-lg ${
          i < rating ? "text-[#FFB800]" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full relative overflow-hidden"
    >
      <div className="relative w-full min-h-[100vh] sm:min-h-[90vh] md:min-h-[85vh] flex flex-col">
        {/* Background with parallax */}
        <div className="testimonial-bg absolute inset-0 -top-[10%] -bottom-[10%]">
          <Image
            src="/TestimonialBannerNew.webp"
            alt="Indian students abroad using Remitout for education loans"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-[#1A1A1A]/50 to-[#1A1A1A]/80" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full min-h-[100vh] sm:min-h-[90vh] md:min-h-[85vh] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
          {/* Heading */}
          <div className="testimonial-heading mb-auto pt-4 md:pt-8">
            <div className="overflow-hidden">
              <div className="testimonial-heading-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
                What Our Students
              </div>
            </div>
            <div className="overflow-hidden mt-2">
              <div className="testimonial-heading-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
                Are <span className="text-[#FF7A00]">Saying</span>
              </div>
            </div>
            <p className="testimonial-subtitle opacity-0 text-white/70 text-sm sm:text-base mt-4 font-medium tracking-wide">
              Voices of Confidence
            </p>
          </div>

          {/* Testimonials Grid - Fully Responsive */}
          <div className="mt-auto pb-4 md:pb-8">
            <div className="testimonials-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card opacity-0 group bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl border border-white/20 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                >
                  {/* Quote icon */}
                  <div className="mb-4 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#45267F]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed mb-5 font-medium line-clamp-4 sm:line-clamp-none">
                    "{testimonial.text}"
                  </p>

                  {/* Author + Stars */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-[#E8E8E8]">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover ring-2 ring-[#45267F]/10 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-[#666] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 ml-13 sm:ml-0">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10 justify-center">
              <div className="h-1.5 sm:h-2 w-16 sm:w-20 bg-[#FF7A00] rounded-full shadow-lg" />
              <div className="h-1.5 sm:h-2 w-3 sm:w-4 bg-white/50 rounded-full" />
              <div className="h-1.5 sm:h-2 w-3 sm:w-4 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
