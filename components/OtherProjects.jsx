import { Folder, GithubLogo, Link } from "phosphor-react";
import React from "react";
import projectData from "../utilities/otherProjectsData";
import { theme } from "../utilities/themeFunc";

export default function OtherProjects() {
  console.log(projectData);
  return (
    <div>
      <div className="mb-16 text-center">
        <p className="text-2xl font-semibold text-light">
          Other Noteworthy Projects
        </p>
        <p className="text-lg text-theme">View on GitHub</p>
      </div>
      <div className="mb-32">
        {projectData.map((project) => {
          return (
            <div key={project.name}>
              <a href={project.link}>
                <div className="mx-6 mb-3 rounded-sm bg-gray-900 px-5">
                  <div className="flex items-center justify-between py-6">
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
                    <div className="space-x-2 pb-10 text-light">
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
                </div>
              </a>
            </div>
          );
        })}
        <div className="mt-16 flex justify-center">
          <button className="border border-theme py-3 px-6 text-center font-mono text-lg text-theme hover:bg-theme/30">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
