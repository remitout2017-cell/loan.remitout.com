"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
  const [status, setStatus] = useState(null); // null, "submitting", "success", "error"

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
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
        setFormData({
          name: "",
          email: "",
          message: "",
          acceptTerms: false,
        });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Header animation
      gsap.fromTo(
        ".contact-header",
        { y: 30, opacity: 0 },
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

      // Image animation
      gsap.fromTo(
        ".contact-image",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form fields stagger
      gsap.fromTo(
        ".contact-form-field",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 75%",
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
      id="contact"
      className="py-20 lg:py-28 px-6 bg-[#FAFAFA]"
    >
      <div className="container mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="contact-header opacity-0 text-center mb-14">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1A1A1A] tracking-[-0.02em] mb-4">
            Get In <span className="text-[#FF7A00]">Touch</span>
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto">
            Have questions? Our team is here to help you with your education
            financing needs
          </p>
        </div>

        {/* Content Card with subtle orange accent */}
        <div className="contact-content bg-white rounded-3xl shadow-xl shadow-black/5 border border-[#F0F0F0] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Orange accent strip + Image */}
            <div className="contact-image opacity-0 relative lg:w-[45%] hidden md:block">
              {/* Orange accent bar */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#FF7A00] to-[#FFB366]" />

              <div className="relative h-full min-h-[400px] lg:min-h-full">
                <Image
                  src="/contact_Banner.webp"
                  alt="Graduate student consulting with advisor"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 450px, 450px"
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/10 to-transparent" />
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:w-[55%] p-8 md:p-10 lg:p-12">
              <form
                className="contact-form space-y-5"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="contact-form-field opacity-0">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-[#1A1A1A]"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all duration-200 text-base placeholder-[#999] text-[#1A1A1A]"
                  />
                </div>

                <div className="contact-form-field opacity-0">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-[#1A1A1A]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all duration-200 text-base placeholder-[#999] text-[#1A1A1A]"
                  />
                </div>

                <div className="contact-form-field opacity-0">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-[#1A1A1A]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your education loan or remittance needs..."
                    required
                    className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all duration-200 text-base placeholder-[#999] resize-none text-[#1A1A1A]"
                  />
                </div>

                <div className="contact-form-field opacity-0 flex items-start gap-3">
                  <input
                    id="terms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-1 text-[#FF7A00] border-2 border-[#E8E8E8] rounded focus:ring-[#FF7A00] focus:ring-2 cursor-pointer accent-[#FF7A00]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#666] cursor-pointer select-none leading-relaxed"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms-of-use"
                      className="text-[#FF7A00] hover:underline font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-[#FF7A00] hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="contact-form-field opacity-0 group w-full flex items-center justify-center gap-3 bg-[#FF7A00] hover:bg-[#E66D00] text-white text-base font-semibold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
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
      </div>
    </section>
  );
}
