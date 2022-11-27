import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="mx-6 mt-16 min-h-[80vh]">
        <p className="text-lg font-medium text-theme">Hi, my name is</p>
        <p className="py-2 text-4xl font-semibold text-white">Sandeep Kumar.</p>
        <p className="text-3xl font-semibold text-dark">
          I build things for the web.
        </p>
        <p className="py-5 text-dark">
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
          <button className="my-4 cursor-pointer border border-theme py-2 px-4 font-mono text-theme hover:bg-theme/30">
            Check out my resume!
          </button>
        </a>
      </div>
    </div>
  );
}
