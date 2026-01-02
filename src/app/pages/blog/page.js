export default function Blog() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Blog</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest insights, tips, and news about education loans and financial planning.
          </p>
          
          <div className="grid gap-6">
            <article className="border-l-4 border-[#FF7A00] pl-6 py-4">
              <h2 className="text-2xl font-bold text-[#45267F] mb-2">Understanding Education Loans</h2>
              <p className="text-gray-600">Learn everything you need to know about education loans, from eligibility criteria to application process.</p>
              <p className="text-sm text-gray-400 mt-2">Coming soon...</p>
            </article>
            
            <article className="border-l-4 border-[#FF7A00] pl-6 py-4">
              <h2 className="text-2xl font-bold text-[#45267F] mb-2">Top Universities for Higher Education</h2>
              <p className="text-gray-600">Explore the best universities around the world and find the perfect fit for your academic goals.</p>
              <p className="text-sm text-gray-400 mt-2">Coming soon...</p>
            </article>
            
            <article className="border-l-4 border-[#FF7A00] pl-6 py-4">
              <h2 className="text-2xl font-bold text-[#45267F] mb-2">Financial Tips for Students</h2>
              <p className="text-gray-600">Manage your finances wisely and make the most of your education investment.</p>
              <p className="text-sm text-gray-400 mt-2">Coming soon...</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
