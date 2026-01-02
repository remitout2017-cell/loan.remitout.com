"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const pageRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null, "submitting", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "support@remitout.com",
      href: "mailto:support@remitout.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 7777 0827 55",
      href: "tel:+917777082755",
    },
    {
      icon: FaClock,
      label: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM IST",
      href: null,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Mumbai, India",
      href: null,
    },
  ];

  useGSAP(
    () => {
      if (!pageRef.current) return;

      const tl = gsap.timeline();

      // Badge
      tl.fromTo(
        ".contact-badge",
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
      );

      // Heading reveal
      tl.fromTo(
        ".contact-heading",
        {
          y: 60,
          opacity: 0,
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // Description
      tl.fromTo(
        ".contact-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Contact info cards
      tl.fromTo(
        ".contact-info-card",
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.3)",
        },
        "-=0.3"
      );

      // Form card
      tl.fromTo(
        ".contact-form-card",
        {
          x: 60,
          opacity: 0,
          rotateY: -10,
          transformPerspective: 1000,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Form fields stagger
      tl.fromTo(
        ".contact-form-field",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#FF7A00]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="contact-badge opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-8">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">
              Get in Touch
            </span>
          </div>

          {/* Heading */}
          <h1 className="contact-heading opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1] mb-6 max-w-2xl">
            Let's Start a <span className="text-[#FF7A00]">Conversation</span>
          </h1>

          {/* Description */}
          <p className="contact-desc opacity-0 text-[#666] text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Have questions about education loans or remittances? Our expert team
            is ready to help you every step of the way.
          </p>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Contact Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="contact-info-card opacity-0 p-5 bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#45267F]/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#45267F] to-[#6B4EAB] flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-[#666] mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[#1A1A1A] font-semibold hover:text-[#FF7A00] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#1A1A1A] font-semibold">
                        {info.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-form-card opacity-0 bg-white rounded-3xl border border-[#E8E8E8] shadow-xl shadow-black/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Quick Inquiry
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="contact-form-field opacity-0">
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#45267F]/20 focus:border-[#45267F] transition-all duration-200 text-base placeholder-[#999] text-[#1A1A1A]"
                  />
                </div>

                <div className="contact-form-field opacity-0">
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#45267F]/20 focus:border-[#45267F] transition-all duration-200 text-base placeholder-[#999] text-[#1A1A1A]"
                  />
                </div>

                <div className="contact-form-field opacity-0">
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your education loan or remittance needs..."
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#45267F]/20 focus:border-[#45267F] transition-all duration-200 text-base placeholder-[#999] resize-none text-[#1A1A1A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="contact-form-field opacity-0 group w-full flex items-center justify-center gap-3 bg-[#FF7A00] hover:bg-[#E66D00] text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  {!status && (
                    <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
                {status === "success" && (
                  <p className="text-green-600 text-center mt-2 font-medium animate-pulse">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center mt-2 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
