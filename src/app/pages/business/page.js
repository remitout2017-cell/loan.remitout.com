export default function Business() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Business Solutions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Comprehensive business solutions tailored for students and entrepreneurs looking to start or expand their ventures.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Business Products</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Business Startup Loans:</strong> For new entrepreneurs</li>
            <li><strong>Working Capital Loans:</strong> For operational expenses</li>
            <li><strong>Expansion Loans:</strong> To grow your existing business</li>
            <li><strong>Inventory Financing:</strong> For stock management</li>
            <li><strong>Equipment Loans:</strong> For machinery and technology</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Why Partner With Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Competitive interest rates</li>
            <li>Quick disbursal process</li>
            <li>Flexible repayment terms</li>
            <li>Expert business consultation</li>
            <li>Dedicated relationship manager</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Start Your Business Journey</h2>
          <p className="text-gray-600">
            Ready to turn your business ideas into reality? <a href="/pages/contact-us" className="text-[#FF7A00] hover:underline">Contact us today</a> to discuss your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
