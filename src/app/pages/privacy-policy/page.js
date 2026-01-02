export const metadata = {
  title: "Terms of Use - Remitout",
  description:
    "Remitout Terms of Use for education loan and study abroad services.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Terms of Use</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 leading-relaxed">
          <p>
            Welcome to <strong>www.remitout.com</strong>, owned and operated
            by Remitout Service Private Limited. By accessing or using our
            Website, you agree to be bound by these Terms.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Our Role</h2>
            <p className="text-lg">
              Remitout is a <strong>facilitation platform</strong> that
              connects students with authorized service providers. We do not
              directly provide loans, remittances, or visa services.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12">Key Points:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mt-6">
            <li>✅ Must be 18+ years old</li>
            <li>✅ Free to use for students</li>
            <li>✅ No loan/visa guarantees</li>
            <li>✅ Governed by Indian law</li>
            <li>✅ Mumbai courts jurisdiction</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-8 mt-12 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-xl">
                <strong>Email:</strong> support@remitout.com
              </p>
              <p className="text-xl">
                <strong>Phone:</strong> +91 7777 0827 55
              </p>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last Updated: December 31, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
