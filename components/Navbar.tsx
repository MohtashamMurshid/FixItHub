"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lex gap-8 items-center justify-center">
      <div className="flex flex-col sm:flex-row justify-between max-w-screen-xl mx-auto">
        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="text-xl md:hidden self-end"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links Section */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-4 items-center justify-center w-full md:w-auto mt-8 md:mt-0`}
        >
          <li>
            <Link href="/" className="text-sm hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-sm hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/subscription" className="text-sm hover:text-gray-300">
              Subscription
            </Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
