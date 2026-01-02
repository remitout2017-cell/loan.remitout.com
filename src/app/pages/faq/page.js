export default function FAQ() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Frequently Asked Questions</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">What is Remitout?</h3>
              <p className="text-gray-600">Remitout is a fintech platform providing education loans and remittance services to help students and professionals achieve their goals.</p>
            </div>
            
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">Am I eligible for a loan?</h3>
              <p className="text-gray-600">You need to be between 18-35 years old, have an admission letter from a recognized institution, and maintain a good credit history.</p>
            </div>
            
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">How much can I borrow?</h3>
              <p className="text-gray-600">Loan amounts range from ₹1 lakh to ₹50 lakhs depending on your educational program and financial profile.</p>
            </div>
            
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">What are the repayment options?</h3>
              <p className="text-gray-600">We offer flexible repayment schedules including EMI options and deferred payment plans for students.</p>
            </div>
            
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">Is there a prepayment penalty?</h3>
              <p className="text-gray-600">No, you can prepay your loan at any time without any additional charges.</p>
            </div>
            
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">How do I apply?</h3>
              <p className="text-gray-600">Visit our website, fill out the application form, upload required documents, and our team will process your application within 24-48 hours.</p>
            </div>
            
            <div className="border-l-4 border-[#FF7A00] pl-6 py-2">
              <h3 className="text-xl font-bold text-[#45267F] mb-2">Do you offer international transfers?</h3>
              <p className="text-gray-600">Yes, we offer secure and affordable international money transfers to over 150 countries.</p>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-[#45267F]/10 rounded-lg">
            <p className="text-gray-600">
              Have more questions? <a href="/pages/contact-us" className="text-[#FF7A00] font-semibold hover:underline">Contact us</a> and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
