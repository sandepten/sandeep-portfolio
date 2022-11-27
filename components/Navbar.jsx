import { List, X } from "phosphor-react";
import React, { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="hidden justify-between px-10 font-mono font-medium lg:flex">
        <p className="text-2xl text-purple-600">S</p>
        <ul className="flex space-x-5 text-light">
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center justify-between px-6 py-7">
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
            color="#ffffff"
          />
        ) : (
          <List
            onClick={() => {
              setDropdown(true);
            }}
            size={38}
            color="#ffffff"
          />
        )}
      </div>
      {dropdown ? (
        <X
          onClick={() => {
            setDropdown(false);
          }}
          size={38}
          className="absolute right-8 top-8 z-30"
          color="#ffffff"
        />
      ) : null}
      {dropdown ? (
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-slate-900 opacity-40"></div>
      ) : null}
      {/* <div
        className={`absolute right-0 top-0 z-20 flex h-screen w-3/4 transform flex-col items-center justify-center overflow-hidden bg-gray-900 ${
          dropdown ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out`}
      >
        <ul className="-mt-12 flex flex-col space-y-12 font-medium text-light">
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
