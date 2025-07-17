"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="fixed top-4 rounded-full backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg px-6 py-3 flex items-center justify-between text-white z-50">
        <div className="flex items-center pr-6">
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="whitehat logo"
          />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#domains" className="hover:text-gray-300">Domains</a>
          <a href="#events" className="hover:text-gray-300">Events</a>
          <a href="#news" className="hover:text-gray-300">Newsletters</a>
          <a href="#contact" className="hover:text-gray-300">Board</a>
        </div>

        <div className="flex items-center pl-6">
          <a
            href="#join"
            className="text-sm rounded-full py-1 px-3 border border-blue-500 hover:text-gray-300"
          >
            Join Now
          </a>

          <button
            className="pl-7 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed pt-[100px] w-full max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl shadow-md text-white px-6 py-4 md:hidden z-40">
          <div className="flex justify-center items-center flex-col space-y-2 text-sm">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About Us</a>
            <a href="#domains" className="hover:text-gray-300">Domains</a>
            <a href="#events" className="hover:text-gray-300">Events</a>
            <a href="#news" className="hover:text-gray-300">Newsletters</a>
            <a href="#contact" className="hover: text-gray-300">Board</a>
          </div>
        </div>
      )}
    </div>
  );
}
