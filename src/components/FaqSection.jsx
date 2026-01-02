"use client";
import React, { useState, useRef } from "react";
import { Minus, Plus } from "lucide-react";
import { HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "loan-assistance", label: "Loan Assistance" },
  { id: "money-transfer", label: "Money Transfer" },
];

const allFaqs = {
  "loan-assistance": [
    {
      question: "What is the minimum loan amount?",
      answer:
        "₹5 lakhs for Indian universities, $10,000 for abroad. Maximum up to ₹1.5 crore or full course fees based on your profile.",
    },
    {
      question: "How long does loan approval take?",
      answer:
        "24-72 hours after KYC verification. We compare rates from 20+ banks including SBI, HDFC, Axis, ICICI.",
    },
    {
      question: "What interest rates can I expect?",
      answer:
        "Interest rates range from 8.5% to 11.5% p.a. depending on the bank and your profile. We help you find the lowest rate available for your situation.",
    },
    {
      question: "Is collateral required for education loans?",
      answer:
        "Loans up to ₹7.5 lakhs are typically collateral-free. For higher amounts, property or fixed deposits may be required depending on the bank.",
    },
    {
      question: "What is the repayment period?",
      answer:
        "Repayment starts 6-12 months after course completion with a tenure of up to 15 years. We help you choose flexible EMI options that suit your career plans.",
    },
    {
      question: "Can I get a loan without a co-applicant?",
      answer:
        "Some banks offer loans without co-applicants for students with strong profiles or admits to top universities. Contact us to check your eligibility.",
    },
  ],
  "money-transfer": [
    {
      question: "How do I send money abroad for tuition?",
      answer:
        "Use our platform to transfer directly to your university. We handle all RBI compliance, offer best FX rates, and provide real-time tracking.",
    },
    {
      question: "What are the transfer fees?",
      answer:
        "We charge a flat ₹500 + GST for transfers up to ₹50 lakhs. No hidden fees, no markups on exchange rates.",
    },
    {
      question: "How long does a transfer take?",
      answer:
        "Most transfers complete within 24-48 hours. Express transfers to USA/UK universities can be done in 4-6 hours.",
    },
    {
      question: "What is the maximum amount I can transfer?",
      answer:
        "Under LRS (Liberalized Remittance Scheme), you can transfer up to $250,000 (approx ₹2 crore) per financial year for education purposes.",
    },
    {
      question: "Is the money transfer RBI compliant?",
      answer:
        "100% compliant with RBI guidelines. We handle all A2 form filings and provide transaction certificates for your records and tax purposes.",
    },
  ],
};

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("loan-assistance");
  const [openItem, setOpenItem] = useState(0);
  const sectionRef = useRef();

  const filteredFaqs = allFaqs[activeCategory] || [];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Header animation
      gsap.fromTo(
        ".faq-header",
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

      // Categories animation
      gsap.fromTo(
        ".faq-categories",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-categories",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // FAQ items stagger
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenItem(0);
  };

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div
      ref={sectionRef}
      id="faqs"
      className="w-full bg-gradient-to-b from-white to-[#F8F7FC] py-20 lg:py-28"
    >
      <div className="px-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="faq-header opacity-0 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-full shadow-sm mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-[#666] text-sm font-medium">
              Got Questions?
            </span>
          </div>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1A1A1A] tracking-[-0.02em] mb-4">
            Frequently <span className="text-[#45267F]">Asked</span> Questions
          </h2>
          <p className="text-[#666] text-lg">
            We've got you covered with answers to common questions
          </p>
        </div>

        {/* Categories */}
        <div className="faq-categories opacity-0 mb-10">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  category.id === activeCategory
                    ? "bg-[#45267F] text-white shadow-lg shadow-[#45267F]/20"
                    : "bg-white text-[#666] border border-[#E8E8E8] hover:border-[#45267F]/30 hover:text-[#45267F]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="faq-list space-y-3">
          {filteredFaqs.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className="faq-item opacity-0 bg-white border border-[#E8E8E8] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#FAFAFA] transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-[#1A1A1A] font-medium text-base pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-[#45267F]" : "bg-[#F5F5F5]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus
                        className={`w-4 h-4 ${
                          isOpen ? "text-white" : "text-[#45267F]"
                        }`}
                      />
                    ) : (
                      <Plus
                        className={`w-4 h-4 ${
                          isOpen ? "text-white" : "text-[#45267F]"
                        }`}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[#666] text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
