import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";

/**
 * ✅ OPTIMIZATION: Comprehensive metadata for SEO and social sharing
 * - Complete OpenGraph configuration
 * - Twitter card metadata
 * - Proper canonical URL
 * - Robots directives for indexing
 */
export const metadata = {
  title: "Remitout - Privacy Policy",
  description:
    "Learn how Remitout collects, uses, and protects your data when using our education loan, admission, and remittance services.",
  alternates: { canonical: "https://loan.remitout.com/privacy-policy" },
  openGraph: {
    title: "Remitout - Privacy Policy",
    description:
      "Learn how Remitout collects, uses, and protects your personal information when using Remitout services.",
    url: "https://loan.remitout.com/privacy-policy",
    siteName: "Remitout",
    type: "website",
    images: [
      {
        url: "https://loan.remitout.com/og-image-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Remitout Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remitout - Privacy Policy",
    description:
      "Learn how Remitout collects, uses, and protects your personal information.",
  },
  // ✅ OPTIMIZATION: Robots meta for proper search engine indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p>
              Remitout Service Private Limited ("Remitout", "we", "us", "our") operates <strong>www.remitout.com</strong> (the "Website"). This Privacy Policy describes how we collect, use, disclose, and protect your personal data when you submit information for student international money transfers, education loans, admissions support, and related services.
            </p>

            <section aria-labelledby="info-collection">
              <h2 id="info-collection" className="text-xl font-semibold mt-8">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity and Contact Data</strong> – Name, email, phone, postal address</li>
                <li><strong>Education Data</strong> – Current course, school/college, grades, test scores</li>
                <li><strong>Financial Data</strong> – Income, bank details (for loan assessments)</li>
                <li><strong>Identification Data</strong> – Aadhaar/PAN, passport, visa details (when necessary)</li>
                <li><strong>Technical Data</strong> – IP address, device/browser type, cookies, analytics</li>
              </ul>
            </section>

            <section aria-labelledby="security">
              <h2 id="security" className="text-xl font-semibold mt-8">Data Security</h2>
              <p>We use industry-standard security measures such as encryption, secure servers, and access controls to protect personal data. No online transmission method is 100% secure.</p>
            </section>

            <section aria-labelledby="contact-us">
              <h2 id="contact-us" className="text-xl font-semibold mt-8">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, contact us at:</p>
              <p><strong>Email:</strong> <a href="mailto:support@remitout.com" className="text-[#FF7A00]">support@remitout.com</a></p>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last Updated: December 31, 2025</p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
