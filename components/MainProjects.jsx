import { GithubLogo, Link } from "phosphor-react";
import React from "react";
import projectData from "../utilities/mainProjectData";
import { theme } from "../utilities/themeFunc";

export default function MainProjects() {
  return (
    <div>
      <div className="mx-6">
        <p className="mb-10 pl-2 text-2xl font-semibold text-light">
          Some Things I&apos;ve Build
        </p>
        <div className="mb-32">
          {projectData.map((project) => {
            return (
              <div key={project.name}>
                <div className="mb-8 rounded-sm bg-gray-900 px-5 shadow-lg shadow-theme/50">
                  <p className="pt-6 pb-1 text-sm text-theme">
                    Featured project
                  </p>
                  <div>
                    <a href={project.link}>
                      <p className="pb-4 text-xl font-bold text-light">
                        {project.name}
                      </p>
                    </a>
                    <p className="pb-5 text-light">{project.description}</p>
                    <div className="flex flex-wrap space-x-2 pb-6 text-light">
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
                    <div className="flex space-x-3 pb-6">
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
