"use client";
import dynamic from "next/dynamic";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // React Icons for Email and Phone

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center p-3 md:p-10 mt-10 bg-gray-100">
        <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
          <div className="flex items-center space-x-3">
            <MdEmail className="text-yellow-500 text-4xl" />
            <div>
              <h4 className="font-bold text-lg">Contact Us</h4>
              <p className="text-sm">divyanars@soeyantek.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-3">
            <MdPhone className="text-yellow-500 text-4xl" />
            <div>
              <h4 className="font-bold text-lg">Phone</h4>
              <p className="text-sm">+91 9700947740</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-gray-200 w-full md:w-2/3 p-3 sm:p-6 rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold">
                Your Name*
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold">
                E-mail Address*
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold">
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold">
                Subject*
              </label>
              <input
                id="subject"
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter subject"
                required
              />
            </div>

            {/* Message Field */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold">
                Message*
              </label>
              <textarea
                id="message"
                className="w-full p-2 mt-1 border rounded-md"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });