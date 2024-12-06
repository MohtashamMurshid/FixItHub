import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CustomerCarePage = () => {
  return (
    <div className="flex flex-col p-6  min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Care</h1>

      {/* Contact Information */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
          <FaPhoneAlt className="text-4xl  mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Call Us</h2>
          <p className="text-gray-700">+1 234 567 890</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
          <FaEnvelope className="text-4xl  mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Email Us</h2>
          <p className="text-gray-700">support@fixithub.com</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
          <FaMapMarkerAlt className="text-4xl  mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Visit Us</h2>
          <p className="text-gray-700">123 FixItHub Street, Taylors</p>
        </div>
      </div>

      {/* Query Form */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Submit a Query
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerCarePage;
