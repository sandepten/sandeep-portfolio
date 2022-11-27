import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-10 font-mono font-medium">
        <p className="text-2xl text-purple-600">S</p>
        <ul className="text-light flex space-x-5">
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
