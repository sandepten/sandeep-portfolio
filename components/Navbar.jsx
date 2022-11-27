import { List, X } from "phosphor-react";
import React, { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="hidden items-center justify-between px-10 py-7 font-mono font-medium md:flex xl:px-16">
        <button className="relative w-fit rounded-full border-2 border-theme p-5">
          <span className="absolute top-1 left-[0.9rem] text-2xl font-semibold text-theme">
            S
          </span>
        </button>
        <ul className="flex space-x-7 text-light xl:space-x-10 [&>*]:cursor-pointer">
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 900, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            About
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 1200, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Skills
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 1700, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Experience
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 2300, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Work
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 4000, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-6 py-7 md:hidden">
        <button className="relative w-fit rounded-full border-2 border-theme p-5">
          <span className="absolute top-1 left-[0.75rem] text-2xl font-semibold text-theme">
            S
          </span>
        </button>
        {dropdown ? (
          <X
            onClick={() => {
              setDropdown(false);
            }}
            size={38}
            className="absolute right-8 top-8 z-30 text-light"
          />
        ) : (
          <List
            onClick={() => {
              setDropdown(true);
            }}
            size={38}
            className="cursor-pointer text-light"
          />
        )}
      </div>
      {dropdown ? (
        <div className="absolute top-0 left-0 z-0 h-full w-full bg-slate-900 opacity-40"></div>
      ) : null}
      <div
        className={`absolute right-0 top-0 z-20 flex h-screen w-3/4 transform flex-col items-center justify-center overflow-hidden bg-gray-900 md:hidden ${
          dropdown ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out`}
      >
        <ul className="-mt-12 flex flex-col space-y-12 font-medium text-light">
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 900, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            About
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 1200, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Skills
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 1700, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Experience
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 2300, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Work
          </li>
          <li
            onClick={() => {
              setDropdown(false);
              window.scrollTo({ top: 4000, left: 0, behavior: "smooth" });
            }}
            className="hover:text-theme"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
