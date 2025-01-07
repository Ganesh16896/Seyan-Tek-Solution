"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // React Icons for Email and Phone
import emailjs from "@emailjs/browser";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const serviceID = "service_jte8txq";
    // const templateID = "template_iyxjeoo";
    // const publickey = "i4qkUeelf1sQHaWGf";

    const serviceID = "service_gndldkm";
    const templateID = "template_3fee2x8";
    const publickey = "OAZQQt5awY2cyLAI7";
    try {
      const emailParams = {
        to_name: "Recipient Name", // Replace with dynamic recipient name if needed
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publickey
      );

      if (res.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-5 scroll-mt-[0px]  duration-300" id="contact">
      <div className="flex flex-col md:flex-row  gap-10 justify-between items-center p-3 md:p-10 mt-10 border-t-2">
        <div className="flex flex-col items-center  md:items-start space-y-4 md:w-1/3 mt-10 sm:mt-0">
          <div className="relative">
            <Image
              src="/image/logo1.svg"
              width={300}
              height={250}
              className="object-contain"
              alt="banner"
              priority
            />
          </div>
          <div className="flex items-center space-x-3 ">
            <MdEmail className="text-blue-500 text-4xl" />
            <div>
              <h4 className="font-bold text-lg">Contact Us</h4>
              <a
                href="mailto:divyanrs@seyantek.com"
                className="text-sm text-blue-500 hover:underline"
              >
                divyanrs@seyantek.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 ">
            <MdPhone className="text-green-500 text-4xl" />
            <div>
              <h4 className="font-bold text-lg">Phone No.</h4>
              <a
                href="tel:+919700947740"
                className="text-sm text-green-500 hover:underline"
              >
                +91 9700947740
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 ">
            <IoLogoWhatsapp className="text-green-600 text-4xl" />
            <div>
              <h4 className="font-bold text-lg">WhatsApp No.</h4>
              <a
                href="https://wa.me/919700947740"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:underline"
              >
                +91 9700947740
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 w-full md:w-2/3 p-3 sm:p-6 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 text-black md:grid-cols-2 gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm font-bold"
              >
                Your Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-white font-bold"
              >
                E-mail Address*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 text-white mt-1 border rounded-md"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-white text-sm font-bold"
              >
                Phone Number*
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-white text-sm font-bold"
              >
                Subject*
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full  p-2 mt-1 border rounded-md"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="message"
                className="block  text-white text-sm font-bold"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full text-black p-2 mt-1 border rounded-md"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600"
                disabled={status.loading}
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
