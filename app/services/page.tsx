"use client";
import React, { useState } from "react";
import ServiceCard from "@/components/Post";
type PostProps = {
  id: number;
  title: string;
  cost: string;
  ecoFriendly?: boolean;
  description: string;
  imageSrc?: string;
};

const posts: PostProps[] = [
  {
    id: 1,
    title: "Cleaning Services",
    cost: "$150",
    description: "Professional cleaning services for homes and offices.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/bf/1d/de/bf1ddee791cf68721164160df41fe99b.jpg",
  },
  {
    id: 2,
    title: "Air-Con Services",
    cost: "$200",
    description:
      "Comprehensive air-conditioning maintenance and repair services.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/736x/51/63/74/5163744d63c43361fc28bd3964f92d29.jpg",
  },
  {
    id: 3,
    title: "Home Appliances Repair",
    cost: "$250",
    description:
      "Repair and maintenance for refrigerators, washing machines, and more.",
    ecoFriendly: false,
    imageSrc:
      "https://i.pinimg.com/474x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg",
  },
  {
    id: 4,
    title: "Furniture Assembly and Repair",
    cost: "$100",
    description:
      "Assembly and repair services for all types of home and office furniture.",
    ecoFriendly: false,
    imageSrc:
      "https://i.pinimg.com/474x/09/93/f4/0993f48bb447b033ac696068afef78f5.jpg",
  },
  {
    id: 5,
    title: "DIY Support Materials",
    cost: "Free",
    description:
      "Access to guides and videos for tackling basic repair tasks yourself.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/0a/b9/ee/0ab9ee1968e207142e8540e0a26e76e8.jpg",
  },
  {
    id: 6,
    title: "Sustainability Services",
    cost: "Varies",
    description:
      "Recycling, waste management, and carbon footprint tracking services.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/d7/b7/66/d7b766e3211fa8f3446b148e4384d989.jpg",
  },
  {
    id: 7,
    title: "Carpentry Services",
    cost: "$180",
    description:
      "Custom carpentry solutions for repairs, renovations, and new projects.",
    ecoFriendly: false,
    imageSrc:
      "https://i.pinimg.com/474x/4b/b1/68/4bb1688aaec63d5113d66b38af1b3b2b.jpg",
  },
  {
    id: 8,
    title: "Electrical Repairs",
    cost: "$220",
    description:
      "Fix electrical issues like wiring, lighting, and appliances safely.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/c1/d3/cd/c1d3cd39a978b6c9d628131bc57bc275.jpg",
  },
  {
    id: 9,
    title: "Plumbing Services",
    cost: "$200",
    description: "Resolve leaks, blockages, and water system maintenance.",
    ecoFriendly: false,
    imageSrc:
      "https://i.pinimg.com/474x/c9/ca/23/c9ca23330fd66eef3cc6003d2d7a4af5.jpg",
  },
  {
    id: 10,
    title: "Painting and Renovation",
    cost: "$300",
    description: "Professional painting and minor renovation services.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/5d/1b/3e/5d1b3e2ea9556a73cac40493655fe647.jpg",
  },
  {
    id: 11,
    title: "Smart Home Installation",
    cost: "$400",
    description:
      "Install and maintain smart home devices for automation and energy savings.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/b9/f8/71/b9f87145c61cd35eaa42804e2d34c158.jpg",
  },
  {
    id: 12,
    title: "Garden Maintenance",
    cost: "$150",
    description:
      "Eco-friendly gardening, landscaping, and maintenance services.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/474x/d3/bd/79/d3bd79a423aa4a786e5cce7dfd7c1512.jpg",
  },
  {
    id: 13,
    title: "Pest Control",
    cost: "$120",
    description:
      "Environmentally friendly solutions to eliminate pests from your property.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/736x/51/8e/42/518e42d713a7ed3ef945b07a20a1144a.jpg",
  },
  {
    id: 14,
    title: "Roof Repair",
    cost: "$350",
    description:
      "Professional roof inspections, repairs, and maintenance services.",
    ecoFriendly: false,
    imageSrc:
      "https://i.pinimg.com/736x/74/13/e9/7413e956294b3bc73710fe432fee57e2.jpg",
  },
  {
    id: 15,
    title: "Window and Glass Repair",
    cost: "$100",
    description: "Repair or replace broken windows and glass surfaces.",
    ecoFriendly: true,
    imageSrc:
      "https://i.pinimg.com/736x/74/13/e9/7413e956294b3bc73710fe432fee57e2.jpg",
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.description.toLowerCase().includes(term)
      )
    );
  };

  return (
    <section className="p-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-center mb-6">Our Services</h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search services..."
          className="border border-gray-300 rounded-md p-2 w-full max-w-md"
        />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <ServiceCard
              key={post.id}
              title={post.title}
              cost={post.cost}
              ecoFriendly={post.ecoFriendly}
              imageSrc={post.imageSrc}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No services found.
          </p>
        )}
      </div>
    </section>
  );
}
