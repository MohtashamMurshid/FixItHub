"use client";

import React, { useState } from "react";
import VoucherCard from "@/components/voucher";

const VouchersPage = () => {
  // Initial Vouchers List
  const [vouchers, setVouchers] = useState([
    {
      title: "10% Off Cleaning Services",
      description:
        "Save 10% on your next cleaning service. Keep your home spotless while enjoying great savings!",
    },
    {
      title: "Free Air-Conditioner Checkup",
      description:
        "Get a complimentary air-conditioner inspection to ensure your system is running smoothly.",
    },
    {
      title: "Free Pickup for Recycling",
      description:
        "Enjoy free pickup for your recyclable items. Make a difference for the environment without extra cost.",
    },
    {
      title: "$20 Discount on Repairs",
      description:
        "Redeem this voucher to get $20 off any repair service. Affordable fixes made simple!",
    },
  ]);

  // Handle Voucher Redemption
  const handleRedeem = (voucherTitle: string): void => {
    alert(`Voucher "${voucherTitle}" redeemed!`);
    setVouchers((prevVouchers) =>
      prevVouchers.filter((voucher) => voucher.title !== voucherTitle)
    );

    console.log(`Voucher "${voucherTitle}" redeemed.`);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">VOUCHERS</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {vouchers.map((voucher, index) => (
            <VoucherCard
              key={index}
              title={voucher.title}
              description={voucher.description}
              onRedeem={() => handleRedeem(voucher.title)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default VouchersPage;
