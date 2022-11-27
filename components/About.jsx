import Image from "next/image";
import { CaretRight } from "phosphor-react";
import React from "react";
import Skills from "./Skills";

export default function About() {
  return (
    <div>
      <div className="mx-6 mb-36">
        <p className="mb-10 text-3xl font-bold text-light">About me</p>
        <div className="space-y-3 text-dark">
          <p>
            The Covid Lockdown changed the life of many people but for me it
            gave a chance to get to know what I really love and that was{" "}
            <span className="text-theme">Web development and programming.</span>
          </p>
          <p>
            Since then, I have given most of my time to learn a lot of essential
            skills required to become a{" "}
            <span className="text-theme">full stack web developer</span>. I
            really love making complex and beautiful UI on the frontend &
            Working with Multiple APIs, database integration and queries,
            authentication systems on the backend. I have worked on multiple
            projects on both the front & backend of the application.
          </p>
          <p>
            Currently I am{" "}
            <span className="text-theme">looking for new opportunities</span>{" "}
            and if you want me to work with you, contact me below!
          </p>
        </div>
        <div>
          <img
            src="/profile.jpg"
            className="my-16 mx-auto w-3/5 border-8 border-theme"
            alt="pic of me"
          />
        </div>
        <Skills />
      </div>
    </div>
  );
}
