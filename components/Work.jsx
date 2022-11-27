import { CaretRight } from "phosphor-react";
import React from "react";

export default function Work() {
  return (
    <div>
      <div className="mx-6 mb-36">
        <p className="mb-10 text-2xl font-bold text-light">
          Where I&apos;ve Worked
        </p>
        <div className="">
          <p className="mb-4 text-lg font-semibold text-theme underline underline-offset-4">
            Create Protocol
          </p>
          <div className="">
            <span className="mr-1 font-semibold text-light">
              FullStack Web Developer
            </span>
            <a href="https://createprotocol.org/">
              <span className="font-semibold text-theme hover:underline">
                @Create Protocol
              </span>
            </a>
            <p className="font-mono text-[0.8rem] text-dark">
              October 2022 - Present
            </p>
            <div>
              <ul className="mx-2 mt-4 text-light">
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
      </div>
    </div>
  );
}
