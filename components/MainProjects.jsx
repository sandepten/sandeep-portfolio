import { GithubLogo, Link } from "phosphor-react";
import React from "react";
import projectData from "../utilities/mainProjectData";
import { theme } from "../utilities/themeFunc";

export default function MainProjects() {
  return (
    <div>
      <div className="xl:mx-36">
        <p className="mb-10 text-3xl font-semibold text-light">
          Some Things I&apos;ve Build
        </p>
        <div className="mb-32 xl:mb-48">
          {projectData.map((project) => {
            return (
              <div key={project.name}>
                <div className="mb-8 rounded-sm bg-gray-900 px-5 py-6 shadow-lg shadow-theme/50 sm:py-10 sm:px-8">
                  <p className="pb-1 text-sm text-theme sm:pb-2 sm:text-base">
                    Featured project
                  </p>
                  <div>
                    <a href={project.link}>
                      <p className="pb-4 text-xl font-bold text-light sm:pb-8 sm:text-2xl">
                        {project.name}
                      </p>
                    </a>
                    <p className="pb-5 text-light sm:pb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap space-x-2 pb-6 text-light sm:space-x-4 sm:pb-8">
                      {project.stack.map((st) => {
                        return (
                          <span
                            key={st}
                            className="rounded-sm bg-gray-700 px-2 py-1 text-xs font-medium sm:bg-transparent sm:p-0 sm:text-base"
                          >
                            {st}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.githubLink}>
                        <GithubLogo
                          size={28}
                          className="text-dark focus:text-theme"
                        />
                      </a>
                      <a href={project.link}>
                        <Link
                          size={28}
                          className="text-dark focus:text-theme"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
