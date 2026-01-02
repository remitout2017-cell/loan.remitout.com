import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  // Static footer content
  const footerContent = {
    officeAddress: "Mumbai, India",
    email: "support@remitout.com",
    phone: "+91 7777 0827 55",
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/remitout_india/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/RemitoutIN/",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/remitout",
      label: "LinkedIn",
    },
  ];

  const gmailLink = (email) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <footer className="bg-[#1a1428] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 md:px-8">
        {/* Main Footer Content - compact layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 items-start mb-6">
          {/* Company Section */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Company</h3>
            <nav className="space-y-2">
              <Link href="/pages/about" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">About Us</Link>
              <Link href="/pages/careers" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">Careers</Link>
              <Link href="/pages/blog" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">Blog</Link>
              <Link href="/pages/contact-us" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Support</h3>
            <nav className="space-y-2">
              <Link href="/pages/help" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">Help Center</Link>
              <Link href="/pages/faq" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">FAQ</Link>
              <Link href="/pages/privacy-policy" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">Privacy</Link>
              <Link href="/pages/terms-of-use" className="block text-sm md:text-base text-gray-300 hover:text-[#FF7A00] transition-colors">Terms</Link>
            </nav>
          </div>

          {/* Contact (right column) - compact, social icons below */}
          <div className="flex flex-col items-start md:items-end text-sm md:text-base">
            <div className="space-y-2">
              <div className="flex items-center gap-2 md:justify-end">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00] flex-shrink-0" />
                <a href={`mailto:${footerContent.email}`} className="text-gray-300 hover:text-[#FF7A00] transition-colors">{footerContent.email}</a>
              </div>
              <div className="flex items-center gap-2 md:justify-end">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00] flex-shrink-0" />
                <a href={`tel:${footerContent.phone}`} className="text-gray-300 hover:text-[#FF7A00] transition-colors">{footerContent.phone}</a>
              </div>
              <div className="flex items-center gap-2 md:justify-end">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A00] flex-shrink-0" />
                <span className="text-gray-300">{footerContent.officeAddress}</span>
              </div>
            </div>

            {/* Social Links under contact for compact vertical layout */}
            <div className="flex gap-3 mt-4 md:mt-6 md:justify-end justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#FF7A00] flex items-center justify-center text-white hover:bg-[#e86c30] transition-colors duration-300" aria-label={social.label}>
                    <Icon className="w-4 h-4 md:w-4 md:h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs md:text-sm">
          <p>© 2025 Copyright by Remitout. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
