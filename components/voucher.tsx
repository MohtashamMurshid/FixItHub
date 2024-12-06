"use client";

import React from "react";

interface VoucherCardProps {
  title: string;
  description: string;
  onRedeem: () => void;
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  title,
  description,
  onRedeem,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 border border-black/70">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onRedeem}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        Redeem
      </button>
    </div>
  );
};

export default VoucherCard;
