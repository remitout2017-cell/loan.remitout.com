import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";

// Dynamically import below-the-fold components
const ContactSection = dynamic(() => import("../components/ContactSection"));
const FaqSection = dynamic(() => import("../components/FaqSection"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const StudentTrustSection = dynamic(() =>
  import("../components/StudentTrustSection")
);
const TestimonialCarousel = dynamic(() => import("../components/Testimonial"));
const WhatsAppButton = dynamic(() => import("../components/WhatsAppButton"));
const WhyRemitoutSection = dynamic(() => import("../components/Whyremitout"), {
  loading: () => <div className="h-96" />, // Optional: placeholder to reduce layout shift
});
const Footer = dynamic(() => import("../components/common/Footer"));

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StudentTrustSection />
      <ContactSection />
      <ServicesSection />
      <TestimonialCarousel />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
