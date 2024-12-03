import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 flex-1">
      {/* Rigid Plan */}
      <div className="border border-gray-300 p-6 rounded-md shadow-sm flex flex-col items-center w-64">
        <h2 className="text-xl font-semibold mb-4">Rigid Plan</h2>
        <p className="text-lg mb-2">$50/month</p>
        <p className="text-sm text-gray-600 mb-4">
          Includes advanced features for businesses.
        </p>
        <h3 className="font-medium mb-2">Advantages:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>Advanced tools for productivity</li>
          <li>Priority customer support</li>
          <li>High data limits</li>
        </ul>
        <h3 className="font-medium mb-2">Disadvantages:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>Higher cost</li>
          <li>Long-term commitment</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </div>

      {/* Soft Plan */}
      <div className="border border-gray-300 p-6 rounded-md shadow-sm flex flex-col items-center w-64">
        <h2 className="text-xl font-semibold mb-4">Soft Plan</h2>
        <p className="text-lg mb-2">$30/month</p>
        <p className="text-sm text-gray-600 mb-4">
          A budget-friendly plan with essential features.
        </p>
        <h3 className="font-medium mb-2">Advantages:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>Lower cost</li>
          <li>Easy to cancel anytime</li>
          <li>Perfect for individuals or small projects</li>
        </ul>
        <h3 className="font-medium mb-2">Disadvantages:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>Limited features</li>
          <li>Basic customer support</li>
        </ul>
        <button className="mt-4 bg-green-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-600">
          Subscribe
        </button>
      </div>
    </div>
  );
}
