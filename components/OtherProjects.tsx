import { motion } from "framer-motion";
import { Folder, GithubLogo, Link } from "phosphor-react";
import React from "react";
import projectData from "../utilities/otherProjectsData";
import { theme } from "../utilities/themeFunc";

export default function OtherProjects() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="xl:mx-36 2xl:mx-28"
    >
      <div className="mb-16 text-center">
        <p className="text-2xl font-semibold text-light sm:text-3xl">
          Other Noteworthy Projects
        </p>
        <p className="text-lg text-theme sm:pt-3 sm:text-xl">View on GitHub</p>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {projectData.map((project) => {
          return (
            <div key={project.name}>
              <a href={project?.link}>
                <div className="mb-3 rounded-sm bg-gray-900 py-10 px-5 sm:flex sm:h-full sm:flex-col sm:justify-between">
                  <div className="flex items-center justify-between pb-6">
                    <Folder size={40} color={theme} />
                    <div className="flex space-x-4">
                      {project.githubLink.length > 0 ? (
                        <a href={project.githubLink}>
                          <GithubLogo size={32} color="#8892B0" />
                        </a>
                      ) : null}
                      <Link size={32} color="#8892B0" />
                    </div>
                  </div>
                  <div>
                    <p className="pb-3 text-2xl font-semibold text-light">
                      {project.name}
                    </p>
                    <p className="pb-5 text-light">{project.description}</p>
                  </div>
                  <div className="space-x-2 text-light">
                    {project.stack.map((st) => {
                      return (
                        <span
                          key={st}
                          className="rounded-sm bg-gray-700 px-2 py-1 text-xs font-medium"
                        >
                          {st}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="mt-16 mb-32 flex justify-center lg:mb-48 xl:mb-48">
        <button className="border border-theme py-3 px-6 text-center font-mono text-lg text-theme hover:bg-theme/30">
          Show More
        </button>
      </div>
    </motion.div>
  );
}
