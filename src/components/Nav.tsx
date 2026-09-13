// import React from "react";

export default function Nav() {
  return (
    <nav className="max-w-7xl mx-auto sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-5 lg:py-7 mb-3 border-t border-[#F1F5F9] bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/logo-text.png" alt="navlogo" className="w-32 sm:w-36" />
        </div>

        {/* Navigation Links - desktop only */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a href="#" className="text-[#DB2777] font-semibold">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="text-[#475569]">
              Technologies
            </a>
          </li>

          <li>
            <a href="#" className="text-[#475569]">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="text-[#475569]">
              About
            </a>
          </li>

          <li>
            <a href="#" className="text-[#475569]">
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-[#334155] text-sm sm:text-base">
            Sign in
          </button>

          <button className="btn btn-sm sm:btn-md bg-[#DB2777] text-white border-none rounded-full">
            Sign Up
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl ml-2">☰</button>
      </div>
    </nav>
  );
}
