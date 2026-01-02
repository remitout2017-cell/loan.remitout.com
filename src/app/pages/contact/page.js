"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null, "submitting", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#45267F] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? We're here to help. Reach out
              to us using any of the methods below.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                <a
                  href="mailto:hello@remitout.com"
                  className="text-[#FF7A00] hover:underline"
                >
                  hello@remitout.com
                </a>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                <a
                  href="tel:+919122125678"
                  className="text-[#FF7A00] hover:underline"
                >
                  +91 91-2212 5678
                </a>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-1">Location</h3>
                <p className="text-gray-600">Mumbai, India</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#45267F] mb-4">
              Contact Form
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] text-[#1A1A1A]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] text-[#1A1A1A]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] text-[#1A1A1A]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#FF7A00] text-white font-semibold py-2 rounded-lg hover:bg-[#E66D00] transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-center mt-2 font-medium">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-2 font-medium">
                  Something went wrong.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
