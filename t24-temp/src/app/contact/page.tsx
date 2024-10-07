'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../../components/navbar/navbar';
import { HeroHighlight } from "../../components/ui/hero-highlight";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(`Message Sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
    
        <Navbar />
     

      {/* Content section with scrollable behavior */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* NIT Calicut Heading */}
        <div className="flex flex-col justify-center items-center p-4 bg-white">
          <h2 className="text-[4vw] font-semibold text-black mb-6 text-center">
            National Institute of Technology Calicut
          </h2>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full border-2 border-gray-300">
            <h2 className="text-[4.5vw] font-semibold text-center text-gray-700 mb-6 sm:text-[2.5vw]">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
