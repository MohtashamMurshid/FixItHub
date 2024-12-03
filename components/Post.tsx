"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ServiceCardProps {
  title: string;
  cost: string;
  ecoFriendly?: boolean;
  imageSrc?: string; // Optional for image placeholder
  description?: string; // Optional description for popup
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  cost,
  ecoFriendly = false,
  imageSrc,
  description = "No additional details available.",
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="max-w-xs bg-white border rounded-lg shadow-md overflow-hidden relative">
      {/* Eco-Friendly Label */}
      {ecoFriendly && (
        <div className="absolute top-2 left-2 px-2 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-md">
          Eco-Friendly
        </div>
      )}

      {/* Image Section */}
      <div
        className="w-full h-40 bg-gray-200 flex items-center justify-center cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            className="object-cover h-full w-full"
            width={300}
            height={300}
          />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3
          className="text-lg font-bold text-gray-800 cursor-pointer"
          onClick={() => setShowPopup(true)}
        >
          {title}
        </h3>
        <p className="text-gray-600 mt-1">Predicted Cost: {cost}</p>
      </div>

      {/* Popup/Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg  w-full p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-gray-700 font-medium mb-6">Cost: {cost}</p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => alert("Fixing it now!")}
              >
                Fix It Now
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowPopup(false)}
              >
                Schedule for Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
