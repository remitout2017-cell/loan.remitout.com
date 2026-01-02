"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../../context/LoadingContext";

import remitoutLogo from "../../../public/remitout_logo.webp";

const Navbar = () => {
  const container = useRef();
  const mobileMenuRef = useRef();
  const { isFinished } = useLoading();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(
    () => {
      if (!isFinished) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".nav-logo",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".nav-link",
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".mobile-menu-btn",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.4"
        );
    },
    { scope: container, dependencies: [isFinished] }
  );

  // Mobile menu animation
  useGSAP(
    () => {
      if (isMobileMenuOpen && mobileMenuRef.current) {
        gsap.fromTo(
          mobileMenuRef.current,
          { x: "-100%" },
          { x: "0%", duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          ".mobile-nav-link",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      } else if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          x: "-100%",
          duration: 0.3,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [isMobileMenuOpen] }
  );

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/", isScroll: false },
    { label: "Our Services", href: "services", isScroll: true },
    { label: "Testimonials", href: "testimonials", isScroll: true },
    { label: "FAQs", href: "faqs", isScroll: true },
  ];

  return (
    <nav
      ref={container}
      className="bg-white/80 shadow-[0_2px_8px_0px_#F3F0F7] backdrop-blur-md font-poppins sticky top-0 z-50"
    >
      <div className="flex items-center justify-between md:px-[131px] px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 nav-logo opacity-0">
          <Link href="/">
            <Image
              src={remitoutLogo}
              alt="Remitout education loan and remittance logo"
              width={120}
              height={40}
              className="object-contain cursor-pointer w-auto h-10 md:h-12"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-sm md:text-base items-center space-x-6 lg:space-x-8 leading-[19.6px]">
          {navLinks.map((link, idx) =>
            link.isScroll ? (
              <button
                key={idx}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[#1A1A1A] font-medium nav-link opacity-0 hover:text-[#45267F] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className="text-[#1A1A1A] font-medium nav-link opacity-0 hover:text-[#45267F] transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/pages/contact-us">
            <button className="nav-link opacity-0 px-5 md:px-6 py-2 md:py-2.5 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-[#E66D00] transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7A00] rounded-lg p-2 mobile-menu-btn opacity-0 h-12 w-12 flex items-center justify-center"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <IoMenuOutline className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed left-0 top-0 w-full h-screen bg-white/95 backdrop-blur-md md:hidden transform -translate-x-full z-40"
        style={{ paddingTop: "70px" }}
      >
        <div className="flex flex-col space-y-2 px-4 py-6">
          {navLinks.map((link, idx) =>
            link.isScroll ? (
              <button
                key={idx}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[#1A1A1A] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-left mobile-nav-link opacity-0"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1A1A1A] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 block mobile-nav-link opacity-0"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/pages/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full mt-4 px-4 py-3 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-[#E66D00] transition-colors duration-300 shadow-md mobile-nav-link opacity-0">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
