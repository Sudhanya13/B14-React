import React from "react";

export default function Nav() {
  return (
    <nav className="container sticky top-0 z-50 px-6 py-7  bg-white-500 mx auto items-center flex justify-between border-b-4 border-white">
      <div>
        <img src="/logo-text.png" alt="navlogo" />
      </div>

      <ul className="flex justify-between gap-6">
        <li>
          <a href="#" className="text-[#DB2777] font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-[#475569]">
            Technologies{" "}
          </a>
        </li>
        <li>
          <a href="#" className="text-[#475569]">
            {" "}
            Projects{" "}
          </a>
        </li>
        <li>
          <a href="#" className="text-[#475569]">
            About{" "}
          </a>
        </li>
        <li>
          <a href="#" className="text-[#475569]">
            Contact{" "}
          </a>
        </li>
      </ul>

      <div className="flex gap-4">
        <button className=" text-[#334155]">Sign in </button>
        <button className="btn bg-[#DB2777] text-white border-none rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
