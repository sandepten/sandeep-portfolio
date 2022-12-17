import { motion } from "framer-motion";
import { CaretRight } from "phosphor-react";
import React from "react";

export default function Work() {
  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-36 xl:mx-28 xl:mb-48"
      >
        <p className="mb-10 text-3xl font-bold text-light sm:text-4xl">
          Where I&apos;ve Worked
        </p>
        <div className="">
          <p className="mb-4 text-lg font-semibold text-theme underline underline-offset-4 sm:mb-8 sm:text-xl">
            Create Protocol
          </p>
          <div className="">
            <span className="mr-1 font-semibold text-light md:text-lg lg:text-xl">
              FullStack Web Developer
            </span>
            <a href="https://createprotocol.org/">
              <span className="font-semibold text-theme hover:underline md:text-lg lg:text-xl">
                @Create Protocol
              </span>
            </a>
            <p className="font-mono text-[0.8rem] text-dark md:text-base">
              October 2022 - Present
            </p>
            <div>
              <ul className="mx-2 mt-4 text-light md:mt-8 lg:text-lg">
                <li className="flex space-x-2">
                  <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
                  <span>
                    Developed websites and Integrated the website with
                    blockchain technologies
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
                  <span>
                    Worked and debugged the backend, added authentication &
                    other data processing necessities.
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
                  <span>
                    Worked with international clients and discussed their
                    requirements & worked with other developers to ensure the
                    best product is achieved.
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CaretRight className="mt-1 h-5 w-5 flex-shrink-0 text-theme" />
                  <span>
                    Spearheaded a complete refresh/upgrade of the main company
                    product and website.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
