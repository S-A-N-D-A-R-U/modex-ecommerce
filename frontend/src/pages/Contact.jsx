import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import Title from "../components/Title";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-6 py-9">
      <h1 className="text-5xl font-bold text-center mb-10">
        <Title text1={'Contact'} text2={" Us"} />
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-text-light">
              We'd love to hear from you! Whether you have a question about our
              products, need assistance with an order, or want to collaborate,
              our team is here to help.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Us",
                content: "123 Fashion Avenue, New York, NY 10001",
              },
              {
                icon: <FaPhone />,
                title: "Call Us",
                content: "+1 (555) 123-4567",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Us",
                content: "info@modexfashion.com",
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                content: "Monday - Friday: 9AM - 6PM",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-text-light">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social, index) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <i className={`fab fa-${social}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 flex items-start space-x-3">
                <div className="flex-shrink-0 pt-0.5">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-light mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-light mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-light mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-light mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors"
                >
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-text-light">Map would be displayed here</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
