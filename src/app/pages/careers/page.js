export default function Careers() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">Careers at Remitout</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Join our team and help us revolutionize the education loan industry.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals to join our growing team. Check back soon for available positions.
          </p>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Why Work With Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Innovative work environment</li>
            <li>Competitive salary and benefits</li>
            <li>Professional development opportunities</li>
            <li>Diverse and inclusive team</li>
            <li>Flexible work arrangements</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#45267F] mt-8 mb-4">Send Your Resume</h2>
          <p className="text-gray-600">
            Interested in joining us? Send your resume to <a href="mailto:careers@remitout.com" className="text-[#FF7A00] hover:underline">careers@remitout.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
