import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="mt-16 min-h-[80vh] sm:mt-24 md:mt-16 xl:mt-28">
        <p className="text-lg font-medium text-theme">Hi, my name is</p>
        <p className="py-2 text-4xl font-semibold text-white sm:py-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]">
          Sandeep Kumar.
        </p>
        <p className="text-3xl font-semibold text-dark sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          I build things for the web.
        </p>
        <p className="py-5 text-dark lg:w-3/5 lg:py-8">
          I&apos;m a software engineer based in India, specializing in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between. Currently I&apos;m working as a fullstack
          developer at{" "}
          <a href="https://createprotocol.org/">
            <span className="font-medium text-theme hover:underline">
              Create Protocol
            </span>
          </a>
        </p>
        <a href="/resume.pdf" rel="noreferrer" target="_blank">
          <button className="mt-4 cursor-pointer border border-theme py-2 px-4 font-mono text-theme hover:bg-theme/30 sm:mt-8 sm:py-3 sm:px-5 lg:mt-4">
            Check out my resume!
          </button>
        </a>
      </div>
    </div>
  );
}
