import { motion } from "framer-motion";
import { CaretRight } from "phosphor-react";
import React from "react";

export default function Skills() {
  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="xl:mx-24"
      >
        <p className="mt-10 mb-4 text-2xl font-bold text-light sm:text-3xl lg:mt-24">
          Skills
        </p>
        <p className="mb-6 text-dark sm:text-lg">
          For the past two years I have worked with and learned many skills:
        </p>
        <ul className="mx-2 mt-4 grid grid-cols-2 text-light sm:text-lg md:grid-cols-4">
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>JavaScript</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />

            <span>TypeScript</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />

            <span>React</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>NEXT.js</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Node.js</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Express.js</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Tailwind</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Redux/Recoil</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Firebase</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>SQL</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Mongodb</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>C++</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Python</span>
          </li>
          <li className="mb-1.5 flex space-x-2">
            <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
            <span>Linux</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
