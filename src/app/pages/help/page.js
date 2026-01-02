export default function Help() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Help Center</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions and get support for your Remitout journey.
          </p>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#45267F] mb-4">Getting Started</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-gray-800">How do I create an account?</h3>
                  <p className="text-gray-600">Visit our website and click on 'Sign Up'. Fill in your details and verify your email.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">What documents do I need?</h3>
                  <p className="text-gray-600">For loan applications, you typically need ID proof, educational documents, and income proof.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-[#45267F] mb-4">Loan Assistance</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-gray-800">How long does approval take?</h3>
                  <p className="text-gray-600">Most applications are approved within 24-48 hours of submission.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">What are the interest rates?</h3>
                  <p className="text-gray-600">Interest rates start from 7.5% p.a. and vary based on creditworthiness and loan type.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Still Need Help?</h2>
              <p className="text-gray-600">
                Can't find the answer you're looking for? <a href="/pages/contact-us" className="text-[#FF7A00] hover:underline">Contact our support team</a> and we'll be happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
