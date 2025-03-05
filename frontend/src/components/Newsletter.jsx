import React from 'react'
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
  
    const handleSubscribe = (e) => {
      e.preventDefault();
      if (email) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 3000);
      }
    };
  return (
    <section className="mb-12">
        <div className="bg-gradient-to-r from-[#6366f1] to-violet-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe now & get 20% off</h2>
            <p className="mb-8 text-white/90">
              Subscribe to our newsletter to receive updates on new collections,
              exclusive offers, and fashion insights.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 bg-white rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-accent px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors"
              >
                <span>Subscribe</span>
                <FaPaperPlane />
              </button>
            </form>

            {subscribed && (
              <div className="mt-4 text-white/90 flex items-center justify-center space-x-2">
                <FaCheckCircle className="text-green-400" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </div>
      </section>
  )
}

export default Newsletter